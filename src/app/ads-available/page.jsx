import React from "react";
import Ads from "../../components/ads-available page/Ads.jsx";
import ad1 from "../../public/ad1.png";
import ad2 from "../../public/ad2.jpeg";

const page = () => {
  return (
    <div className="p-7">
        <Ads img={ad1} price="65.5" desc="SMARANAYIL Video Launch"/>
        <Ads img={ad2} price="65.5" desc="SMARANAYIL Video Launch"/>
    </div>
  );
};

export default page;
