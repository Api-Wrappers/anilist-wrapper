import { defineConfig } from "tsdown";

export default defineConfig({
	entry: ["./src/index.ts"],
	format: ["esm", "cjs"],
	outDir: "./dist",
	dts: true,
	clean: true,
	sourcemap: process.env.NODE_ENV === "production" ? false : true,
	minify: process.env.NODE_ENV === "production",
	treeshake: true,
	deps: {
		neverBundle: ["graphql-request"],
	},
});
