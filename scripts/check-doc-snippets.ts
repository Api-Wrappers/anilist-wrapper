/**
 * Typechecks every TypeScript code block in README.md and docs/ against the
 * package source, so documented examples keep compiling as the API changes.
 *
 * Blocks that use `anilist` without creating it get an `Anilist` declaration.
 * Blocks whose first line starts with `// v3` show removed APIs and are skipped.
 */
import {
	mkdirSync,
	readdirSync,
	readFileSync,
	rmSync,
	writeFileSync,
} from "node:fs";
import { join, relative } from "node:path";

const ROOT = join(import.meta.dir, "..");
const OUT_DIR = join(ROOT, ".doc-snippets");
const CODE_BLOCK = /```(?:typescript|ts)\n([\s\S]*?)```/g;
const SKIP_MARKER = "// v3";
const ANILIST_DECLARATION = `import type * as __anilist from "@api-wrappers/anilist-wrapper";\ndeclare const anilist: __anilist.Anilist;\n`;

const markdownFiles = (dir: string): string[] =>
	readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
		const path = join(dir, entry.name);
		if (entry.isDirectory()) return markdownFiles(path);
		return entry.name.endsWith(".md") ? [path] : [];
	});

rmSync(OUT_DIR, { recursive: true, force: true });
mkdirSync(OUT_DIR);

const sources = new Map<string, string>();
for (const file of [
	join(ROOT, "README.md"),
	...markdownFiles(join(ROOT, "docs")),
]) {
	const markdown = readFileSync(file, "utf8");
	for (const match of markdown.matchAll(CODE_BLOCK)) {
		const code = match[1] ?? "";
		if (code.trimStart().startsWith(SKIP_MARKER)) continue;
		const line = markdown.slice(0, match.index).split("\n").length;
		const location = `${relative(ROOT, file)}:${line}`;
		const needsClient =
			code.includes("anilist.") && !code.includes("const anilist");
		const snippet = `${code}\nexport {};\n${needsClient ? ANILIST_DECLARATION : ""}`;
		const name = `${String(sources.size + 1).padStart(3, "0")}.ts`;
		writeFileSync(join(OUT_DIR, name), snippet);
		sources.set(name, location);
	}
}

writeFileSync(
	join(OUT_DIR, "tsconfig.json"),
	JSON.stringify({
		extends: "../tsconfig.json",
		compilerOptions: {
			rootDir: "..",
			paths: { "@api-wrappers/anilist-wrapper": ["../src/index.ts"] },
		},
		include: ["./*.ts"],
	}),
);

const tsc = Bun.spawnSync(
	[
		"bunx",
		"tsc",
		"-p",
		join(OUT_DIR, "tsconfig.json"),
		"--noEmit",
		"--pretty",
		"false",
	],
	{
		cwd: ROOT,
	},
);
const output = tsc.stdout
	.toString()
	.replace(
		/\.doc-snippets\/(\d{3}\.ts)\((\d+),\d+\)/g,
		(_, name: string, row: string) =>
			`${sources.get(name)} (snippet line ${row})`,
	);

rmSync(OUT_DIR, { recursive: true, force: true });

if (tsc.exitCode !== 0) {
	console.error(output);
	process.exit(1);
}
console.log(`Typechecked ${sources.size} documentation snippets.`);
