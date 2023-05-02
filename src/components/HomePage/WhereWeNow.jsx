import React from 'react'
import Image from "next/image";
import wherewebg from "@/public/images/where-we-bg.png";
import Link from "next/link";


const WhereWeNow = () => {
  return (<div>
      <section className="flex justify-center">
        <div
          className="flex-col bg-[#101010] pt-5 text-center justify-center  mx-2 overflow-hidden flex rounded-3xl p-5 align-middle h-auto"

        >
          <div className="md:w-3/4 px-8 pt-5  md:px-16">
            <h1 className="text-2xl text-white font-semibold mb-4">
              Where we are now?
            </h1>
            <div className="flex justify-center py-2 md:px-24 mx-2 space-y-8 md:space-y-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#222222] px-10 rounded-3xl p-5 flex gap-2 flex-col items-start">
                  <h3 className="text-center text-[#82C969] font-bold text-4xl ">60 Lac+</h3>
                  <h2 className="text-white text-2xl font-medium ">Reach</h2>
                </div>
                <div className="bg-[#222222] px-10 rounded-3xl p-5 flex gap-2 flex-col items-start">
                  <h3 className="text-center text-[#82C969] font-bold text-4xl ">9.5L Inr+</h3>
                  <h2 className="text-white text-2xl font-medium ">Earned</h2>
                </div>
                <div className="bg-[#222222] px-10 rounded-3xl p-5 flex gap-2 flex-col items-start">
                  <h3 className="text-center text-[#82C969] font-bold text-4xl ">3.5L +</h3>
                  <h2 className="text-white text-2xl font-medium ">Status Placed</h2>
                </div>

              </div>
            </div>

          </div>


        </div>
      </section>
    </div>

  )
}

export default WhereWeNow