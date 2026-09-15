/**
 * Fails when line coverage drops below the configured floor.
 * Reads the lcov report written by `bun test --coverage --coverage-reporter=lcov`.
 */
const MIN_LINE_COVERAGE = 80;
const lcovPath = "coverage/lcov.info";

const file = Bun.file(lcovPath);
if (!(await file.exists())) {
	console.error(`Missing ${lcovPath}. Run the coverage command first.`);
	process.exit(1);
}

const lcov = await file.text();
let found = 0;
let hit = 0;

for (const line of lcov.split("\n")) {
	if (line.startsWith("LF:")) found += Number(line.slice(3));
	if (line.startsWith("LH:")) hit += Number(line.slice(3));
}

if (found === 0) {
	console.error("Coverage report contains no line data.");
	process.exit(1);
}

const percent = (hit / found) * 100;
const formatted = percent.toFixed(2);

if (percent < MIN_LINE_COVERAGE) {
	console.error(
		`Line coverage ${formatted}% is below the ${MIN_LINE_COVERAGE}% floor.`,
	);
	process.exit(1);
}

console.log(
	`Line coverage ${formatted}% meets the ${MIN_LINE_COVERAGE}% floor.`,
);
