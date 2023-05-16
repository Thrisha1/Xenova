"use client"

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { sharedAds, fetchContacts } from '../redux/features/userSlice';
import { useAppDispatch } from '../redux/hooks.jsx';

const Ad_card_run = ({ imageSrc, desc, Amt, link, adId, shared, screenShot_uploaded, accept_ad }) => {
    const router = useRouter();
    const dispatch = useAppDispatch();

    useEffect(() => {
        console.log(imageSrc)
    })

    return (
        <div className="flex py-3 flex-col items-center bg-gradient-to-r from-[#9DDE70] from-0% via-[#D6F19A] via-36.77% to-[#D3E854] to-100% w-full rounded-xl min-h-[200px] ">
            {/* <div className='bg-black rounded-lg w-11/12 text-white text-xs font-bold text-center px-2 py-1'>
                Login daily to win Exciting Prizes
            </div> */}

            <div className="xxs:flex-row xxxs:flex xxxs:flex-col justify-center items-center">
                {/* right image */}
                <div className="flex w-3/5 justify-center items-center pl-2 mt-2 mr-2">
                    <img className='rounded-lg' width={300} height={300} src={imageSrc} alt="ad" />
                </div>

                {/* left side */}
                <div className="flex-col xxxs:w-5/6 xxs:w-2/3 justify-center items-center mt-3">
                    <div className='mt-2'>
                        <h1 className='text-sm text-center'>{desc}</h1>
                    </div>
                    <div className="text-black w-full flex justify-center items-center font-bold text-center  text-lg tracking-wider">
                        Earn upto ₹ <span className=" text-2xl">{Amt}</span>
                    </div>
                    {/* a horizontal line with gray colour with visble width */}
                    <hr className='w-11/12 text-center flex justify-center my-2 ml-2 bg-gray-800 p-[.05rem] ' />
                    <div className="flex flex-col gap-4 w-full justify-center items-center">
                        {/* <button className='flex gap-2 items-center justify-center bg-black text-[#DCE95B] px-4 font-bold py-2 rounded-full text-sm'>
                            <input type="file" className=''  />
                        </button> */}
                        <button className='flex gap-2 items-center justify-center bg-black text-[#DCE95B] px-4 font-bold py-2 rounded-full text-sm'>
                            Ad accepted :
                            {
                                accept_ad ? (
                                    shared === false ? (
                                        <span className='text-sm text-yellow-500 font-bold'>Ongoing</span>
                                    ):
                                    (<span className='text-sm text-green-400 font-bold'>Accepted</span>)
                                ) : (
                                    shared === false ? (
                                        <span className='text-sm text-yellow-500 font-bold'>Ongoing</span>
                                    ) : (
                                        <span className='text-sm text-red-500 font-bold'>Rejected</span>
                                    )
                                )
                            }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ad_card_run