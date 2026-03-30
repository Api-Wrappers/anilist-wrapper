/**
 * Characters and staff examples — no authentication required.
 *
 * Run with: bun examples/characters-and-staff.ts
 */
import { Anilist } from "../src/index.ts";

const anilist = new Anilist();

// Get a character by ID
const character = await anilist.character.getCharacterById(1);
console.log("Character:", character?.Character?.name?.full);

// Characters with birthdays today
const birthdays = await anilist.character.getCharactersBirthdayToday();
const names = birthdays?.Page?.characters?.map((c) => c?.name?.full);
console.log("Birthdays today:", names?.join(", "));

// Get a staff member
const staff = await anilist.staff.getStaffById(95269);
console.log("Staff:", staff?.Staff?.name?.full);
