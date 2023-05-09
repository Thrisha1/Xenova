"use client"

import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MoreAds from '../../public/images/moreAds.svg'
import Ad_card_run from '../Ad_card_run.jsx'

const Shared_ad = ({ ads }) => {

    useEffect(() => {
        console.log(ads);
    })

    return (
        <>
            <section id="top_side" className="min-h-[400px] w-full flex items-center justify-center">
                <div className="flex-col gap-4 justify-center bg-[#101010]  from-[#86fde8] mt-0 to-[#acb6e5] overflow-hidden flex rounded-b-2xl shadow-lg p-5 align-middle items-stretch h-auto md:flex-row">
                    <div className="md:w-1/2 flex-col">
                        <h1 className="text-white text-2xl font-medium">Shared Ads</h1>
                    </div>

                    {
                        ads.length > 0 ? (
                            ads.map(ad => (
                                <Ad_card_run adId={ad.adId} imageSrc={ad.imageSrc} desc={ad.desc} Amt={ad.Amt} alt="this is adverstisement" link={ad.link} shared={ad.shared} screenShot_uploaded={ad.screenShot_uploaded} accept_ad={ad.accept_ad} />
                            ))
                        ) : (
                            <div className="md:w-1/2 flex-col">
                                <h1 className="text-white text-2xl font-medium">No Ads Currently available.
                                    Kindly check back in some time.
                                </h1>
                            </div>
                        )
                    }

                </div>
            </section>
        </>
    )
}

export default Shared_ad
