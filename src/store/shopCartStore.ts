import { ShopCart } from '@/types/cart.type';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export type ShopCartState = {
  shopCart?: ShopCart;
};

type ShopCartActions = {
  setShopCart: (shopCart: ShopCart) => void;
  reset: () => void;
};

const initialState: ShopCartState = {
  shopCart: undefined,
};

export const shopCartStore = create<ShopCartState & ShopCartActions>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,

        setShopCart: (shopCart) => set({ shopCart: shopCart }),
        reset: () => set(initialState),
      }),
      {
        name: 'shop-cart-store',
      }
    )
  )
);
