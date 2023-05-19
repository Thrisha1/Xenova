import React from 'react'
import Image from "next/image";
import dummyimg from "@/public/dummyimg.png";
import Link from "next/link";
import { ClipboardIcon } from "@heroicons/react/outline";
import Referral from './Referral';


const ReferralHero = () => {
  return (<div>
    <section className=" flex justify-center p-0">
      <div className="flex-col bg-[#101010]  from-[#86fde8] mt-0 to-[#acb6e5] overflow-hidden flex rounded-b-2xl shadow-lg align-middle items-stretch h-auto md:flex-row">
        <div className="md:w-1/2 pt-5 gap-3 px-8 md:px-16 flex flex-col ">
          <h1 className="text-2xl tracking-widest text-white font-bold text-left md:text-left">
            Total Referral Earnings
          </h1>
          <div className="flex flex-row tracking-widest justify-left">
            <h1 className="text-white text-[1.5rem] tracking-widest font-bold text-center md:text-left">{" "} ₹ 44&nbsp;</h1>
          </div>

          {/* referral */}
          <Referral />


        </div>
      </div>
    </section>

  </div>)
}

export default ReferralHero