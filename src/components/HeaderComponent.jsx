import React from "react";

const HeaderComponent = ({ title, handsAll = false }) => {
  return (
    <>
      <section class="bg-yellow-400">
        <div class="relative mx-auto max-w-screen-xl px-4 py-30 lg:flex lg:h-screen lg:items-center">
          <div class="mx-auto max-w-3xl text-center">
            <h1 class="font-sansbold text-3xl font-extrabold mb-40 sm:text-7xl">
              {title}
            </h1>
          </div>

          {handsAll ? (
            <img
              className="absolute  bottom-0 left-1/2 -translate-x-1/2"
              src="../HandsAll.png"
              alt=""
            />
          ) : (
            <img
              className="absolute bottom-0 right-7 w-1/2"
              src="../Hands.png"
              alt=""
            />
          )}
        </div>
      </section>
    </>
  );
};

export default HeaderComponent;
