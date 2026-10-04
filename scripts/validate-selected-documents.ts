/**
 * Validates every document the selected-query tests build against AniList's
 * live schema. Codegen only validates the static SDK queries, so this catches
 * runtime-built documents that AniList would reject (wrong variable types,
 * unused variables, unknown fields).
 */
import { mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import {
	buildClientSchema,
	getIntrospectionQuery,
	type IntrospectionQuery,
	parse,
	validate,
} from "graphql";

const ANILIST_API_URL = "https://graphql.anilist.co";
const MAX_ATTEMPTS = 6;
const RATE_LIMIT_BACKOFF_MS = 15_000;

async function fetchSchema() {
	for (let attempt = 1; ; attempt++) {
		const response = await fetch(ANILIST_API_URL, {
			method: "POST",
			headers: {
				"content-type": "application/json",
				accept: "application/json",
			},
			body: JSON.stringify({ query: getIntrospectionQuery() }),
		});
		if (response.status === 429 && attempt < MAX_ATTEMPTS) {
			await Bun.sleep(RATE_LIMIT_BACKOFF_MS);
			continue;
		}
		if (!response.ok) {
			throw new Error(`Schema introspection failed: HTTP ${response.status}`);
		}
		const { data } = (await response.json()) as { data: IntrospectionQuery };
		return buildClientSchema(data);
	}
}

const logDir = mkdtempSync(join(tmpdir(), "anilist-documents-"));
const logPath = join(logDir, "documents.jsonl");

try {
	const tests = Bun.spawnSync(
		["bun", "test", "--timeout", "10000", "test/selection.test.ts"],
		{
			env: { ...process.env, ANILIST_DOCUMENT_LOG: logPath },
			stdout: "inherit",
			stderr: "inherit",
		},
	);
	if (tests.exitCode !== 0) process.exit(tests.exitCode ?? 1);

	const documents = [
		...new Set(
			readFileSync(logPath, "utf8")
				.trim()
				.split("\n")
				.map((line) => JSON.parse(line) as string),
		),
	];
	const schema = await fetchSchema();
	let invalid = 0;

	for (const document of documents) {
		const errors = validate(schema, parse(document));
		if (errors.length === 0) continue;
		invalid++;
		console.error(`\n${document.replace(/\s+/g, " ").trim()}`);
		for (const error of errors) console.error(`  - ${error.message}`);
	}

	console.log(
		`\nValidated ${documents.length} selected documents: ${invalid} invalid.`,
	);
	if (invalid > 0) process.exit(1);
} finally {
	rmSync(logDir, { recursive: true, force: true });
}
