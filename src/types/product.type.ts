export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  createdAt: Date;
  __v: number;
}

export interface CreateProduct {
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
}
