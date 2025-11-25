"use client";

import Image from "next/image";

export default function Story({ img, username }) {
  return (
    <div>
      <Image
        src={img}
        alt={username}
        width={56}
        height={56}
        className="rounded-full border-red-500 border-2 p-[2px] cursor-pointer hover:scale-110 transition-transform duration-200 ease-out"
      />
      <p className="text-xs w-14 truncate">{username}</p>
    </div>
  );
}
