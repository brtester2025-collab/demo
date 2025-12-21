import { ENV, getToken } from "./config";

export function getClientconfig() {
    return `${ENV}-${getToken()}`
}