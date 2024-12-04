import React from "react";
import ItemPortofolioComponent from "./ItemPortofolioComponent";

const OurWorksListComponent = () => {
  return (
    <section class="bg-gray-50">
      <div class="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-28 lg:py-16 ">
        <div class="md:flex md:items-end md:justify-between">
          <div class="max-w-xl">
            <h2 class="text-4xl font-bold tracking-tight text-black sm:text-5xl">
              Featured Work
              <br /> <br /> <br /> <br />
            </h2>
          </div>
          <div class="max-w-xl text-right">
            <p class="mt-6 max-w-lg leading-relaxed font-semibold text-black">
              We are an award-winning creative & <br /> design agency committed
              to <br />
              excellence since forever.
            </p>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 lg:mt-12 ">
          <ItemPortofolioComponent />
          <ItemPortofolioComponent />
          <ItemPortofolioComponent />
          <ItemPortofolioComponent />
          <ItemPortofolioComponent />
          <ItemPortofolioComponent />
        </div>
      </div>
    </section>
  );
};

export default OurWorksListComponent;