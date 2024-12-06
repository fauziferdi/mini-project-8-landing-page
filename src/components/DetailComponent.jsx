import React from "react";

const DetailComponent = ({ data }) => {
  return (
    <>
      <section>
        <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-24 ">
          <div className="space-y-4 md:space-y-8">
            <div>
              <img
                src={data.banner}
                className="object-cover w-full mx-auto mb-5 d-block h-80 "
                alt=""
              />
              <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                {data.title}
              </h1>
              <p className="mt-4 text-gray-700">
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
              <h2 className="mt-5 text-2xl font-extrabold text-gray-900 sm:text-3xl">
                Why do we use it?
              </h2>
              <p className="mt-4 text-gray-700">
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
              <h2 className="mt-5 text-2xl font-extrabold text-gray-900 sm:text-3xl">
                Where can I get some?
              </h2>
              <p className="mt-4 text-gray-700">
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
              <h2 className="mt-5 text-2xl font-extrabold text-gray-900 sm:text-3xl">
                Why do we use it?
              </h2>
              <p className="mt-4 text-gray-700">
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
              <h2 className="mt-5 text-2xl font-extrabold text-gray-900 sm:text-3xl">
                Where can I get some?
              </h2>
              <p className="mt-4 text-gray-700">
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
