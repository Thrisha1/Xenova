import React from 'react'
import cardbg from '../../public/cardbg.png'
import {CheckCircleIcon} from "@heroicons/react/outline";


const UserCard = () => {
    return (

        <div className="max-w-sm p-2 h-[8rem] justify-between bg-gradient-to-r from-[#8AD863] via-[#D6F19A] to-[#D3E853] rounded-xl ">

            {/* <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-blue-600 h-2.5 rounded-full" style="width: 45%"></div>
            </div> */}
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-[#34A853] h-2.5 rounded-full w-20"></div>
            </div>

            <div className="my-2">
                <h5 className="mx-2 text-lg font-bold tracking-widest">THRISHA KANNAN</h5>
                <h5 className="text-xs font tracking-wider px-2">thrishakannan25@gmail.com</h5>
            </div>
            <div className="bg-black h-[1px] w-3/4 mx-7"></div>
            <div className="flex items-center justify-between my-2">
                <div className="flex items-center">
                    <h1 className="text-xs p-2">Your Account is verified!</h1>
                    <CheckCircleIcon className="h-6 w-6 text-black"/>
                </div>
                <button className="bg-red-500 text-white rounded-xl px-2">Logout</button>
            </div>
            {/* <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
            </a> */} </div>

    )
}

export default UserCard
