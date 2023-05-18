"use client"
import React, { useEffect } from 'react';
import ReferralCard from "@/components/referral/ReferralCard";
import { useSelector, useDispatch } from 'react-redux';
import { fetchReferralData } from "./../../redux/features/referral/referralSlice";

const Referrals = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReferralData());
  }, [dispatch]);

  const { referral_details } = useSelector(state => state.referral);
  console.log("referrals", referral_details);

  return (
    <div className="mx-auto max-w-screen-s tracking-wide md:max-w-2xl py-12 px-6">
      <div className="text-[#101010] my-4 flex gap-y-16 text-2xl md:text-4xl font-bold mb-8">REFERRALS</div>
      <div className="space-y-8">
        {referral_details.map((referral, index) => (
          <ReferralCard
            key={index}
            name={referral.name}
            referralDate={referral.referral_date}
            isSignUp={referral.isSignUp}
            isFirstAdPlaced={referral.isFirstAdPlaced}
            isFirstPayoutPlaced={referral.isFirstPayoutPlaced}
          />
        ))}
      </div>
    </div>
  );
};

export default Referrals;
