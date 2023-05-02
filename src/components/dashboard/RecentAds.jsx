import Image from 'next/image';
import React from 'react'
import AdsCard from './AdsCard'
import ads from '../../public/ads.jpeg'
import Link from 'next/link'
import Ad1 from '../../public/images/eid_ads.svg'
import Ad2 from '../../public/ad1.png'
// import Ad3 from '../../public/images/ad3.svg'


const RecentAds = () => {

    const ads = [
        {
            id: 1,
            image: "https://img.freepik.com/free-vector/realistic-eid-mubarak-greeting-card_1017-31239.jpg?w=2000",
            title: 'Eid',
            description: 'Eid is a digital advertising platform that helps you find the right ad for your business.',
            amt: "1000"
        },
        {
            id: 2,
            image: "https://img.freepik.com/free-vector/realistic-eid-mubarak-greeting-card_1017-31239.jpg?w=2000",
            title: 'Sale',
            description: 'Eid is a digital advertising platform that helps you find the right ad for your business.',
            amt: "1000"
        },
        {
            id: 3,
            image: "https://img.freepik.com/free-vector/realistic-eid-mubarak-greeting-card_1017-31239.jpg?w=2000",
            title: 'Dress',
            description: 'Eid is a digital advertising platform that helps you find the right ad for your business.',
            amt: "1000"
        }
    ]

    return (
        <div className='px-3 my-5 bg-black py-8 flex-col justify-center items-center'>
            <div class="rounded-lg mb-4 flex justify-center">
                <h1 class="text-2xl font-bold text-white text-center">NEW ADS</h1>
            </div>
            <div className='flex gap-10 overflow-x-scroll'>

                {
                    ads.map(ad =>
                        <AdsCard id={ad.id} image={ad.image} title={ad.description} amt={ad.amt} />
                    )
                }
                
            </div>
            <Link href="/all-ads" class="block w-full mt-6 text-center text-lg font-bold text-yellow-200">View All Ads</Link>
            <h1 className="text-gray-400 text-md mt-4 text-center flex justify-center">
                Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
            </h1>
        </div>
    )
}

export default RecentAds
