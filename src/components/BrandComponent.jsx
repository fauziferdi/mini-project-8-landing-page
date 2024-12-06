import React from "react";
import Spotify from "../assets/image/spotify.svg";
import Dropbox from "../assets/image/dropbox.svg";
import Tesla from "../assets/image/tesla.svg";
import Reddit from "../assets/image/reddit.svg";
import Google from "../assets/image/google.svg";
import Stripe from "../assets/image/stripe.svg";
import DHL from "../assets/image/dhl.svg";
import Airbnb from "../assets/image/airbnb.svg";

const BrandComponent = ({ home = false }) => {
  return (
    <div className="max-w-screen-xl px-5 py-10 mx-auto sm:px-10 sm:py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-sans text-3xl font-bold text-gray-900 sm:text-4xl">
          We worked with the world’s biggest <br /> brands and the most
          innovative <br />
          startups
        </h2>
      </div>

      <dl className="grid grid-cols-1 mt-6 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col items-center justify-center px-4 text-center border-b border-r border-gray-300 py-14">
          <img className="w-3/4" src={Spotify} alt="Spotify" />
        </div>

        <div className="flex flex-col items-center justify-center px-4 text-center border-b border-r border-gray-300 py-14">
          <img className="w-3/4" src={Dropbox} alt="Dropbox" />
        </div>

        <div className="flex flex-col items-center justify-center px-4 text-center border-b border-r border-gray-300 py-14">
          <img className="w-3/4" src={Tesla} alt="Tesla" />
        </div>

        <div className="flex flex-col items-center justify-center px-4 text-center border-b border-gray-300 py-14">
          <img className="w-3/4" src={Reddit} alt="Reddit" />
        </div>
        <div className="flex flex-col items-center justify-center px-4 text-center border-r border-gray-300 py-14">
          <img className="w-3/4" src={Google} alt="Google" />
        </div>

        <div className="flex flex-col items-center justify-center px-4 text-center border-r border-gray-300 py-14">
          <img className="w-3/4" src={Stripe} alt="Stripe" />
        </div>

        <div className="flex flex-col items-center justify-center px-4 text-center border-r border-gray-300 py-14">
          <img className="w-3/4" src={DHL} alt="DHL" />
        </div>

        <div className="flex flex-col items-center justify-center px-4 text-center border-gray-300 py-14">
          <img className="w-3/4" src={Airbnb} alt="Airbnb" />
        </div>
      </dl>
    </div>
  );
};

export default BrandComponent;
