import React from "react";

const StatComponent = () => {
  return (
    <div className="px-4 py-8 mx-auto my-8 bg-black max-w-screen sm:px-6 sm:py-4">
      <dl className="grid grid-cols-1 gap-4 mt-6 sm:mt-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col items-center px-4 py-8 text-left ">
          <dt className="order-last mt-2 text-lg font-medium text-white ">
            Clients Worldwide
          </dt>

          <dd className="text-4xl font-extrabold text-primary md:text-5xl">
            350 +
          </dd>
        </div>

        <div className="flex flex-col px-4 py-8 text-left">
          <dt className="order-last mt-2 text-lg font-medium text-white ">
            Team Members
          </dt>

          <dd className="text-4xl font-extrabold text-primary md:text-5xl">
            20 +
          </dd>
        </div>

        <div className="flex flex-col px-4 py-8 text-left">
          <dt className="order-last mt-2 text-lg font-medium text-white ">
            TProject Completed
          </dt>

          <dd className="text-4xl font-extrabold text-primary md:text-5xl">
            100 +
          </dd>
        </div>

        <div className="flex flex-col px-4 py-8 text-left">
          <dt className="order-last mt-2 text-lg font-medium text-white">
            Revanue generated
          </dt>

          <dd className="text-4xl font-extrabold text-primary md:text-5xl">
            85M +
          </dd>
        </div>
      </dl>
    </div>
  );
};

export default StatComponent;
