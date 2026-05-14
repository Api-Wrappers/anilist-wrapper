/**
 * Character and staff workflow example.
 *
 * Run with:
 *   bun examples/characters-and-staff.ts
 */
import { Anilist } from "../src/index.ts";

const anilist = new Anilist();

const character = await anilist.character.getCharacterById(1);
console.log("Character lookup");
console.log(`- Name: ${character.Character?.name?.full ?? "unknown"}`);
console.log(`- URL: ${character.Character?.siteUrl ?? "unknown"}`);

const characterBirthdays = await anilist.character.getCharactersBirthdayToday(1, 5);
console.log("\nCharacter birthdays today");

for (const birthday of characterBirthdays.Page?.characters ?? []) {
	console.log(`- ${birthday?.name?.full ?? "Unknown character"}`);
}

const staff = await anilist.staff.getStaffById(95269);
console.log("\nStaff lookup");
console.log(`- Name: ${staff.Staff?.name?.full ?? "unknown"}`);
console.log(
	`- Occupations: ${staff.Staff?.primaryOccupations?.filter(Boolean).join(", ") || "unknown"}`,
);

const staffBirthdays = await anilist.staff.getStaffBirthdayToday(1);
console.log("\nStaff birthdays today");

for (const birthday of staffBirthdays.Page?.staff?.slice(0, 5) ?? []) {
	console.log(`- ${birthday?.name?.full ?? "Unknown staff member"}`);
}
