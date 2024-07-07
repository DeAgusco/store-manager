import { Shop } from "./shop";

export type Product = {
  id?: number;
  shop?: Shop;
  name: string;
  status?: string;
  price: string;
  quantity: number;
  date_of_creation?: string;
};
