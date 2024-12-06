import React from "react";

const BrandComponent = () => {
  return (
    <div className="max-w-screen-xl px-5 py-10 mx-auto sm:px-10 sm:py-20">
      <div class="mx-auto max-w-3xl text-center">
        <h2 class=" font-sans text-3xl font-bold text-gray-900 sm:text-4xl">
          We worked with the world’s biggest <br /> brands and the most
          innovative <br />
          startups
        </h2>
      </div>

      <dl class="mt-6 grid grid-cols-1 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
        <div class="flex flex-col items-center justify-center border-r border-b border-gray-300 px-4 py-14 text-center">
          <img className="w-3/4" src="../spotify.svg" alt="" />
        </div>

        <div class="flex flex-col items-center justify-center border-r border-b border-gray-300 px-4 py-14 text-center">
          <img className="w-3/4" src="../dropbox.svg" alt="" />
        </div>

        <div class="flex flex-col items-center justify-center  border-r border-b border-gray-300 px-4 py-14 text-center">
          <img className="w-3/4" src="../tesla.svg" alt="" />
        </div>

        <div class="flex flex-col items-center justify-center border-b border-gray-300 px-4 py-14 text-center">
          <img className="w-3/4" src="../reddit.svg" alt="" />
        </div>
        <div class="flex flex-col items-center justify-center border-r  border-gray-300 px-4 py-14 text-center">
          <img className="w-3/4" src="../google.svg" alt="" />
        </div>

        <div class="flex flex-col items-center justify-center border-r border-gray-300 px-4 py-14 text-center">
          <img className="w-3/4" src="../stripe.svg" alt="" />
        </div>

        <div class="flex flex-col items-center justify-center  border-r border-gray-300 px-4 py-14 text-center">
          <img className="w-3/4" src="../dhl.svg" alt="" />
        </div>

        <div class="flex flex-col items-center justify-center  border-gray-300 px-4 py-14 text-center">
          <img className="w-3/4" src="../airbnb.svg" alt="" />
        </div>
      </dl>
    </div>
  );
};

export default BrandComponent;
