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
    <div className=" w-100 " style={{
      backgroundImage: `url(${bg})`,
      backgroundRepeat: 'no-repeat',
    }} >
      <div className="bg-[#101010] rounded-b-xl px-3 py-2 mb-4">
        <div className="flex flex-col justify-between">
          <div className="">
            <p className="text-xl tracking-wider text-white">User Profile</p>
            <p className="text-white text-xs font-light" >Help us to get to know you better!</p>
          </div>
          <UserCard />
          <Details />

        </div>
        <div className="w-full flex items-center justify-center my-3">
          <svg
            width="117"
            height="93"
            viewBox="0 0 117 93"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="57.6822"
              cy="60.6168"
              r="30.1822"
              fill="#E5F358"
              stroke="#6F6F6F"
              stroke-width="3"
            />
            <path
              d="M11.1564 44.0975L2.61729 39.7019L4.07181 36.8763L9.06887 37.9055C9.25217 37.9369 9.46451 37.9832 9.7059 38.0445C9.94729 38.1057 10.1887 38.167 10.4301 38.2283C10.6674 38.277 10.8776 38.3275 11.0607 38.3797L11.112 38.2801C10.9794 38.1909 10.8284 38.0764 10.6589 37.9367C10.4811 37.7927 10.293 37.6381 10.0946 37.473C9.89613 37.3079 9.70814 37.1429 9.53058 36.978L5.80186 33.5155L7.23075 30.7396L15.7698 35.1352L14.8279 36.965L10.7824 34.8826C10.409 34.6903 10.0356 34.4981 9.66214 34.3059C9.28468 34.1011 8.95702 33.9219 8.67914 33.7684C8.40554 33.6066 8.22725 33.5043 8.14426 33.4616L8.093 33.5611C8.17574 33.6247 8.3245 33.7538 8.53928 33.9483C8.75003 34.1303 8.97311 34.3291 9.20851 34.5448C9.44818 34.7521 9.65265 34.9361 9.82191 35.0967L13.8539 38.8571L13.021 40.4753L7.62374 39.3975C7.42385 39.3576 7.19064 39.3111 6.92411 39.2578C6.65355 39.192 6.37884 39.1241 6.09999 39.0541C5.81711 38.9714 5.57157 38.908 5.36338 38.8638L5.31212 38.9634C5.54044 39.0704 5.81441 39.201 6.13403 39.355C6.44534 39.5048 6.7691 39.6609 7.10531 39.8235C7.43322 39.9818 7.7341 40.1314 8.00794 40.2724L12.0534 42.3548L11.1564 44.0975Z"
              fill="white"
            />
            <path
              d="M23.5942 26.1872C22.8541 26.8852 22.091 27.3547 21.3048 27.5958C20.5187 27.8369 19.73 27.8237 18.939 27.5563C18.1479 27.2888 17.3714 26.7511 16.6093 25.943C15.8345 25.1215 15.3399 24.3114 15.1256 23.5128C14.9049 22.7074 14.9411 21.9228 15.2341 21.1589C15.5208 20.3882 16.0342 19.6538 16.7743 18.9558C17.528 18.245 18.2945 17.7723 19.0739 17.5376C19.8537 17.2897 20.6391 17.2995 21.4301 17.567C22.2148 17.8277 22.9945 18.3688 23.7694 19.1904C24.5314 19.9984 25.0228 20.8051 25.2435 21.6105C25.4642 22.4158 25.4312 23.2039 25.1446 23.9746C24.8647 24.7388 24.3479 25.4764 23.5942 26.1872ZM22.4223 24.9446C22.7551 24.6309 23.0022 24.308 23.1638 23.976C23.3254 23.644 23.4014 23.3029 23.3918 22.9527C23.3823 22.6024 23.2936 22.2499 23.1257 21.8951C22.9514 21.5334 22.6978 21.1761 22.3648 20.823L22.067 20.5073C21.7276 20.1474 21.3825 19.8699 21.0317 19.6747C20.6809 19.4796 20.3341 19.3704 19.9915 19.3472C19.6424 19.3171 19.2975 19.3731 18.9566 19.5149C18.6157 19.6568 18.2789 19.8846 17.9462 20.1984C17.6203 20.5058 17.3765 20.8255 17.2149 21.1575C17.0534 21.4895 16.9773 21.8306 16.9869 22.1808C16.99 22.5242 17.0788 22.8767 17.253 23.2384C17.4341 23.5936 17.6943 23.9512 18.0337 24.311L18.3315 24.6268C18.6645 24.9798 19.003 25.2572 19.347 25.4587C19.6914 25.6471 20.0382 25.7562 20.3872 25.7863C20.7363 25.8163 21.0813 25.7604 21.4221 25.6185C21.763 25.4766 22.0964 25.252 22.4223 24.9446Z"
              fill="white"
            />
            <path
              d="M32.9902 18.6697L28.9323 9.96504L33.7033 7.74089C34.3462 7.44119 34.9324 7.30694 35.4618 7.33817C35.9997 7.36545 36.4711 7.53705 36.8758 7.85297C37.2765 8.16042 37.6012 8.58062 37.8496 9.11356C38.1138 9.68033 38.2216 10.2428 38.1728 10.801C38.1202 11.3507 37.906 11.8522 37.5303 12.3054L40.9335 14.9667L38.8398 15.9427L35.8256 13.4862L33.402 14.616L34.8808 17.7883L32.9902 18.6697ZM32.704 13.1187L35.3306 11.8943C35.7113 11.7168 35.9541 11.4646 36.0591 11.1376C36.1602 10.8022 36.118 10.4356 35.9327 10.0381C35.8144 9.78428 35.6673 9.59026 35.4914 9.45599C35.3116 9.31327 35.1112 9.23678 34.8902 9.22654C34.6692 9.21631 34.4275 9.27231 34.1653 9.39456L31.5387 10.619L32.704 13.1187Z"
              fill="white"
            />
            <path
              d="M47.4947 13.0987L46.1953 3.58298L53.7967 2.54497L54.0278 4.23727L48.5071 4.99115L48.7969 7.11345L53.6796 6.4467L53.9088 8.12513L49.0261 8.79187L49.3424 11.1084L54.9464 10.3431L55.1794 12.0493L47.4947 13.0987Z"
              fill="white"
            />
            <path
              d="M69.7413 13.4397L72.2264 4.16277L74.2413 4.70254L71.7562 13.9795L69.7413 13.4397Z"
              fill="white"
            />
            <path
              d="M78.9191 16.391L83.6392 8.02688L85.3096 8.96952L86.1289 15.3798C86.1456 15.4642 86.1607 15.5799 86.1742 15.7269C86.1923 15.8657 86.2064 16.0022 86.2163 16.1364C86.2263 16.2707 86.2274 16.3731 86.2197 16.4438L86.2807 16.4782C86.3587 16.34 86.4343 16.2059 86.5077 16.0758C86.5857 15.9377 86.6545 15.8157 86.7142 15.7101L89.26 11.1988L90.9791 12.169L86.259 20.5331L84.5887 19.5904L83.7581 13.0291C83.741 12.8695 83.7268 12.6953 83.7154 12.5067C83.7039 12.318 83.6985 12.1757 83.6992 12.0796L83.6382 12.0452C83.5694 12.1671 83.5006 12.289 83.4318 12.411C83.3676 12.5248 83.3057 12.6345 83.246 12.7402L80.6383 17.3611L78.9191 16.391Z"
              fill="white"
            />
            <path
              d="M91.872 24.9838L98.7921 18.3244L103.704 23.4287L102.474 24.6131L99.0079 21.0118L97.293 22.6621L100.39 25.88L99.1691 27.0547L96.0723 23.8367L93.3184 26.4869L91.872 24.9838Z"
              fill="white"
            />
            <path
              d="M102.561 39.365C102.105 38.456 101.873 37.5904 101.867 36.7681C101.861 35.9459 102.1 35.1941 102.583 34.5127C103.066 33.8314 103.803 33.2413 104.796 32.7426C105.805 32.2355 106.722 31.9936 107.549 32.0169C108.384 32.0361 109.125 32.2954 109.773 32.795C110.429 33.2904 110.986 33.9925 111.443 34.9015C111.908 35.8272 112.141 36.697 112.143 37.5109C112.157 38.329 111.923 39.0787 111.44 39.7601C110.966 40.4372 110.224 41.0294 109.215 41.5365C108.223 42.0352 107.309 42.275 106.474 42.2559C105.639 42.2367 104.894 41.9794 104.237 41.4841C103.585 40.9971 103.027 40.2907 102.561 39.365ZM104.087 38.5981C104.293 39.0067 104.531 39.336 104.803 39.5858C105.075 39.8357 105.38 40.0062 105.718 40.0974C106.057 40.1885 106.42 40.2045 106.808 40.1452C107.204 40.0818 107.619 39.9411 108.053 39.7232L108.441 39.5283C108.883 39.3062 109.247 39.055 109.535 38.7747C109.822 38.4945 110.026 38.1936 110.147 37.8719C110.275 37.5461 110.321 37.1995 110.282 36.8323C110.244 36.4651 110.122 36.0771 109.917 35.6685C109.716 35.2682 109.479 34.9431 109.207 34.6932C108.935 34.4434 108.63 34.2728 108.292 34.1817C107.962 34.0864 107.599 34.0704 107.203 34.1339C106.81 34.2056 106.393 34.3526 105.951 34.5747L105.563 34.7696C105.13 34.9875 104.767 35.2324 104.476 35.5043C104.196 35.7804 103.993 36.0813 103.864 36.4072C103.735 36.733 103.69 37.0795 103.728 37.4468C103.767 37.814 103.886 38.1978 104.087 38.5981Z"
              fill="white"
            />
            <path
              d="M65.3968 54.9845H50.8089C49.6965 54.9845 49.0206 56.2095 49.6261 57.153L56.9201 68.6149C57.0471 68.8156 57.2227 68.9809 57.4308 69.0954C57.6388 69.2099 57.8724 69.27 58.1099 69.27C58.3474 69.27 58.581 69.2099 58.789 69.0954C58.9971 68.9809 59.1728 68.8156 59.2998 68.6149L66.5796 57.153C66.717 56.9406 66.7945 56.6951 66.8039 56.4423C66.8134 56.1895 66.7545 55.9389 66.6333 55.7169C66.5122 55.4948 66.3334 55.3096 66.1158 55.1807C65.8982 55.0518 65.6498 54.984 65.3968 54.9845Z"
              fill="#101010"
            />
          </svg>
        </div>

      </div>
      <div className="my-2 flex flex-col h-64 justify-between px-4">
        <h1 className="text-green-500">MORE LINKS</h1>
        <div className="">
          <Link href="/profile" className="text-black text-md">How does it work?</Link>
        </div>
        <div className="">
          <Link href="/profile" className="text-black text-md">Chat with us</Link>
        </div>
        <div className="">
          <Link href="/profile" className="text-black text-md">Join Unizone Community on Telegram</Link>
        </div>
        <div className="">
          <Link href="/profile" className="text-black text-md">Frequently Asked Questions</Link>
        </div>
        <div className="">
          <Link href="/profile" className="text-black text-md">Terms of Service</Link>
        </div>
        <div className="">
          <Link href="/profile" className="text-black text-md">Privacy Policy</Link>
        </div>
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
    </div >
  );
};

export default page;

export default page;
