"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Banner from "../../components/profile/Banner_profile.jsx";
import bg from "../../public/bg black.png";
import UserCard from "../../components/profile/UserCard.jsx";
import Details from "../../components/profile/Details.jsx";
import down_arrow from "../../public/statement/down_arrow.png";
import { useQuery } from "@apollo/client";
import { GetUser } from "@/functions/graphql/queries/user.queries.js";
import { registerUser } from "@/functions/auth/user.js";
import app from "../../firebase/config";
import { getAuth } from "firebase/auth";

const auth = getAuth(app);

const page = () => {
  // const [startDate, setStartDate] = useState(new Date());
  const registerCB = () => {
  //   console.log(auth);
  //   auth.currentUser
  //     .getIdTokenResult(/*force refresh*/ true)
  //     .then((idTokenResult) => {
  //       const tknId = new Token("id");
  //       console.log(idTokenResult);
  //       tknId.set(idTokenResult);
  //     });
  };
  React.useEffect(() => {
    registerUser(registerCB);
  }, []);
  const { loading, error, data } = useQuery(GetUser);
  console.log(data);

  return (
    <div
      className=" w-100 "
      style={{ backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat" }}
    >
      <div className="bg-[#101010] rounded-b-xl px-3  py-2">
        <div className="flex flex-col h-[38rem] justify-between">
          <div className="">
            <p className="text-xl tracking-wider text-white">User Profile</p>
            <p className="text-white text-xs font-light">
              Help us to get to know you better!
            </p>
          </div>
          <UserCard />
          <Details />
        </div>
        <div className="w-full flex items-center justify-center m-3">
          <Image src={down_arrow} width="70" height="70" />
        </div>
      </div>
      <div className="my-2 flex flex-col h-64 justify-between px-4">
        <h1 className="text-green-500">MORE LINKS</h1>
        <div className="">
          <Link href="/profile" className="text-black text-md">
            How does it work?
          </Link>
        </div>
        <div className="">
          <Link href="/profile" className="text-black text-md">
            Chat with us
          </Link>
        </div>
        <div className="">
          <Link href="/profile" className="text-black text-md">
            Join Unizone Community on Telegram
          </Link>
        </div>
        <div className="">
          <Link href="/profile" className="text-black text-md">
            Frequently Asked Questions
          </Link>
        </div>
        <div className="">
          <Link href="/profile" className="text-black text-md">
            Terms of Service
          </Link>
        </div>
        <div className="">
          <Link href="/profile" className="text-black text-md">
            Privacy Policy
          </Link>
        </div>
      </div>

      <hr />
      <h1 className="text-red-500 m-5 text-lg">Logout</h1>
    </div>
  );
};

export default page;
