import React from "react";
import ItemMemberComponent from "./ItemMemberComponent";

const ListMemberComponent = () => {
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-5 py-10 sm:px-10 sm:py-20">
        <h2 className="font-sans font-extrabold text-center text-4xl pb-10">
          Meet the heroes behind the magic
        </h2>
        <div class="grid grid-cols-1 gap-4  lg:grid-cols-3 lg:gap-8 ">
          <div class=" rounded-lg bg-gray-200">
            <ItemMemberComponent />
          </div>
          <div class=" rounded-lg bg-gray-200">
            <ItemMemberComponent />
          </div>
          <div class=" rounded-lg bg-gray-200">
            <ItemMemberComponent />
          </div>
        </div>
      </div>
    </>
  );
};

export default ListMemberComponent;
