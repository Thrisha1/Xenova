"use client"
import React, { useState } from 'react'
import Logo from '../public/logodummy.png'
import Link from 'next/link'
import '../app/globals.css'
import { UsersIcon } from "@heroicons/react/outline";
import { Button, Drawer, Radio, Space } from "antd";
import { useRouter } from 'next/navigation'

const Header = ({logo}) => {

  const router = useRouter()

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const linkMover = (data) => {
    router.push(`/${data}`)
    onClose()
  }


  return (
    <div className="flex items-center  justify-between px-3  bg-[#101010]">
      <div className="flex items-center ">
        <img src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogodummy.513ee9dc.png&w=96&q=75" alt="Logo" width="70" height="70" />
        <Link href="/" >
          <h1 className="text-white text-xl font-sans bg-transparent">XENOVA</h1>
        </Link>
      </div>
      <div className="flex gap-4">
        <svg onClick={showDrawer} className='text-white h-6 w-6' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"></path>
        </svg>
        <Link href="/profile" className="">
          <UsersIcon className="h-6 w-6 text-white" />
        </Link>
      </div>

      {
        open && (
          <Drawer
            className="flex justify-between text-white px-14 md:px-5"
            placement="right"
            onClose={onClose}
            open={open}
            style={{
              width: 400,
              background: "#112",
              margin: 0,
              color: "#fff",
              "@media (max-width: 768px)": {
                width: 300,
              },
            }}

          >
            <svg
              onClick={onClose}
              className="text-white w-6 h-6 mb-6"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
            <h1 className="pt-5 text-white text-2xl font-bold font-body">
              Fast Links :
            </h1>
            <h1 onClick={()=>linkMover("dashboard")} className="mt-14 text-xl">Dashboard</h1>
            <h1 onClick={()=>linkMover("shared-ads")} className="mt-14 text-xl">Shared Ads</h1>
            <h1 onClick={()=>linkMover("all-ads")} className="mt-14 text-xl">All Ads</h1>
            
          </Drawer>
        )
      }

    </div>
  )
}

export default Header