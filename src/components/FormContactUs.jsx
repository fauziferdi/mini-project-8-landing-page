import React from "react";

const FormContactUs = () => {
  return (
    <>
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 mx-10 mt-10 lg:grid-cols-2 lg:gap-8">
          <div className="flex items-center justify-center">
            <img className="w-2/3" src="../sideImageContact.png" alt="" />
          </div>
          <div className="">
            <h1 className="my-5 font-sans text-2xl font-extrabold text-right">
              We'd love to hear <br /> from you
            </h1>
            <form>
              <input
                type="text"
                id="name"
                placeholder="Name*"
                className="w-full my-2 border-gray-400 shadow-sm sm:text-sm"
                required
              />
              <input
                type="email"
                id="email"
                placeholder="Email*"
                className="w-full my-2 border-gray-400 shadow-sm sm:text-sm"
                required
              />
              <input
                type="text"
                id="url"
                placeholder="Website Url*"
                className="w-full my-2 border-gray-400 shadow-sm sm:text-sm"
                required
              />
              <textarea
                type="text"
                rows="4"
                id="project"
                placeholder="Project Detail*"
                className="w-full my-2 border-gray-400 shadow-sm sm:text-sm"
                required
              />
              <button className="w-full px-4 py-2 text-white bg-black rounded hover:bg-gray-800 sm:text-sm">
                Send Proposal
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormContactUs;
