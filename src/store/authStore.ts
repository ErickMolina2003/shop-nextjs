import { User } from '@/types/auth/user.type';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export type AuthState = {
  user?: User;
};

type AuthActions = {
  setUser: (user: User) => void;
  reset: () => void;
};

const initialState: AuthState = {
  user: undefined,
};

export const authStore = create<AuthState & AuthActions>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,

        setUser: (user) => set({ user: user }),
        reset: () => set(initialState),
      }),
      {
        name: 'shop-auth-store',
      }
    )
  )
);
