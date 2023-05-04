import React from 'react'
import man from "../../public/images/man.svg"
import Image from "next/image";

const Review = () => {
    return (
        <>
            <div className="flex flex-col xxs:w-[20rem]  xxxs:w-[17rem] xxxs:py-3  gap-2 mx-4 mt-5 h-full pt-4 rounded-3xl justify-center items-center bg-[#101010] text-white">
                <h3 className="text-white font-semibold text-2xl mb-4">Customer Reviews</h3>
                <div className="grid grid-cols-4 gap-3 items-center xxs:justify-start xxxs:justify-center">
                    <div className="col-span-1">
                        <Image src={man} alt="man" />
                    </div>
                    <div className="col-span-3 ">
                        <div className="flex flex-col gap-1">
                            <div className="text-lg font-medium">Name</div>
                            <div className="text-gray-400 text-sm">Student</div>
                        </div>
                    </div>
                </div>
                <div className="my-8 text-center">
                    <p className="text-lg text-left mx-4 p-5 overflow-y-hidden">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pretium posuere fermentum. Cras viverra
                        eleifend leo, ac s vel
                        conva
                    </p>
                </div>
            </div>
        </>
    )
}

export default Review