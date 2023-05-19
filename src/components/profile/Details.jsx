"use client";
import React from "react";
import { useRef } from "react";
import Image from "next/image";
import { useState } from "react";
  import { PencilIcon } from "@heroicons/react/outline";
import { CheckCircleIcon } from "@heroicons/react/outline";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  fetchContacts,
  fetchDob,
  decrement,
  increment,
  incrementByAmount,
  setGender,
} from "@/redux/features/userSlice";

const Details = () => {
  const inputRef = useRef(null);
  const dispatch = useAppDispatch();
  const user_details = useAppSelector((state) => state.user.user_details);

  const [Show, setShow] = useState(false);
  const [Fetchcontacts, setFetchcontacts] = useState(false);
  const [Mobile, setMobile] = useState(false);
  const [Pincode, setPincode] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [selectedBtn, setSelectedBtn] = useState("");

  const handleButtonClick = (value) => {
    dispatch(setGender(value));
    setSelectedBtn(value);
  };

  return (
    <div className="bg-[#E8E8E8] rounded-xl my-2 p-2">
      <form>
        <div className="">
          <div className="flex justify-between pr-2 items-center">
            <p className="flex tracking-wider text-sm my-1  text-gray-500">
              <p className="text-red-600 pr-2">*</p>DATE OF BIRTH
            </p>
            <PencilIcon
              className="h-5 w-5 text-black"
              onClick={() => {
                console.log("clicked");
                // enable fetch_google
                setShow(!Show);
              }}
            />
          </div>
          {/* <input type="text" name="dob" id="" value={user_details.dob} className="bg-transparent border-none " /> */}
          <p className="mx-2">{user_details.dob}</p>
          {Show && (
            <div
              id="fetch_google"
              className=" flex w-full justify-center items-center "
            >
              <button
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(fetchDob());
                  setShow(!Show);
                }}
                class="flex items-center justify-center px-2 py-2 border border-transparent rounded-md shadow-sm bg-[#acd3e5]  focus:outline-none focus:ring-2 focus:ring-offset-2 "
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/882px-Google_%22G%22_Logo.svg.png?20230305195327"
                  height={20}
                  width={20}
                  className="mx-1"
                />
                Fetch from Google
              </button>
            </div>
          )}
          <div className="bg-black h-[1px] my-2 mx-3"></div>
        </div>
        <div className="my-4">
          <div className="flex justify-between pr-2 items-center">
            <p className="flex tracking-wider text-sm my-1  text-gray-500">
              <p className="text-red-600 pr-2">*</p>CONTACTS
            </p>
            <PencilIcon
              className="h-5 w-5 text-black"
              onClick={() => {
                console.log("clicked");
                // enable fetch_google
                setFetchcontacts(!Fetchcontacts);
              }}
            />
          </div>
          <p className="mx-2">{user_details.contacts} </p>
          {Fetchcontacts && (
            <div
              id="fetch_google"
              className=" flex w-full justify-center items-center "
            >
              <button
                onClick={() => {
                  dispatch(fetchContacts());
                  setFetchcontacts(!Fetchcontacts);
                }}
                class="flex items-center justify-center px-2 py-2 border border-transparent rounded-md shadow-sm bg-[#acd3e5]  focus:outline-none focus:ring-2 focus:ring-offset-2 "
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/882px-Google_%22G%22_Logo.svg.png?20230305195327"
                  height={20}
                  width={20}
                  className="mx-1"
                />
                Fetch from Google
              </button>
            </div>
          )}
          <div className="bg-black h-[0.5px] my-2 mx-3"></div>
        </div>

        <div className="my-4">
          <div className="flex justify-between pr-2 items-center">
            <p className="flex tracking-wider text-sm my-1  text-gray-500">
              <p className="text-red-600 pr-2">*</p>MOBILE NUMBER
            </p>

            <PencilIcon
              className="h-5 w-5 text-black"
              onClick={() => {
                console.log("clicked");
                // enable fetch_google
                setMobile(!Mobile);
              }}
            />
          </div>
          <p className="px-2">{user_details.mobile}</p>
          {Mobile && (
            <div className="flex">
              <input
                type="text"
                name="mobile"
                id="mobile"
                class="bg-transparent px-2 mx-2 rounded-lg border border-gray-400"
                placeholder="+91"
                ref={inputRef}
              />
              <CheckCircleIcon
                className="h-5 w-5 text-green-500"
                onClick={(e) => {
                  const inputValue = inputRef.current.value;
                  dispatch(decrement(inputValue));
                  setMobile(!Mobile);
                }}
              />
            </div>
          )}
          <div className="bg-black h-[1px] my-2 mx-3"></div>
        </div>
        <div className="my-4">
          <div className="flex justify-between pr-2 items-center">
            <p className="flex tracking-wider text-sm my-1  text-gray-500">
              <p className="text-red-600 pr-2">*</p>PINCODE
            </p>
            <PencilIcon
              className="h-5 w-5 text-black"
              onClick={(e) => {
                setPincode(!Pincode);
              }}
            />
          </div>
          <p className="mx-2">{user_details.pincode}</p>
          {Pincode && (
            <div className="flex">
              <input
                type="text"
                name="pincode"
                id="Pincode"
                class="bg-transparent px-2 mx-2 rounded-lg border border-gray-400"
                placeholder="+91"
                ref={inputRef}
              />
              <CheckCircleIcon
                className="h-5 w-5 text-green-500"
                onClick={(e) => {
                  const inputValue = inputRef.current.value;
                  dispatch(incrementByAmount(inputValue));
                  setPincode(!Pincode);
                }}
              />
            </div>
          )}
          <div className="bg-black h-[0.5px] my-2 mx-3"></div>
        </div>

        <div className="mx-2">
          <p className="flex tracking-wider text-sm   text-gray-500">GENDER</p>
          <div className="flex ">
            <button
              id="btn1"
              className={`mt-2 px-4 border-2 hover:text-white ${
                selectedBtn === "male" || user_details.gender === "male"
                  ? "bg-black text-white"
                  : "hover:bg-black"
              } rounded-xl`}
              onClick={(e) => 
                {e.preventDefault()
                handleButtonClick("male")}}
            >
              Male
            </button>
            <button
              id="btn2"
              className={`mt-2 px-4 border-2 hover:text-white ${
                selectedBtn === "female" || user_details.gender === "female"
                  ? "bg-black text-white"
                  : "hover:bg-black"
              } rounded-xl`}
              onClick={(e) => 
                {e.preventDefault()
                handleButtonClick("female")}}
            >
              Female
            </button>
            <button
              id="btn13"
              className={`mt-2 mx-2 border-2 hover:text-white px-4 ${
                selectedBtn === "other" || user_details.gender === "other"
                  ? "bg-black text-white"
                  : "hover:bg-black"
              } rounded-xl`}
              onClick={(e) =>  
                {e.preventDefault()
                handleButtonClick("other")}}
            >
              Other
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Details;
