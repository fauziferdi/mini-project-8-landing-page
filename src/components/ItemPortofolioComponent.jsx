import React from "react";

const ItemPortofolioComponent = () => {
  return (
    <>
      <a href="blog/1" class="group relative block bg-black ">
        <img
          alt=""
          src="../porto.png"
          class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
        />

        <div class="relative p-4 sm:p-6 lg:p-8">
          <div class="mt-32 sm:mt-48 lg:mt-64">
            <div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <h3 class="text-xl font-semibold tracking-tight text-center text-white">
                Portofolio Title
              </h3>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default ItemPortofolioComponent;
