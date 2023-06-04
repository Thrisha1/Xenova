"use client"
import React from 'react'
import Link from 'next/link'
import Ad_card from '../Ad_card'
import { useAppSelector, useAppDispatch } from "../../redux/hooks.jsx";
import { useQuery, useMutation } from "@apollo/client";
import { GET_ADS, GET_SHARED } from "@/functions/graphql/queries/ads.query";

const Hero = () => {
  //Get all ads
  const {
    loading: ads_loading,
    error: ads_error,
    data: ads_data,
} = useQuery(GET_ADS);
  const adShow = useAppSelector((state) => state.ad.ads);


  if (ads_loading)
  {
    return <div>Loading...</div>
  }
  return (
    <div>
      <section className="min-h-[200px] flex">
        <div className="flex-col gap-4 justify-center bg-[#101010] from-[#86fde8] mt-0 to-[#acb6e5] overflow-hidden flex rounded-b-2xl shadow-lg p-5 align-middle items-stretch h-auto md:flex-row">
          <div className="md:w-1/2 flex-col">
            <h1 className="text-white text-2xl font-medium">
              All available Ads
            </h1>
          </div>

          {(ads_data && ads_data.ads.length > 0) ? (
            ads_data.ads.map((ad) => (
              <Ad_card
                adId={ad.id}
                imageSrc={ad.s3.url}
                desc={ad.description}
                Amt={ad.price}
                link={ad.s3.url}
              />
            ))
          ) : (
            <div className="md:w-1/2 flex-col">
              <h1 className="text-white text-2xl font-medium">
                No Ads Currently available. Kindly check back in some time.
              </h1>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Hero;
