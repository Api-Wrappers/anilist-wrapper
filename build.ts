import { rmSync } from "node:fs";
import { resolve } from "node:path";
import type { BuildConfig } from "bun";
import dts from "bun-plugin-dts";

// ─────────────────────────────────────────────────────────────
// Configuration
// ─────────────────────────────────────────────────────────────

const NODE_ENV = process.env.NODE_ENV ?? "development";
const isProduction = NODE_ENV === "production";

const LOG_LEVEL = process.env.LOG_LEVEL ?? "info"; // "info" | "silent"
const log = (...args: unknown[]) =>
	LOG_LEVEL === "info" && console.log(...args);

const outdir = resolve("./dist");

const defaultBuildConfig: BuildConfig = {
	entrypoints: ["./src/index.ts"],
	outdir,
	minify: isProduction,
	sourcemap: isProduction ? undefined : "inline",
	target: "bun",
};

type Format = "esm" | "cjs";

interface FormatConfig {
	format: Format;
	naming: string;
	plugins?: BuildConfig["plugins"];
}

const buildFormats: FormatConfig[] = [
	{
		format: "esm",
		naming: "[dir]/[name].js",
		plugins: [dts()],
	},
	{
		format: "cjs",
		naming: "[dir]/[name].cjs",
	},
];

// ─────────────────────────────────────────────────────────────
// Build Function
// ─────────────────────────────────────────────────────────────

async function buildAll() {
	log(`\n📦 Starting build in ${NODE_ENV} mode...\n`);

	// Clean output directory
	try {
		rmSync(outdir, { recursive: true, force: true });
		log(`🧹 Removed existing '${outdir}' directory.`);
	} catch (err) {
		console.warn(`⚠️ Failed to clean '${outdir}':`, err);
	}

	// Run builds for each format
	for (const { format, naming, plugins } of buildFormats) {
		try {
			log(`🔧 Building format: ${format}`);
			await Bun.build({
				...defaultBuildConfig,
				format,
				naming,
				plugins,
			});
			log(`✅ Built ${format} format successfully.`);
		} catch (error) {
			console.error(`❌ Build failed for format '${format}':`, error);
			process.exit(1);
		}
	}

	log("\n✅ All builds completed successfully.");
}

// ─────────────────────────────────────────────────────────────
// Run Build
// ─────────────────────────────────────────────────────────────

await buildAll();
