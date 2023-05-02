"use client"

import React from 'react'
import WhatsApp from '../public/images/whatsapp.svg'
import Image from 'next/image'
import { useRouter } from 'next/navigation'; 

const Ad_card = ({imageSrc,desc,Amt,link}) => {
    const router = useRouter();

    return (
        <div className="flex py-3 flex-col items-center bg-gradient-to-r from-[#9DDE70] from-0% via-[#D6F19A] via-36.77% to-[#D3E854] to-100% w-full rounded-xl min-h-[200px] ">
            <div className='bg-black rounded-lg w-11/12 text-white text-xs font-bold text-center px-2 py-1'>
                Login daily to win Exciting Prizes
            </div>

            <div className="flex">
                {/* right image */}
                <div className="flex justify-center items-center pl-2">
                    <Image className='w-[19rem]' src={imageSrc} alt="ad" />
                </div>

                {/* left side */}
                <div className="flex-col justify-center items-center">
                    <div className='mt-4'>
                        <h1 className='text-sm text-center'>{desc}</h1>
                    </div>
                    <h2 className="text-black text-center font-semibold text-lg tracking-wider">
                        Earn upto ₹ <span className="font-bold text-3xl">{Amt}</span>
                    </h2>
                    {/* a horizontal line with gray colour with visble width */}
                    <hr className='w-11/12 text-center flex justify-center my-2 ml-2 bg-gray-800 p-[.05rem] ' />
                    <div className="flex w-full justify-center items-center">
                        <button onClick={() => router.push(link)} className='flex gap-2 items-center justify-center bg-black text-[#DCE95B] px-3 font-bold py-1 rounded-full'>
                            <Image className='w-5 h-5' src={WhatsApp} alt='WhatsApp' />
                            SHARE LINK
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ad_card