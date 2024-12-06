import React from "react";
import HandsAds from "../assets/image/HandsAds.png";
import LogoAds from "../assets/image/logoAds.png";

const AdsComponent = () => {
  return (
    <>
      <div className="relative flex items-center px-4 py-3 bg-primary h-52">
        <div className="mx-auto ">
          <h3 className="font-sans text-3xl font-extrabold ">
            Grow Your Business. <br /> Build Great Products.
          </h3>
        </div>
        <img
          className="absolute bottom-0 w-1/5 right-7"
          src={HandsAds}
          alt="Hand Ads"
        />

        <img className="absolute left-0 w-1/5" src={LogoAds} alt="" />
      </div>
    </>
  );
};

export default AdsComponent;
