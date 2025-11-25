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
        className="rounded-full"
      />
      <p>{username}</p>
    </div>
  );
}
