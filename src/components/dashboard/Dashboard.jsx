import React from 'react'
import Image from 'next/image'
import Banner from '../../public/banner3.gif'
import BalanceCard from './BalanceCard'
import RecentAds from './RecentAds'
import Hero from './hero'
import Link_cards from './Link_cards'

const Dashboard = () => {
    return (
        <section class="bg-gray-200 flex-col items-center justify-center w-full">
            <Hero/>
            <Link_cards/>
            <RecentAds/>
        </section>
    )
}

export default Dashboard
