// app/auth/signin/page.tsx
import { getProviders } from "next-auth/react";
import SignInClient from "./SignInClient";
import Header from "../../../components/Header";

export const dynamic = "force-dynamic"; // ⬅ FIXES VERCEL PRERENDER ERROR

export default async function SignInPage() {
  const providers = await getProviders();

  return (
    <>
      <Header />

      <div className="flex flex-col items-center mt-10">
        <img
          src="https://www.postplanner.com/hubfs/instagram-automation.png"
          alt="Instagram Logo"
          className="w-48 mb-6"
        />

        <div className="text-center mb-8">
          {providers &&
            Object.values(providers).map((provider: any) => (
              <div key={provider.id} className="mb-6">
                <img
                  src="https://img.freepik.com/premium-vector/instagram-vector-logo-icon-social-media-logotype_901408-392.jpg?semt=ais_hybrid&w=740&q=80"
                  alt="Instagram"
                  className="w-20 mx-auto mb-4"
                />

                <p className="text-sm italic mb-3">
                  This is not a real app, it is built for learning purposes only.
                </p>

                <SignInClient providers={{ [provider.id]: provider }} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
