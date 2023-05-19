import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Hero = () => {

    return (
        <div>
            <section className="flex w-full justify-center items-center">
                <div className="flex-col w-full gap-10 justify-center bg-[#101010] from-[#86fde8] mt-0 to-[#acb6e5] overflow-hidden flex rounded-b-2xl shadow-lg p-5 align-middle items-stretch h-auto md:flex-row">
                    <div className="md:w-1/2 flex-col">
                        <h1 className="text-white text-3xl font-bold">Hola John!</h1>
                        {/* <h2 className="text-white text-sm mt-3">
                            Share Ads on Whatsapp and boost your Income!
                        </h2> */}
                    </div>
                    <div className="flex py-3 flex-col items-center bg-gradient-to-r from-[#9DDE70] from-0% via-[#D6F19A] via-36.77% to-[#D3E854] to-100% w-full rounded-xl min-h-[200px] ">
                        {/* <div className='bg-black rounded-lg w-11/12 text-white text-xs font-bold text-center px-2 py-1'>
                            Login daily to get more
                        </div> */}
                        <div className='flex justify-between w-full px-3 my-2'>
                            <h1 className='text-xl font-bold'>Amount in Hand : </h1>
                            <span className='text-xl mr-1 font-bold'>₹ 32.9</span>
                        </div>
                        <form action="">
                            <div className=''>
                                <label for="first_name" class="block mb-2 text-lg font-medium text-gray-900 ">Enter the Amount to redeem</label>
                                <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter Amount" required />
                            </div>
                            <input type='submit' value={"REDEEM NOW"} className='bg-black text-[#DCE95B] px-3 text-md font-bold py-1 rounded-full mt-3'/>
                                
                        </form>
                        {/* a horizontal line with gray colour with visble width */}
                        <hr className='w-11/12 my-4 bg-gray-800 p-[.1rem] ' />
                        <div className='flex justify-between items-end w-full px-3 '>
                            <h1 className='text-lg'>Earnings Till Now</h1>
                            <h1 className='text-lg'>₹32.9</h1>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero
