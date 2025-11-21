import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <div>
      {/* Left */}
      <div className='flex items-center justify-between max-w-6xl '>
        <div className='h-24 w-24 relative hidden lg:inline-grid cursor-pointer'>
            <Image src="https://cdn2.downdetector.com/static/uploads/logo/Instagram_Logo_Large.png" alt='Instagram' layout='fill' className='object-contain'/>
        </div>

        <div className='h-24 w-10 relative lg:hidden cursor-pointer'>
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png" alt='Instagram' layout='fill' className='object-contain'/>
        </div>
        <h1>Right Side</h1>
      </div>

      {/* Middle */}

      {/* Right */}
    </div>
  )
}
