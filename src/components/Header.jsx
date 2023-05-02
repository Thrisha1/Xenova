import React from 'react'
import Logo from '../public/logodummy.png'
import Image from 'next/image'
import Link from 'next/link'
import '../app/globals.css'
import { UsersIcon } from "@heroicons/react/outline";

const Header = () => {
  return (
    <div className ="flex items-center  justify-between px-3  bg-[#101010]">
      <div className="flex items-center ">
        <Image src={Logo} alt="Logo" width="70" height="70" />
        <Link href="/" >
          <h1 className="text-white text-xl font-sans bg-transparent">MINGLEPAY</h1>
        </Link>
      </div>
      <Link href="/profile" className="">
        <UsersIcon className="h-6 w-6 text-white" />
      </Link>
    </div>
  )
}

export default Header