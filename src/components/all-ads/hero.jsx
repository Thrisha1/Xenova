"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Ad_card from '../Ad_card'

import { useAppSelector, useAppDispatch } from '../../redux/hooks.jsx';

const Hero = () => {

    const adShow = useAppSelector(state => state.ad.ads)

    return (
        <div>
            <section className="min-h-[200px] flex">
                <div className="flex-col gap-4 justify-center bg-[#101010] from-[#86fde8] mt-0 to-[#acb6e5] overflow-hidden flex rounded-b-2xl shadow-lg p-5 align-middle items-stretch h-auto md:flex-row">
                    <div className="md:w-1/2 flex-col">
                        <h1 className="text-white text-2xl font-medium">All available Ads</h1>
                    </div>

                    {
                        adShow.length > 0 ? (
                            adShow.map((ad) => (
                                <Ad_card adId={ad.adId} imageSrc={ad.imageSrc} desc={ad.desc} Amt={ad.Amt} link={ad.link} />
                            ))
                        ) : (


                            <div className="md:w-1/2 flex-col">
                                <h1 className="text-white text-2xl font-medium">No Ads Currently available.
                                    Kindly check back in some time.</h1>
                            </div>

                        )
                    }

                </div>
            </section>
        </div>
    )
}

export default Hero
