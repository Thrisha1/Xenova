import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import cardbg from '../../public/cardbg.png'
import {ClipboardIcon} from "@heroicons/react/outline";
import dummyimg from '../../public/dummyimg.png'


const Referral = () => {
    return (

        <div className="max-w-sm p-2 h-[12em] justify-between bg-gradient-to-r from-[#8AD863] via-[#D6F19A] to-[#D3E853] rounded-xl ">

            
            <div className="">
                <h1 className="w-full bg-black rounded-full h-5 text-center text-xs text-white">Login daily to win Exciting Prizes</h1>
            </div>
            <div className="flex justify-between w-full py-3">
                <Image src={dummyimg} className="w-20 h-15" />
                <p className="text-xs px-4" >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam praesentium dolores, temporibus qui labore ratione libero eligendi ipsa! Hic numquam omnis magnam.</p>
            </div>
            <div className="bg-black h-[1px] my-2 mx-3"></div>
            <div className="flex justify-between">
                <div className="flex">
                <Link href="/" className="text-sm" >vghjkljhgfghjmnbvg</Link>
                <ClipboardIcon className="h-5 w-5 text-black"/>
                </div>
                <button className="bg-gray-900 text-[#D3E853] text-sm rounded-xl py-1 px-4">Invite</button>
            </div>

            
                
        </div>

    )
}

export default Referral
