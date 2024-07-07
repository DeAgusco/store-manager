import { Shop } from "./shop";
import { Product } from "./product";

export type Activity = {
    id: number;
    shop: Shop;
    product: Product;
    activity: string;
    date_of_activity: string;
    employee: string | null;
};