import React from 'react'
import Image from "next/image";
import Link from "next/link";
import Share from "../../components/ads-available page/ShareButton.jsx";

const Ads = (props) => {
  return (
    <div className="py-2">
      <Link
        href="/"
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  "
      >
        <Image
          className="object-cover h-[30rem] w-[30rem]  md:rounded-none md:rounded-l-lg"
          src={props.img}
          width="500"
          height="500"
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          {/* <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5> */}
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-500">
            Earn Up to <span className="text-xl"> ₹ {props.price} </span>{" "}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-500">
            {props.desc}
          </p>
          <hr />
          <Share />
        </div>
      </Link>
    </div>
  )
}

export default Ads