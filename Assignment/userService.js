import { fetchUserProfile } from "./userApi";
export async function getUserStatus(id) {
    const user = await fetchUserProfile(id);

    if (!user.active) {
        return "Inactive";
    }

    return 'active-${user.name}'
}