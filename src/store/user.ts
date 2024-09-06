import { create } from "zustand";

interface UserModel {
  full_name: string;
}

type UserStoreType = {
  user: UserModel;
  updateUser: (newUser: any) => void;
};

export const userStore = create<UserStoreType>((set) => ({
  user: {
    full_name: "James",
  },
  updateUser: (newUser: any) =>
    set((state) => ({
      user: { ...state.user, ...newUser },
    })),
}));
