import React from "react";
import { Link } from "react-router-dom";
import PenTool from "../assets/image/pen-tool-2.svg";
import SearchNormal from "../assets/image/search-normal.svg";
import Briefcase from "../assets/image/briefcase.svg";
import Scroll from "../assets/image/scroll.svg";
import Hello from "../assets/image/Hello.png";

const MainInfoComponent = () => {
  return (
    <>
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-10 lg:px-8">
        <div className="grid grid-cols-1 gap-4 mg-6 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col px-4 py-8 text-center">
            <div className="order-last mt-8 text-lg font-bold text-gray-500">
              Total Sales
            </div>

            <div className="flex items-center justify-center">
              <img className="fill-red-500" src={PenTool} alt="Pen Tool" />
            </div>
          </div>

          <div className="flex flex-col px-4 py-8 text-center">
            <div className="order-last mt-8 text-lg font-bold text-gray-500">
              Official Adivons
            </div>

            <div className="flex items-center justify-center">
              <img src={SearchNormal} alt="Search" />
            </div>
          </div>

          <div className="flex flex-col px-4 py-8 text-center ">
            <div className="order-last mt-8 text-lg font-bold text-gray-500">
              Total Adivons
            </div>

            <div className="flex items-center justify-center">
              <img src={Briefcase} alt="Briefcase" />
            </div>
          </div>

          <div className="flex flex-col px-4 py-8 text-center">
            <div className="order-last mt-8 text-lg font-bold text-gray-500">
              Downloads
            </div>

            <div className="flex items-center justify-center">
              <img src={Scroll} alt="Scroll" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 mg-6 sm:mt-8 sm:grid-cols-3 lg:grid-cols-3">
          <div className="flex flex-col items-center justify-center px-4 py-8 text-center">
            <div className="mt-8 text-gray-500">
              <img className="w-60" src={Hello} alt="Hello" />
            </div>
          </div>
          <div className="flex flex-col px-4 py-8 text-right">
            <div className="pr-10 mt-8 text-3xl font-extrabold text-black">
              Award winning <br /> agency specializing <br />
              in creative design
            </div>
          </div>
          <div className="flex flex-col px-4 py-8 text-left">
            <div className="mt-8 text-lg font-bold text-gray-500">
              <p>
                We help businesses grow, launch products and build enduring
                relationships with our communities.
              </p>
              <br />
              <Link to="/contact" className="underline">
                Our Info
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainInfoComponent;
