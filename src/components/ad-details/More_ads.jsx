import React from 'react'
import Link from 'next/link'
import Ad_card from '../Ad_card'

const More_Ads = ({ads}) => {
    return (
        <div className='my-5 bg-white py-8 flex-col justify-center items-center'>
            <div class="rounded-lg mb-4 text-center">
                <h1 class="text-xl font-bold text-black">MORE ADS</h1>
            </div>
            <div className='flex flex-col gap-5 px-5'>
                {
                    ads.map(ad => (
                        <Ad_card  adId={ad.adId} imageSrc={ad.imageSrc} desc={ad.desc} Amt={ad.Amt} alt="this is adverstisement" link={ad.link} />
                    ))
                }
            </div>
        </div>
    )
}

export default More_Ads
