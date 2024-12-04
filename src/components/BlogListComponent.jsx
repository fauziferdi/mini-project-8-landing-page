import React from "react";

import ItemListComponent from "./ItemListComponent";

const BlogListComponent = () => {
  return (
    <>
      <div className="px-5 py-10 sm:px-16">
        <h2 className="font-sans font-extrabold text-4xl pb-10">
          Check out our interesting articles
        </h2>
        <div class="grid grid-cols-1 gap-4  lg:grid-cols-3 lg:gap-8 ">
          <div class=" rounded-lg bg-gray-200">
            <ItemListComponent />
          </div>
          <div class=" rounded-lg bg-gray-200">
            <ItemListComponent />
          </div>
          <div class=" rounded-lg bg-gray-200">
            <ItemListComponent />
          </div>
          <div class=" rounded-lg bg-gray-200">
            <ItemListComponent />
          </div>
          <div class=" rounded-lg bg-gray-200">
            <ItemListComponent />
          </div>
          <div class=" rounded-lg bg-gray-200">
            <ItemListComponent />
          </div>
        </div>
        <div className="flex justify-center mt-10 mb-32">
          <button class="inline-block  border border-black bg-black px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-black focus:outline-none focus:ring active:text-black">
            Load More
          </button>
        </div>
      </div>
    </>
  );
};

export default BlogListComponent;
