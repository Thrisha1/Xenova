import React from 'react'

const ReferralCard = ({name, referralDate, isSignUp, isFirstAdPlaced, isFirstPayoutPlaced}) => {
  return (
    <div>
      <div className=" rounded-3xl bg-white my-2 m-2 p-6 w-full ">
        <div className="flex justify-between my-2 ">
          <div className="flex flex-col gap-y-2">
            <div className="text-[#101010] text-[1.1rem] text-left font-bold">
              {name}
            </div>
            <div className="text-black text-[0.7rem] font-normal text-left ">
              Referred on {referralDate}
            </div>
          </div>
          <div className="bg-[#101010] text-white rounded-2xl text-[0.9rem] my-auto p-1 px-6">
            MESSAGE
          </div>


        </div>
        <div className="content-center text-center justify-center  flex">
          <div>
            <div className="flex text-center gap-4 ">
              <div className="bg-green-500 text-center w-[5px] h-[67px]"></div>
              <div className="flex flex-col">
                <li className="flex gap-2 text-[#101010] list-none text-[0.9rem] text-left font-medium">
                  {isSignUp ? (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd"/>
                      </svg>) :
                    <svg fill="none" className="w-5 h-5" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>}

                  {isSignUp ? "Sign Up" : "Sign Up Pending"}
                </li>
                <li className="flex gap-2 text-[#101010] list-none text-[0.9rem] text-left font-medium">
                  {isFirstAdPlaced ? (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd"/>
                      </svg>) :
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>}
                  {isFirstAdPlaced ? "First Ad Placed" : "First Ad Pending"}
                </li>
                <li className="flex gap-2 text-[#101010] list-none text-[0.9rem] text-left font-medium">
                 {isFirstPayoutPlaced ? (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd"/>
                      </svg>) :
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>}
                  {isFirstPayoutPlaced ? "First Payout Collected" : "First Payout Pending"}
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