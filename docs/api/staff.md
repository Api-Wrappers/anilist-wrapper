# StaffService

Accessed via `anilist.staff`.

---

## Methods

### `getStaffById(id)`

Retrieves a staff member by their AniList ID.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | `number` | Yes | The AniList staff ID |

```typescript
const staff = await anilist.staff.getStaffById(95269);
console.log(staff?.Staff?.name?.full);
```

---

### `getStaffBirthdayToday(page?)`

Retrieves staff members whose birthday is today.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `page` | `number` | `1` | Page number |

```typescript
const birthdays = await anilist.staff.getStaffBirthdayToday();
const names = birthdays?.Page?.staff?.map((s) => s?.name?.full);
```

---

### `toggleFavoriteStaff(staffId)`

Toggles a staff member's favorite status for the authenticated user.

> **Requires authentication.** See the [Authentication guide](../authentication.md).

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `staffId` | `number` | Yes | The AniList staff ID |

```typescript
const anilist = new Anilist(process.env.ANILIST_TOKEN);
await anilist.staff.toggleFavoriteStaff(95269);
```
