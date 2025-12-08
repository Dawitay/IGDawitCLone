"use client";

import Image from 'next/image';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { HomeIcon, PlusCircleIcon } from '@heroicons/react/24/solid';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Header() {
  const { data: session } = useSession();

  return (
    <div className='shadow-sm border-b bg-white sticky top-0 z-50'>
      <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">

        {/* Left */}
        <div className="h-24 w-24 relative hidden lg:inline-grid cursor-pointer">
          <Image
            src="https://cdn2.downdetector.com/static/uploads/logo/Instagram_Logo_Large.png"
            alt="Instagram"
            fill
            className="object-contain"
          />
        </div>

        <div className="h-24 w-10 relative lg:hidden cursor-pointer">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"
            alt="Instagram"
            fill
            className="object-contain"
          />
        </div>

        {/* Middle */}
        <div className="max-w-xs w-full">
          <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
            </div>

            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 
              focus:ring-black focus:border-black rounded-md"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        {/* Right */}
        <div className='flex space-x-4 items-center'>
          <HomeIcon className="hidden md:inline-flex h-10 w-10 cursor-pointer hover:scale-125 transition-transform" />

          {session ? (
            <>
              <PlusCircleIcon className="h-10 w-10 cursor-pointer hover:scale-125 transition-transform" />

              <Image
                src={session.user?.image || "https://links.papareact.com/3ke"}
                alt="Profile Pic"
                width={40}
                height={40}
                className="rounded-full ml-4 cursor-pointer"
                onClick={() => signOut()}
              />
            </>
          ) : (
            <button
              onClick={() => signIn()}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Sign In
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
