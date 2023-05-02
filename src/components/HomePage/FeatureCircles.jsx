import React from 'react'
import Image from "next/image";
import signup from "../../public/images/singnup.svg"
import share from "../../public/images/share.svg"
import bank from "../../public/images/bank.svg"

const FeatureCircles = () => {
  return (
    <div>
      <div className="flex justify-center py-16 md:px-24 mx-4 space-y-8 md:space-y-0">
        <div className="grid grid-cols-3 md:grid-cols-3 gap-6">
          <div className="bg-[#82C969] rounded-3xl p-6 flex flex-col items-center">
            <Image src={signup} alt="feature1"/>
            <h3 className="text-center font-medium text-sm text-black mt-4">Free Signup</h3>
          </div>
          <div className="bg-[#82C969] rounded-3xl p-6 flex flex-col items-center">
            <Image src={share} alt="feature2"/>
            <h3 className="text-center font-medium text-sm text-black mt-4">One Click Share</h3>
          </div>
          <div className="bg-[#82C969] rounded-3xl p-6 flex flex-col items-center">
            <Image src={bank} alt="feature3"/>
            <h3 className="text-center font-medium text-sm text-black mt-4">Direct to Bank</h3>
          </div>
        </div>
      </div>

    </div>
  );
}

export default FeatureCircles;
