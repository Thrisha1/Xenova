"use client"

import React,{useEffect,useState} from 'react'
import Hero from './hero'
import More_Ads from './More_ads'

import { useAppSelector, useAppDispatch } from '../../redux/hooks.jsx';

const Ad_detail = ({adId}) => {
    
    const adShow = useAppSelector(state => state.ad.ads)  
    const [ad1, setad1] = useState([])
    const [ad2, setad2] = useState([])  

    useEffect(() => {
        console.log(adId);
        setad1(adShow.filter(ad => ad.id == adId))
        setad2(adShow.filter(ad => ad.id != adId))
    },[])


    return (
        <section class=" flex-col w-full">
            <Hero ads={ad1} />
            <More_Ads ads={ad2} />
        </section>
    )
}

export default Ad_detail
