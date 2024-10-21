import { User } from "./auth/user.type";
import { Product } from "./product.type";

export type DataTableOrders = {
  _id: string;
  totalPrice: number;
  user: User;
  products: Product[];
  status: string;
  createdAt: Date;
  __v: number;
};
