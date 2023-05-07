import React from 'react'

const Payout = () => {
    return (
        <div>
            <p className="text-xl tracking-wider pt-4 px-4 font-semibold">Payouts</p>
            <div className="h-[7rem] bg-[#FFB2AC] m-4 rounded-xl">
                <p className="text-xl tracking-wider py-2 px-4 font-semibold">₹
                    <span className="text-3xl">25</span>
                </p>
                <p className="px-4 text-sm font-sans">Submitted on April 21, 2023</p>
                <p className="px-4 text-sm font-medium py-1">Pending for Approval</p>
            </div>
            <div className="h-[8rem] bg-white m-4 rounded-xl">
                <p className="text-xl tracking-wider py-2 px-4 font-semibold">₹
                    <span className="text-3xl">15</span>
                </p>
                <p className="px-4 text-sm font-sans">Issued on April 11, 2023</p>
                <p className="px-4 text-xs font-medium py-1">Payout link sent to your mobile via SMS and WhatsApp</p>
            </div>
        </div>
    )
}

export default Payout
