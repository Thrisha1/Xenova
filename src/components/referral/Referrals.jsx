import React from 'react';
import ReferralCard from "@/components/referral/ReferralCard";

const Referrals = () => {
  return (
    <div className="mx-auto tracking-wide md:max-w-2xl py-12 px-6">
      <div className="text-[#101010] my-4 flex gap-y-16 text-2xl md:text-4xl font-bold mb-8">REFERALS</div>

      <div className="space-y-8">
        <ReferralCard />
        <ReferralCard />
        <ReferralCard />
        <ReferralCard />
      </div>
    </div>
  );
};

export default Referrals;
