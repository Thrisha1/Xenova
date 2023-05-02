'use client';
import React from 'react'
import {useState} from 'react';
import {PencilIcon} from "@heroicons/react/outline";

const Details = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className="bg-[#E8E8E8] h-[25rem]  rounded-xl my-2 p-2">
            <div className="">
                <div className="flex justify-between pr-2 items-center">
                    <p className="flex tracking-wider text-sm my-1  text-gray-500">
                        <p className="text-red-600 pr-2">*</p>DATE OF BIRTH
                    </p>
                    <PencilIcon className="h-5 w-5 text-black"/>
                </div>
                <p className="mx-2">12/03/2023</p>
                <div className="bg-black h-[1px] my-2 mx-3"></div>
            </div>
            <div className="my-4">
                <div className="flex justify-between pr-2 items-center">
                    <p className="flex tracking-wider text-sm my-1  text-gray-500">
                        <p className="text-red-600 pr-2">*</p>CONTACTS
                    </p>
                    <PencilIcon className="h-5 w-5 text-black"/>
                </div>
                <p className="mx-2">562</p>
                <div className="bg-black h-[0.5px] my-2 mx-3"></div>
            </div>
            <div className="my-4">
                <div className="flex justify-between pr-2 items-center">
                    <p className="flex tracking-wider text-sm my-1  text-gray-500">
                        <p className="text-red-600 pr-2">*</p>MOBILE NUMBER
                    </p>
                    <PencilIcon className="h-5 w-5 text-black"/>
                </div>
                <p className="mx-2">+91 1234567890</p>
                <div className="bg-black h-[1px] my-2 mx-3"></div>
            </div>
            <div className="my-4">
                <div className="flex justify-between pr-2 items-center">
                    <p className="flex tracking-wider text-sm my-1  text-gray-500">
                        <p className="text-red-600 pr-2">*</p>PINCODE
                    </p>
                    <PencilIcon className="h-5 w-5 text-black"/>
                </div>
                <p className="mx-2">678102</p>
                <div className="bg-black h-[0.5px] my-2 mx-3"></div>
            </div>
            
           
           
            <div className="mx-2">
                <p className="flex tracking-wider text-sm   text-gray-500">GENDER</p>
                <div className="flex ">
                    <button className=" mt-2 mr-2 border-2 hover:text-white px-4 hover:bg-black rounded-xl">Male</button>
                    <button className="mt-2 px-4 border-2 hover:text-white hover:bg-black rounded-xl">Female</button>
                    <button className=" mt-2 mx-2 border-2 hover:text-white px-4 hover:bg-black rounded-xl">Other</button>
                </div>
            </div>
        </div>
    )
}

export default Details
