import React from "react";

const OurProcessComponent = () => {
  return (
    <section>
      <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div class="mt-8 grid grid-cols-1  gap-4 md:grid-cols-2 md:gap-8">
          <div className="flex justify-center items-center pl-20">
            <img className="w-full" src="../ourProcess.png" alt="" />
          </div>
          <div className="flex flex-col justify-left items-center md:mt-20">
            <h3 className="font-bold text-3xl text-gray-900">
              A simple, yet <br /> effective three step <br /> process.
            </h3>
            <div class="flex gap-4 mt-5 ">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                class="size-14 rounded-full object-cover"
              />

              <div>
                <p class="mt-0.5 text-lg font-bold text-gray-900">
                  Idea Initiation
                </p>
                <p class="mt-0.5 max-w-60 text-sm font-medium text-gray-500">
                  For a start, we’ll uncover what makes you stand apart and
                  creatively position your brand and business.
                </p>
              </div>
            </div>
            <div class="flex  gap-4 mt-5 ">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                class="size-14 rounded-full object-cover"
              />

              <div>
                <p class="mt-0.5 text-lg font-bold text-gray-900">
                  Idea Initiation
                </p>
                <p class="mt-0.5 max-w-60 text-sm font-medium text-gray-500">
                  For a start, we’ll uncover what makes you stand apart and
                  creatively position your brand and business.
                </p>
              </div>
            </div>
            <div class="flex  gap-4 mt-5 ">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                class="size-14 rounded-full object-cover"
              />

              <div>
                <p class="mt-0.5 text-lg font-bold text-gray-900">
                  Idea Initiation
                </p>
                <p class="mt-0.5 max-w-60 text-sm font-medium text-gray-500">
                  For a start, we’ll uncover what makes you stand apart and
                  creatively position your brand and business.
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="font-normal text-center mt-32">
          Wherever you are in your journey, we’d love to hear from you.
          <span className="font-bold"> Book a free call</span>
        </p>
      </div>
    </section>
  );
};

export default OurProcessComponent;
