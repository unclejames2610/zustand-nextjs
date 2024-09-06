"use client";

import { userStore } from "@/store/user";

export default function Home() {
  const user = userStore((state) => state.user);
  const updateUser = userStore((state) => state.updateUser);
  return (
    <div className=" font-[family-name:var(--font-geist-sans)] flex gap-2 m-4">
      <p>{user.full_name}</p>
      <input
        className="border"
        type="text"
        onChange={(e) => {
          updateUser({
            full_name: e.target.value,
          });
        }}
      />
    </div>
  );
}
