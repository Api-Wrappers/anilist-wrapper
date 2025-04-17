import type { ANILISTSDK } from "../@types";

export class StaffService {
  private client: ANILISTSDK;

  constructor(client: ANILISTSDK) {
    this.client = client;
  }

  getStaffById(id: number) {
    return this.client.GetStaffById({ id });
  }

  getStaffBirthdayToday(page = 1) {
    return this.client.StaffBirthdayToday({ page });
  }

  toggleFavoriteStaff(staffId: number) {
    return this.client.ToggleFavoriteStaff({ staffID: staffId });
  }
}
