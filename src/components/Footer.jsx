import React from 'react'
import Image from 'next/image'
import Logo from '../public/logo.jpg'
import Link from 'next/link'
import {ChatIcon} from "@heroicons/react/outline";
import Insta from "../public/insta.png";
import Fb from "../public/Facebook.png";
import Youtube from "../public/Youtube.png";
import Twitter from "../public/twitter.png";

const Footer = () => {
  return (
    <div className="bg-[#101010] h-72 rounded-t-3xl flex flex-col items-center justify-between py-3">
      <div className="">
        <h1 className="text-white text-center text-2xl tracking-wider">Got any Doubts?</h1>
      </div>
      <div className="flex items-center justify-center">
        <button className="bg-[#E5F358] p-2 rounded-xl flex"><ChatIcon className="h-6 w-6 mx-2"/>Drop Us a Message</button>
      </div>
    <div className="text-white text-center">
      <div className="text-white mb-2">Terms</div>
      <div className="text-white ">Privacy Policy</div>
    </div>
    <div className="flex w-full justify-center gap-8 px-10">
      <Image className='w-5 rounded-md' src={Insta} alt="insta" />
      <Image className='w-5 rounded-md' src={Fb} alt="fb"/>
      <Image className='w-5 rounded-md' src={Youtube} alt="youtube"/>
      <Image className='w-5 rounded-md' src={Twitter} alt="twitter"/>
    </div>
    {/* <div className="">
      <h1 className="text-gray-500 text-xs py-1">© Copyright 2023 MinglePay - All Rights Reserved</h1>
    </div> */}
          
        
    </div>
  )
}

export default Footer