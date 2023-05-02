'use client';
import React from 'react'
import Link from 'next/link'
import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import bg from '../../public/bg black.png'
import UserCard from '../../components/profile/UserCard.jsx'
import Earnings from '../../components/statement/Earnings.jsx'
import Referral from '../../components/statement/Referral.jsx'

const page = () => {
  // const [startDate, setStartDate] = useState(new Date());

  return (
    <div className=" w-100 " style={{backgroundImage:`url(${bg})`,
    backgroundRepeat: 'no-repeat',
                                      }} >
    <div className="bg-[#101010] rounded-b-xl px-3  py-2">
      <div className="flex flex-col h-[38rem] justify-between">
        <div className="">
          <p className="text-xl tracking-wider text-white">Statements</p>
          <p className="text-white text-xs font-light" >Breakdown your total earnings through Minglepay</p>
        </div>
        <Earnings/>
        <Referral/>
        
      </div>
      </div>
    </div>
  )
}

export default page