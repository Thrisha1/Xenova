import React from 'react'
import { SparklesIcon } from "@heroicons/react/outline";

const Earnings = () => {
  return (
    <div className=" justify-between flex flex-col p-5 bg-[#E8E8E8] rounded-xl">
      <h1 className="tracking-wider font-bold">Your Total Earnings</h1>
      <div className="flex w-full justify-between items-center my-2">
        <h1>₹ <span className="text-3xl font-bold">105</span></h1>
        <SparklesIcon className="h-6 w-6 text-black" />
      </div>
      <div className="flex justify-between items-center">
        <h1 className="tracking-wider text-md ">BREAKDOWN</h1>
        <div className="bg-gray-400 h-[1px] w-[15rem] mx-1"></div>
      </div>
      <div className="flex flex-col gap-4 my-3">
        <div className="flex w-full justify-between">
          <h1 className="text-sm tracking-wider">Shared Ads</h1>
          <h1 className="text-sm">₹105</h1>
        </div>
        <div className="flex w-full justify-between">
          <h1 className="text-sm tracking-wider">Referrals</h1>
          <h1 className="text-sm">₹105</h1>
        </div>
        <div className="flex w-full justify-between">
          <h1 className="text-sm tracking-wider">Redeemed</h1>
          <h1 className="text-sm">₹105</h1>
        </div>
        <div className="flex w-full justify-between">
          <h1 className="text-sm tracking-wider">Pending</h1>
          <h1 className="text-sm">₹105</h1>
        </div>
        <div className="flex w-full justify-between">
          <h1 className="text-sm tracking-wider">Total</h1>
          <h1 className="text-sm">₹105</h1>
        </div>
      </div>
    </div>
  )
}

export default Earnings