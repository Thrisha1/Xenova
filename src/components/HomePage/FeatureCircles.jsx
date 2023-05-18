import React from 'react'
import Image from "next/image";
import signup from "../../public/images/singnup.svg"
import share from "../../public/images/share.svg"
import bank from "../../public/images/bank.svg"

const FeatureCircles = () => {
  return (
    <div>
      <div className="flex justify-center py-16 md:px-24 mx-4 space-y-8 md:space-y-0">
        <div className="grid grid-cols-3 md:grid-cols-3 gap-6">
          <div className="bg-[#82C969] rounded-3xl p-6 flex flex-col items-center">
            {/* <Image src={signup} alt="feature1"/> */}
            <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.66667 17.8334V14.3334H0.5V9.66671H8.66667V6.16671L14.5 12L8.66667 17.8334ZM8.66667 0.333374H19.1667C19.7855 0.333374 20.379 0.579207 20.8166 1.01679C21.2542 1.45438 21.5 2.04787 21.5 2.66671V21.3334C21.5 21.9522 21.2542 22.5457 20.8166 22.9833C20.379 23.4209 19.7855 23.6667 19.1667 23.6667H8.66667C8.04783 23.6667 7.45434 23.4209 7.01675 22.9833C6.57917 22.5457 6.33333 21.9522 6.33333 21.3334V19H8.66667V21.3334H19.1667V2.66671H8.66667V5.00004H6.33333V2.66671C6.33333 2.04787 6.57917 1.45438 7.01675 1.01679C7.45434 0.579207 8.04783 0.333374 8.66667 0.333374Z" fill="#101010" />
            </svg>

            <h3 className="text-center font-medium text-sm text-black mt-4">Free Signup</h3>
          </div>
          <div className="bg-[#82C969] rounded-3xl p-6 flex flex-col items-center">
            {/* <Image src={share} alt="feature2" /> */}
            <svg width="28" height="19" viewBox="0 0 28 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.1667 6.43325V7.48325L13.1833 7.71658C10.15 8.18325 7.93333 9.34992 6.3 10.8666C8.28333 10.2833 10.3833 9.93325 12.8333 9.93325H15.1667V11.4499L17.7333 8.99992L15.1667 6.43325ZM12.8333 0.833252L21 8.99992L12.8333 17.1666V12.3833C7 12.3833 2.91667 14.2499 0 18.3333C1.16667 12.4999 4.66667 6.66658 12.8333 5.49992M19.8333 4.33325V0.833252L28 8.99992L19.8333 17.1666V13.6666L24.5 8.99992" fill="#101010" />
            </svg>

            <h3 className="text-center font-medium text-sm text-black mt-4">One Click Share</h3>
          </div>
          <div className="bg-[#82C969] rounded-3xl p-6 flex flex-col items-center">
            {/* <Image src={bank} alt="feature3" /> */}
            <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.4168 0.166626L0.333496 5.99996V8.33329H22.5002V5.99996M16.6668 10.6666V18.8333H20.1668V10.6666M0.333496 24.6666H22.5002V21.1666H0.333496M9.66683 10.6666V18.8333H13.1668V10.6666M2.66683 10.6666V18.8333H6.16683V10.6666H2.66683Z" fill="#101010" />
            </svg>

            <h3 className="text-center font-medium text-sm text-black mt-4">Direct to Bank</h3>
          </div>
        </div>
      </div>

    </div>
  );
}

export default FeatureCircles;
