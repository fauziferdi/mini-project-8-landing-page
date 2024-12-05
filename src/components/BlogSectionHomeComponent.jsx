import React from "react";
import ItemListComponent from "./ItemListComponent";

const BlogSectionHomeComponent = () => {
  return (
    <section class="bg-white">
      <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 class=" text-3xl  font-bold tracking-tight text-gray-900 sm:text-4xl sm:ps-32 ">
          Check out our interesting articles
        </h2>

        <div class="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 md:px-16">
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
      </div>
    </section>
  );
};

export default BlogSectionHomeComponent;
