import { User } from './auth/user.type';
import { Product } from './product.type';

export interface ShopCartProduct extends Product {
    quantity: number;
}

export interface ShopCart {
  totalPrice: number;
  user: User;
  products: ShopCartProduct[];
}
