import React from 'react'

const ReferralCard = () => {
  return (
    <div>
      <div className="rounded-3xl bg-white my-2 p-6 w-full ">
        <div className="flex justify-between my-2 ">
          <div className="flex flex-col gap-y-2">
            <div className="text-[#101010] text-[1.1rem] text-left font-bold">
              Steve King
            </div>
            <div className="text-black text-[0.7rem] font-normal text-left ">
              Referred on April 20, 2023
            </div>
          </div>
          <div className="">
            <h1 className="bg-[#101010] text-white rounded-2xl text-[0.9rem] my-auto p-1 px-6">MESSAGE</h1>
          </div>
        </div>
        <div className="content-center text-center justify-center  flex">
          <div>
            <div className="flex text-center gap-4 ">
              <div className="bg-green-500 text-center w-[5px] h-[67px]"></div>
              <div className="flex flex-col">
                <li  className="flex gap-2 text-[#101010] list-none text-[0.9rem] text-left font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd"/>
                  </svg>
                  Sign Up
                </li>
                <li  className="flex gap-2 text-[#101010] list-none text-[0.9rem] text-left font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd"/>
                  </svg>
                  First Ad placed
                </li>
                  <li  className="flex gap-2 text-[#101010] list-none text-[0.9rem] text-left font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd"/>
                  </svg>
                  First Payout Collected
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReferralCard