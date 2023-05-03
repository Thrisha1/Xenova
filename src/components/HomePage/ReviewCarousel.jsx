'use client'
import React from 'react'
import man from "@/public/images/man.svg"
import Image from "next/image";
import { Carousel } from "flowbite-react";
import Review from './Review';

const ReviewCarousel = () => {
  return (
    <div className=" mx-4">
      <Carousel className='w-full flex gap-16 overflow-x-scroll'  slideInterval={5000}>
        
        <Review/>
        <Review/>
        <Review/>
        <Review/>

      </Carousel>
    </div>
  );
};

export default ReviewCarousel;
