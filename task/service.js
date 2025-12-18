import { fetchUser } from "./api";

export async function getUserName() {
    const user = await fetchUser();
    return user.name;
}