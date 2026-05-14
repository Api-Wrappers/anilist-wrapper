# StaffService

Access staff workflows through `anilist.staff`.

## Methods

| Method | Auth | Returns |
| --- | --- | --- |
| `getStaffById(id)` | No | `Staff` |
| `getStaffBirthdayToday(page?)` | No | `Page.staff` |
| `toggleFavoriteStaff(staffId)` | Yes | `ToggleFavourite` |

## Lookup

```typescript
const staff = await anilist.staff.getStaffById(95269);

console.log(staff.Staff?.name?.full);
console.log(staff.Staff?.primaryOccupations);
```

## Birthdays

`getStaffBirthdayToday` defaults to page `1`.

```typescript
const birthdays = await anilist.staff.getStaffBirthdayToday();

const names = birthdays.Page?.staff
	?.map((staffMember) => staffMember?.name?.full)
	.filter(Boolean);

console.log(names);
```

## Favorites

```typescript
const anilist = new Anilist(process.env.ANILIST_TOKEN);

await anilist.staff.toggleFavoriteStaff(95269);
```
