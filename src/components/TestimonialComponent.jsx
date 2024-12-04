import React from "react";

const TestimonialComponent = () => {
  return (
    <section class="bg-white">
      <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 class=" text-3xl  font-bold tracking-tight text-gray-900 sm:text-4xl sm:ps-32 ">
          What our clients say about us
        </h2>

        <div class="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
          <blockquote class="rounded-lg p-6 shadow-sm sm:p-8">
            <div className="flex items-start gap-4">
              <img className="w-7" src="fa-quote-left.svg" alt="" />
              <p class=" text-gray-700">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
                sit rerum incidunt, a consequuntur recusandae ab saepe illo est
                quia obcaecati neque quibusdam eius accusamus error officiis
                atque voluptates magnam!
              </p>
            </div>

            <div class="flex items-center gap-4 mt-5 ps-10">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                class="size-14 rounded-full object-cover"
              />

              <div>
                <p class="mt-0.5 text-lg font-bold text-gray-900">Paul Starr</p>
                <p class="mt-0.5 text-sm font-medium text-gray-500">
                  Product Manager
                </p>
              </div>
            </div>
          </blockquote>
          <blockquote class="rounded-lg p-6 shadow-sm sm:p-8">
            <div className="flex items-start gap-4">
              <img className="w-7" src="fa-quote-left.svg" alt="" />
              <p class=" text-gray-700">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
                sit rerum incidunt, a consequuntur recusandae ab saepe illo est
                quia obcaecati neque quibusdam eius accusamus error officiis
                atque voluptates magnam!
              </p>
            </div>

            <div class="flex items-center gap-4 mt-5 ps-10">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                class="size-14 rounded-full object-cover"
              />

              <div>
                <p class="mt-0.5 text-lg font-bold text-gray-900">Paul Starr</p>
                <p class="mt-0.5 text-sm font-medium text-gray-500">
                  Product Manager
                </p>
              </div>
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default TestimonialComponent;
