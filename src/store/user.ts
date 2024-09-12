import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface UserModel {
  full_name: string;
}

type UserStoreType = {
  user: UserModel;
  updateUser: (newUser: UserModel) => void;
};

export const userStore = create<UserStoreType>()(
  persist(
    (set) => ({
      user: {
        full_name: "James",
      },
      updateUser: (newUser: UserModel) =>
        set((state) => ({
          user: { ...state.user, ...newUser },
        })),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
