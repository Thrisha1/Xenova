import React from 'react'
import Link from 'next/link'
import Ad_card from '../Ad_card'
import Ad2 from '../../public/images/ad2.svg'
import Ad3 from '../../public/images/ad3.svg';

const More_Ads = () => {
    return (
        <div className='px-3 my-5 bg-white py-8 flex-col justify-center items-center'>
            <div class="rounded-lg mb-4 text-center">
                <h1 class="text-xl font-bold text-black">MORE ADS</h1>
            </div>
            <div className='flex flex-col gap-5 px-5'>
                <Ad_card imageSrc={Ad2} desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, quibusdam" Amt="44" link="https://www.google.co.in/" />
                <Ad_card imageSrc={Ad3} desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, quibusdam" Amt="44" link="https://www.google.co.in/" />
            </div>
        </div>
    )
}

export default More_Ads
