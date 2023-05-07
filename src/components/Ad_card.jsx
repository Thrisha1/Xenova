"use client"

import React from 'react'
import WhatsApp from '../public/images/whatsapp.svg'
import Image from 'next/image'
import { useRouter } from 'next/navigation'; 
import Link from 'next/link';

const Ad_card = ({imageSrc,desc,Amt,link,adId}) => {
    const router = useRouter();

    return (
        <div className="flex py-3 flex-col items-center bg-gradient-to-r from-[#9DDE70] from-0% via-[#D6F19A] via-36.77% to-[#D3E854] to-100% w-full rounded-xl min-h-[200px] ">
            <div className='bg-black rounded-lg w-11/12 text-white text-xs font-bold text-center px-2 py-1'>
                Login daily to win Exciting Prizes
            </div>

            <div className="xxs:flex-row xxxs:flex xxxs:flex-col justify-center items-center">
                {/* right image */}
                <Link href={`/dashboard/${adId}`} className="flex w-3/5 justify-center items-center pl-2 mt-2 mr-2">
                    <Image className='rounded-lg' width={300} height={300} src={imageSrc} alt="ad" />
                </Link>

                {/* left side */}
                <div className="flex-col w-2/3 justify-center items-center mt-3">
                    <Link href={`/dashboard/${adId}`} className='mt-2'>
                        <h1 className='text-sm text-center'>{desc}</h1>
                    </Link>
                    <Link href={`/dashboard/${adId}`} className="text-black flex justify-center items-center font-bold text-center  text-lg tracking-wider">
                        Earn upto ₹ <span className=" text-2xl">{Amt}</span>
                    </Link>
                    {/* a horizontal line with gray colour with visble width */}
                    <hr className='w-11/12 text-center flex justify-center my-2 ml-2 bg-gray-800 p-[.05rem] ' />
                    <div className="flex w-full justify-center items-center">
                        <button onClick={() => router.push(link)} className='flex gap-2 items-center justify-center bg-black text-[#DCE95B] px-4 font-bold py-2 rounded-full text-sm'>
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