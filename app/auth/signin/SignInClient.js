"use client";

import { signIn } from "next-auth/react";

export default function SignInClient({ providers }) {
  return (
    <div>
      {providers &&
        Object.values(providers).map((provider) => (
          <button onClick={() => signIn(provider.id)}
            key={provider.id}
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg mt-3 hover:bg-blue-700 transition-colors"
          >
            Sign in with {provider.name}
          </button>
        ))}
    </div>
  );
}
