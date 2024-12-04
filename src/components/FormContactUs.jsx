import React from "react";

const FormContactUs = () => {
  return (
    <>
      <div class="grid grid-cols-1 gap-4 mt-10 mx-10 lg:grid-cols-2 lg:gap-8">
        <div class="flex justify-center items-center">
          <img className="w-2/3" src="../sideImageContact.png" alt="" />
        </div>
        <div class="">
          <h1 className="text-2xl font-sans font-extrabold text-right my-5">
            We'd love to hear <br /> from you
          </h1>
          <form>
            <input
              type="text"
              id="name"
              placeholder="Name*"
              class="my-2 w-full border-gray-400 shadow-sm sm:text-sm"
              required
            />
            <input
              type="email"
              id="email"
              placeholder="Email*"
              class="my-2 w-full border-gray-400 shadow-sm sm:text-sm"
              required
            />
            <input
              type="text"
              id="url"
              placeholder="Website Url*"
              class="my-2 w-full border-gray-400 shadow-sm sm:text-sm"
              required
            />
            <textarea
              type="text"
              rows="4"
              id="project"
              placeholder="Project Detail*"
              class="my-2 w-full border-gray-400 shadow-sm sm:text-sm"
              required
            />
            <button class="bg-black hover:bg-gray-800 text-white  py-2 px-4 rounded w-full sm:text-sm">
              Send Proposal
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormContactUs;
