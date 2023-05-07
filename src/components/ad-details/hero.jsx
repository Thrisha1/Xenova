import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MoreAds from '../../public/images/moreAds.svg'
import Ad_card from '../Ad_card'

const Hero = ({ads}) => {

    return (
        <>
            <section id="top_side" className="min-h-[400px] w-full flex items-center justify-center">
                <div className="flex-col gap-4 justify-center bg-[#101010]  from-[#86fde8] mt-0 to-[#acb6e5] overflow-hidden flex rounded-b-2xl shadow-lg p-5 align-middle items-stretch h-auto md:flex-row">
                    <div className="md:w-1/2 flex-col">
                        <h1 className="text-white text-2xl font-medium">MinglePay Eid Offer</h1>
                        <h2 className="text-white text-lg mt-1">
                            Earn upto ₹ <span className="font-bold text-3xl">44</span>
                        </h2>
                    </div>
                    {
                        ads.map(ad => (
                            <Ad_card adId={ad.id} imageSrc={ad.image} desc={ad.description} Amt={ad.amt} alt="this is adverstisement" link={ad.link} />
                        ))
                    }

                    <div className="md:w-1/2 px-8 md:px-16 flex flex-col justify-center">
                        <div className="group py-2 px-3 lg:w-3/4 md:w-full rounded-xl mt-2 flex justify-center items-center text-sm hover:scale-105 duration-700 text-[#002D74]">
                            <Image src={MoreAds} alt="New Ad" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
