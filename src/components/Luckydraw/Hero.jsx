import React from 'react';

const LuckyHero = () => {
  return (
    <div>
      <section className="min-h-[600px] flex justify-center p-0">
        <div className="flex-col gap-15 bg-[#101010] from-[#86fde8] mt-0 to-[#acb6e5] overflow-hidden flex rounded-b-2xl shadow-lg p-5 align-middle items-stretch h-auto md:flex-row">
          <div className="md:w-1/2 pt-10 gap-6 px-8 md:px-16 flex flex-col">
            <h1 className="text-2xl tracking-widest text-white font-bold mb-4 text-center md:text-left">
              MinglePay Weekly Lucky Draw
            </h1>
            <div className="flex flex-row tracking-widest justify-center md:justify-start">
              <h2 className="text-white text-[1.5rem] tracking-widest font-normal mb-4">
                Share and Win&nbsp;
              </h2>
              <h1 className="text-white text-[1.5rem] tracking-widest font-bold mb-4">{" "}5000 INR</h1>
            </div>
            <div className="max-w-md p-2 h-auto justify-between bg-gradient-to-r from-[#8AD863] via-[#D6F19A] to-[#D3E853] rounded-xl">
              <div className="">
                <h1 className="w-full bg-black rounded-full text-center text-sm p-2 text-white">
                  Login daily to win Exciting Prizes
                </h1>
              </div>
              <div className="flex justify-between w-full py-3">
                <p className="text-xs px-4">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam praesentium dolores, temporibus qui
                  labore ratione libero eligendi ipsa! Hic numquam omnis magnam.
                </p>
              </div>
              <div className="bg-black h-[1px] my-2 mx-3"></div>
              <div className="flex justify-center items-center mt-4">
                <button className="bg-gray-900 text-[#D3E853] text-sm rounded-xl py-1 px-4">Share Link</button>
              </div>
            </div>
            <div className="max-w-md p-2 justify-between bg-[#82C969] rounded-xl mt-4">
              <div className="flex flex-inlne">
                <h1 className="w-full font-semibold text-[#151515] tracking-wider text-center text-sm p-2">
                  Click Here to Enter  Lucky Draw
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LuckyHero;
