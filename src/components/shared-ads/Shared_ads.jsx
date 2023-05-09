"use client"

import React,{useEffect,useState} from 'react'
import Shared_ad from './Shared_ad'
import Not_shared from './Not_shared'

import { useAppSelector, useAppDispatch } from '../../redux/hooks.jsx';

const Shared_ads = ({adId}) => {
    
    const adShow = useAppSelector(state => state.user.user_details.shared_ads)  
    const [ad1, setad1] = useState([])
    const [ad2, setad2] = useState([])  

    useEffect(() => {
        console.log(adShow);
    })


    return (
        <section class=" flex-col w-full">
            <Shared_ad ads={adShow} />
            {/* <Not_shared ads={ad2} /> */}
        </section>
    )
}

export default Shared_ads
