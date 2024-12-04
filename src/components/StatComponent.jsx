import React from "react";

const StatComponent = () => {
  return (
    <div class=" mx-auto max-w-screenpx-4 py-8 my-8 bg-black sm:px-6 sm:py-4 ">
      <dl class="mt-6 grid grid-cols-1 gap-4 sm:mt-4 sm:grid-cols-2 lg:grid-cols-4">
        <div class="flex flex-col  px-4 py-8 text-left">
          <dt class=" mt-2 order-last text-lg font-medium text-white">
            Clients Worldwide
          </dt>

          <dd class="text-4xl font-extrabold text-primary md:text-5xl">
            350 +
          </dd>
        </div>

        <div class="flex flex-col  px-4 py-8 text-left">
          <dt class=" mt-2 order-last text-lg font-medium text-white">
            Team Members
          </dt>

          <dd class="text-4xl font-extrabold text-primary md:text-5xl">20 +</dd>
        </div>

        <div class="flex flex-col  px-4 py-8 text-left">
          <dt class=" mt-2 order-last text-lg font-medium text-white">
            TProject Completed
          </dt>

          <dd class="text-4xl font-extrabold text-primary md:text-5xl">
            100 +
          </dd>
        </div>

        <div class="flex flex-col  px-4 py-8 text-left">
          <dt class="mt-2 order-last text-lg font-medium text-white">
            Revanue generated
          </dt>

          <dd class="text-4xl font-extrabold text-primary md:text-5xl">
            85M +
          </dd>
        </div>
      </dl>
    </div>
  );
};

export default StatComponent;
