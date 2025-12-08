"use client";

import { signIn } from "next-auth/react";

export default function SignInClient({ providers }) {
  return (
    <div>
      {Object.values(providers).map((provider) => (
        <button
          key={provider.id}
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Sign in with {provider.name}
        </button>
      ))}
    </div>
  );
}
