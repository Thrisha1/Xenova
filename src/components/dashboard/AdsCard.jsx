import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AdsCard = ({adId, imageSrc, desc, Amt }) => {
    return (
        <div class="min-w-[16rem] bg-gradient-to-bl from-yellow-200 from-0% via-[#D3E854] via-60% to-black to-100%border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex-col justify-center items-center">
            <Link href={`/dashboard/${adId}`}>
                <img class="rounded-t-lg w-full p-3" width={200} height={200} src={imageSrc} alt="" />
            </Link>
            <div class="p-5 flex-col justify-center items-center w-full text-center">
                <button class="self-end font-bold px-3 py-2 flex justify-center items-center text-sm leading-5 text-black transition-colors bg-yellow-200 border  rounded-lg w-full duration-500">
                    EARN UPTO ₹ {Amt}
                </button>
            </div>
        </div>
    )
}

export default AdsCard
