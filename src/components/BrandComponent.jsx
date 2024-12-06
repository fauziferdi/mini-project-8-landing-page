import React from "react";

const BrandComponent = ({ home = false }) => {
  return (
    <div className="max-w-screen-xl px-5 py-10 mx-auto sm:px-10 sm:py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-sans text-3xl font-bold text-gray-900  sm:text-4xl">
          We worked with the world’s biggest <br /> brands and the most
          innovative <br />
          startups
        </h2>
      </div>

      <dl className="grid grid-cols-1 mt-6 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col items-center justify-center px-4 text-center border-b border-r border-gray-300 py-14">
          <img className="w-3/4" src="../spotify.svg" alt="" />
        </div>

        <div className="flex flex-col items-center justify-center px-4 text-center border-b border-r border-gray-300 py-14">
          <img className="w-3/4" src="../dropbox.svg" alt="" />
        </div>

        <div className="flex flex-col items-center justify-center px-4 text-center border-b border-r border-gray-300 py-14">
          <img className="w-3/4" src="../tesla.svg" alt="" />
        </div>

        <div className="flex flex-col items-center justify-center px-4 text-center border-b border-gray-300 py-14">
          <img className="w-3/4" src="../reddit.svg" alt="" />
        </div>
        <div className="flex flex-col items-center justify-center px-4 text-center border-r border-gray-300 py-14">
          <img className="w-3/4" src="../google.svg" alt="" />
        </div>

        <div className="flex flex-col items-center justify-center px-4 text-center border-r border-gray-300 py-14">
          <img className="w-3/4" src="../stripe.svg" alt="" />
        </div>

        <div className="flex flex-col items-center justify-center px-4 text-center border-r border-gray-300 py-14">
          <img className="w-3/4" src="../dhl.svg" alt="" />
        </div>

        <div className="flex flex-col items-center justify-center px-4 text-center border-gray-300 py-14">
          <img className="w-3/4" src="../airbnb.svg" alt="" />
        </div>
      </dl>
    </div>
  );
};

export default BrandComponent;
