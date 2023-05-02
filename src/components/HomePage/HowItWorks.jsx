import React from 'react'
import configureimg from "@/public/images/congifigureimg.svg"
import checkavail from "@/public/images/check-avail.svg"
import startearning from "@/public/images/start-earning.svg"
import Image from "next/image";

const HowItWorks = () => {
  return (
    <div>
      <section className=" mx-4 mb-3 gap-3 grid grid-cols-1 mt-5 justify-center">
        <div className="grid grid-cols-5 col-span-1 pt-4 bg-white border-r-gray-50 text-center justify-center overflow-hidden rounded-2xl p-5 align-middle h-auto">
          <div className="col-span-1">
            <Image src={configureimg} alt="feature1"/>
          </div>
          <div className="grid col-span-4  items-start justify-start text-left grid-cols-1">
            <h2 className="text-[1rem] font-semibold">Configure Your Profile</h2>
            <p className="font-mediuml text-[0.8rem] ">To start using MInglePay, you need to create an account. You can do this by signing up</p>
          </div>
        </div>
           <div className="grid grid-cols-5 col-span-1 pt-4 bg-white border-r-gray-50 text-center justify-center overflow-hidden rounded-2xl p-5 align-middle h-auto">
          <div className="col-span-1">
            <Image src={checkavail} alt="feature1"/>
          </div>
          <div className="grid col-span-4  items-start justify-start text-left grid-cols-1">
            <h2 className="text-[1rem] font-semibold">Configure Your Profile</h2>
            <p className="font-mediuml text-[0.8rem] ">To start using MInglePay, you need to create an account. You can do this by signing up</p>
          </div>
        </div>
        <div className="grid grid-cols-5 col-span-1 pt-4 bg-white border-r-gray-50 text-center justify-center overflow-hidden rounded-2xl p-5 align-middle h-auto">
          <div className="col-span-1">
            <Image src={startearning} alt="feature1"/>
          </div>
          <div className="grid col-span-4  items-start justify-start text-left grid-cols-1">
            <h2 className="text-[1rem] font-semibold">Configure Your Profile</h2>
            <p className="font-mediuml text-[0.8rem] ">To start using MInglePay, you need to create an account. You can do this by signing up</p>
          </div>
        </div>

      </section>
    </div>
  )
}

export default HowItWorks