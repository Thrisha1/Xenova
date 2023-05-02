import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from "@/components/HomePage/Hero";
import FeatureCircles from "@/components/HomePage/FeatureCircles";
import WhereWeNow from "@/components/HomePage/WhereWeNow";
import HowItWorks from "@/components/HomePage/HowItWorks";
import Footer from "../components/Footer.jsx";
import ReviewCarousel from "@/components/HomePage/ReviewCarousel";
import LandingFaq from "@/components/HomePage/LandingFaq";

export default function Home() {
  return (
    <div>
      {/* Home */}
      <Hero />
      <FeatureCircles />
      <WhereWeNow />
      <HowItWorks />

      <ReviewCarousel />
      <LandingFaq/>
      <Footer/>
    </div>
  )
}
