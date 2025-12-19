import { getPrice } from "./priceApi";

export function calculateTotal(quantity) {
    return getPrice() * quantity
}