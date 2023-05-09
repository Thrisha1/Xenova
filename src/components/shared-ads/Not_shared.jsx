"use client"

import React from 'react'
import Link from 'next/link'
import Ad_card from '../Ad_card'
import Ad2 from '../../public/images/ad2.svg'
import Ad3 from '../../public/images/ad3.svg';

const Not_shared = ({ ads }) => {

    const [ad_count, setad_count] = React.useState(0)

    return (
        <div className='my-5 bg-white py-8 flex-col justify-center items-center'>
            <div class="rounded-lg mb-4 text-center">
                <h1 class="text-xl font-bold text-black">MORE ADS</h1>
            </div>
            <div className='flex flex-col gap-5 px-5'>
                {

                    ads.length > 0 ? (

                        ads.map(ad => (
                            <Ad_card adId={ad.adId} imageSrc={ad.imageSrc} desc={ad.desc} Amt={ad.Amt} alt="this is adverstisement" link={ad.link} />
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
        </div>
    )
}

export default Not_shared
