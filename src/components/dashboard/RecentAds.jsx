"use client"

import React from 'react'
import AdsCard from './AdsCard'
import Link from 'next/link'
import { useQuery, useMutation } from "@apollo/client";
import { GET_ADS, GET_SHARED } from "@/functions/graphql/queries/ads.query";
// import Ad3 from '../../public/images/ad3.svg'

import { useAppSelector, useAppDispatch } from '../../redux/hooks.jsx';


const RecentAds = () => {


    //Get all ads
    const {
        loading: ads_loading,
        error: ads_error,
        data: ads_data,
    } = useQuery(GET_ADS);

    if (ads_loading) {
        console.log("loading")
    }
    else if (ads_error) {
        console.log("error")
    }
    else {
        console.log("data",ads_data.ads)
    }

    const adShow = useAppSelector(state => state.ad.ads)

    return (
        <div id='newAds' className='px-3 my-5 bg-black py-8 flex-col justify-center items-center'>
            <div class="rounded-lg mb-4 flex justify-center">
                <h1 class="text-2xl font-bold text-white text-center">NEW ADS</h1>
            </div>
            <div className='flex gap-10 overflow-x-scroll'>

                {/* display a message that there are no ads currently available in a bold format */}
                {
                    ads_data &&
                    ads_data.ads.length > 0

                        ?

                        (ads_data.ads.map(ad =>
                            <AdsCard adId={ad.id} imageSrc={ad.s3_url.url} desc={ad.description} Amt={ad.price} />
                        ))

                        :

                        (<div className="md:w-1/2 flex-col">
                            <h1 className="text-white text-2xl font-medium">No ads currently available</h1>
                        </div>)
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
