import { User } from './auth/user.type';
import { Product } from './product.type';

export type DataTableOrders = {
  _id: string;
  totalPrice: number;
  user: User;
  products: Product[];
  status: string;
  createdAt: Date;
  __v: number;
};

export type DataTableProducts = {
  _id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: Category;
  createdAt: Date;
  __v: number;
};

export interface Category {
  _id: string;
  name: string;
  description: string;
  createdAt: Date;
  __v: number;
}
