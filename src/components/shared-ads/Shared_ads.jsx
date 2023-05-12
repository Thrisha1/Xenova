"use client"

import React,{useEffect,useState} from 'react'
import Shared_ad from './Shared_ad'
import Not_shared from './Not_shared'

import { useAppSelector, useAppDispatch } from '../../redux/hooks.jsx';

const Shared_ads = ({adId}) => {
    
    const ads = useAppSelector(state => state.ad.ads)
    const adShow = useAppSelector(state => state.user.user_details.shared_ads)
    const [ad2, setad2] = useState([])  

    useEffect(() => {
        console.log(adShow);
        console.log(ads);
        // ads contains all the ads and i need to filter the ads which are not in the adShow list
        const result = ads.filter(ad => !adShow.some(shownAd => shownAd.adId === ad.adId));
        console.log(result);
        setad2(result)
    }, [ads,adShow])


    return (
        <section class=" flex-col w-full">
            <Shared_ad ads={adShow} />
            <Not_shared ads={ad2} />
        </section>
    )
}

export default Shared_ads