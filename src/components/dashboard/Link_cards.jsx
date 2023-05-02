import Image from 'next/image'
import React from 'react'
import Cup from '../../public/images/cup.svg'
import Time_box from '../../public/images/time_box.svg'
import Trophy_award from '../../public/images/trophy-award.svg'
import Add_people from '../../public/images/account-multiple-plus.svg'

const Link_cards = () => {
    return (
        <div className='flex-col justify-center items-center mx-8 mt-8'>
            <div className='flex bg-black py-5 rounded-xl px-5 items-center'>
                <Image src={Cup} alt="cup" />
                <h1 className="text-white text-xl ml-4">
                    Vishu Bumber Results Out Now
                </h1>
            </div>
            <div className='flex bg-white py-5 rounded-xl px-5 items-center mt-3'>
                <Image src={Time_box} alt="cup" />
                <div className='flex-col ml-4'>
                    <h1 className="text-black text-xl ">
                        Shared Ads
                    </h1>
                    <h1 className="text-gray-400 text-md ">
                        See the performance of Shared Ads
                    </h1>
                </div>
            </div>
            <div className='flex mt-3 bg-blue-800 py-5 rounded-xl px-5 items-center'>
                <Image src={Trophy_award} alt="cup" />
                <h1 className="text-white text-xl ml-4">
                    Participate in Minglepay Lucky Draw
                </h1>
            </div>
            <div className='flex bg-white py-5 rounded-xl px-5 items-center mt-3'>
                <Image src={Add_people} alt="cup" />
                <div className='flex-col ml-4'>
                    <h1 className="text-black text-xl ">
                        Your Referrals
                    </h1>
                    <h1 className="text-gray-400 text-md ">
                        Invite your friends to win prizes
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Link_cards