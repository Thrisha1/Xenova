import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MoreAds from '../../public/images/moreAds.svg'
import Ad1 from '../../public/images/eid_ads.svg'
import Ad2 from '../../public/images/ad2.svg'
import Ad3 from '../../public/images/ad3.svg'
import Ad_card from '../Ad_card'

const Hero = () => {

    const ads = [
        {
            id: 1,
            image: Ad1,
            title: 'Eid',
            description: 'Eid is a digital advertising platform that helps you find the right ad for your business.',
            amt: "1000"
        },
        {
            id: 2,
            image: Ad2,
            title: 'Sale',
            description: 'Eid is a digital advertising platform that helps you find the right ad for your business.',
            amt: "1000"
        },
        {
            id: 3,
            image: Ad3,
            title: 'Dress',
            description: 'Eid is a digital advertising platform that helps you find the right ad for your business.',
            amt: "1000"
        }
    ]

    return (
        <div>
            <section className="min-h-[200px] flex">
                <div className="flex-col gap-4 justify-center bg-[#101010] mx-2 from-[#86fde8] mt-0 to-[#acb6e5] overflow-hidden flex rounded-b-2xl shadow-lg p-5 align-middle items-stretch h-auto md:flex-row">
                    <div className="md:w-1/2 flex-col">
                        <h1 className="text-white text-2xl font-medium">All available Ads</h1>
                        {/* <h2 className="text-white text-lg mt-1">
                            Earn upto ₹ <span className="font-bold text-3xl">44</span>
                        </h2> */}
                    </div>

                    <Ad_card imageSrc={Ad1} desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, quibusdam" Amt="44" link="https://www.google.co.in/" />
                </div>
            </section>
        </div>
    )
}

export default Hero
