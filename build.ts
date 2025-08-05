import { rmSync } from "node:fs";
import type { BuildConfig } from "bun";
import dts from "bun-plugin-dts";

const isProduction = process.env.NODE_ENV === "production";

const outdir = "./dist";

const defaultBuildConfig: BuildConfig = {
	entrypoints: ["./src/index.ts"],
	outdir,
	minify: isProduction,
	sourcemap: isProduction ? undefined : "inline",
};

type Format = "esm" | "cjs" | "iife";

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

async function buildAll() {
	console.log(
		`Starting build in ${isProduction ? "production" : "development"} mode...`,
	);

	// Remove the dist directory recursively and forcefully before building
	try {
		rmSync(outdir, { recursive: true, force: true });
		console.log(`Removed existing '${outdir}' directory.`);
	} catch (err) {
		console.warn(`Warning: Could not remove '${outdir}' directory.`, err);
	}

	try {
		await Promise.all(
			buildFormats.map(({ format, naming, plugins }) => {
				console.log(`Building format: ${format}...`);
				return Bun.build({
					...defaultBuildConfig,
					format,
					naming,
					plugins,
				});
			}),
		);
		console.log("Build completed successfully.");
	} catch (error) {
		console.error("Build failed:", error);
		process.exit(1);
	}
}

await buildAll();
