import React from "react";

const MainInfoComponent = () => {
  return (
    <>
      <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div class="mg-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
          <div class="flex flex-col px-4 py-8 text-center">
            <div class="order-last text-lg font-bold text-gray-500 mt-8">
              Total Sales
            </div>

            <div class="flex items-center justify-center">
              <img className="fill-red-500" src="../pen-tool-2.svg" alt="" />
            </div>
          </div>

          <div class="flex flex-col px-4 py-8 text-center">
            <div class="order-last text-lg font-bold text-gray-500 mt-8">
              Official Adivons
            </div>

            <div class="flex items-center justify-center">
              <img src="../search-normal.svg" alt="" />
            </div>
          </div>

          <div class="flex flex-col px-4 py-8 text-center ">
            <div class="order-last text-lg font-bold text-gray-500 mt-8">
              Total Adivons
            </div>

            <div class="flex items-center justify-center">
              <img src="../briefcase.svg" alt="" />
            </div>
          </div>

          <div class="flex flex-col px-4 py-8 text-center">
            <div class="order-last text-lg font-bold text-gray-500 mt-8">
              Downloads
            </div>

            <div class="flex items-center justify-center">
              <img src="../scroll.svg" alt="" />
            </div>
          </div>
        </div>

        <div class="mg-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-3 lg:grid-cols-3">
          <div class="flex flex-col px-4 py-8 text-center items-center justify-center">
            <div class="text-gray-500 mt-8">
              <img className="w-60" src="../Hello.png" alt="" />
            </div>
          </div>
          <div class="flex flex-col px-4 py-8 text-right">
            <div class="font-extrabold text-black text-3xl mt-8 pr-10">
              Award winning <br /> agency specializing <br />
              in creative design
            </div>
          </div>
          <div class="flex flex-col px-4 py-8 text-left">
            <div class="text-lg font-bold text-gray-500 mt-8">
              <p>
                We help businesses grow, launch products and build enduring
                relationships with our communities.
              </p>
              <br />
              <a className="underline" href="">
                Our Info
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainInfoComponent;
