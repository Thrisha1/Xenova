import React from 'react'
import Image from 'next/image'
import PageLoader from '../../public/payment_img.png'
import heroimg from '../../public/images/heroimg.png'
import Link from 'next/link'
import NewAds from '../../public/images/new_ads.svg'

const Hero = () => {

    return (
        <div>
            <section className="min-h-[600px] flex justify-center items-center">
                <div className="flex-col gap-10 justify-center bg-[#101010] mx-2 from-[#86fde8] mt-0 to-[#acb6e5] overflow-hidden flex rounded-b-2xl shadow-lg p-5 align-middle items-stretch h-auto md:flex-row">
                    <div className="md:w-1/2 flex-col">
                        <h1 className="text-white text-4xl font-bold">Hola John!</h1>
                        <h2 className="text-white text-sm mt-3">
                            Share Ads on Whatsapp and boost your Income!
                        </h2>
                    </div>
                    <div className="flex py-3 flex-col items-center bg-gradient-to-r from-[#9DDE70] from-0% via-[#D6F19A] via-36.77% to-[#D3E854] to-100% w-full rounded-xl min-h-[200px] ">
                        <div className='bg-black rounded-lg w-11/12 text-white text-xs font-bold text-center px-2 py-1'>
                            Login daily to get more
                        </div>
                        <div className='flex justify-between w-full px-3 my-4'>
                            <h1 className='text-4xl font-bold tracking-widest '><span className='text-2xl mr-1'>₹</span>32.9</h1>
                            <button className='bg-black text-[#DCE95B] px-4 font-bold py-2 rounded-full'>
                                REDEEM NOW
                            </button>
                        </div>
                        <div>
                            <span className='text-black'>Redeemable at ₹ 25</span>
                        </div>
                        {/* a horizontal line with gray colour with visble width */}
                        <hr className='w-11/12 my-4 bg-gray-800 p-[.1rem] ' />
                        <div className='flex justify-between items-end w-full px-3 '>
                            <h1 className='text-lg'>Earnings Till Now</h1>
                            <h1 className='text-lg'>₹32.9</h1>
                        </div>
                    </div>

                    <div className="md:w-1/2 px-8 md:px-16 flex flex-col justify-center">
                        <p className="text-white text-sm mb-4 text-center md:text-left">
                            Say goodbye to complicated monetization methods. MinglePay
                            simplifies the process of earning ads on WhatsApp, making it easy for you to earn money simply by sharing with your contacts
                        </p>
                        <Link href="/dashboard" className="group py-2 px-3 lg:w-3/4 md:w-full rounded-xl mt-2 flex justify-center items-center text-sm hover:scale-105 duration-700 text-[#002D74]">
                            <Image src={NewAds} alt="New Ad" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero
