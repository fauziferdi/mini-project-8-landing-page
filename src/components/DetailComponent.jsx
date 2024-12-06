import React from "react";

const DetailComponent = ({ data }) => {
  return (
    <>
      <section>
        <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-24 ">
          <div class="space-y-4 md:space-y-8">
            <div>
              <img
                src={data.banner}
                class="mx-auto d-block w-full h-80 object-cover mb-5 "
                alt=""
              />
              <h1 class="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                {data.title}
              </h1>
              <p class="mt-4 text-gray-700">
                Lorem Ipsumis simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <h2 class="text-2xl font-extrabold text-gray-900 sm:text-3xl mt-5">
                Why do we use it?
              </h2>
              <p class="mt-4 text-gray-700">
                Lorem Ipsumis simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <h2 class="text-2xl font-extrabold text-gray-900 sm:text-3xl mt-5">
                Where can I get some?
              </h2>
              <p class="mt-4 text-gray-700">
                Lorem Ipsumis simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <h2 class="text-2xl font-extrabold text-gray-900 sm:text-3xl mt-5">
                Why do we use it?
              </h2>
              <p class="mt-4 text-gray-700">
                Lorem Ipsumis simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <h2 class="text-2xl font-extrabold text-gray-900 sm:text-3xl mt-5">
                Where can I get some?
              </h2>
              <p class="mt-4 text-gray-700">
                Lorem Ipsumis simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailComponent;
