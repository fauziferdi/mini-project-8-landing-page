import React from "react";
import ItemPortofolioComponent from "./ItemPortofolioComponent";
import { useDispatch, useSelector } from "react-redux";
import { fetchPortofolio } from "../redux/slices/PortofolioSlice";
import { useEffect } from "react";

const PastWorksComponent = () => {
  const dispatch = useDispatch();
  const { portofolios } = useSelector((state) => state.portofolio);

  useEffect(() => {
    dispatch(fetchPortofolio());
  }, []);

  return (
    <>
      <section class="bg-white">
        <div class="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
          <div className="flex justify-between">
            <h2 class=" text-3xl  font-bold tracking-tight text-gray-900 sm:text-4xl sm:ps-32 sm:p ">
              Our Work So Far
            </h2>
            <div class="flex items-center md:gap-12">
              <ul class="flex items-center gap-6 tex">
                <li>
                  <a
                    class="text-black font-bold underline transition hover:text-gray-500/75"
                    href="#"
                  >
                    All
                  </a>
                </li>

                <li>
                  <a
                    class="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    BRANDING
                  </a>
                </li>

                <li>
                  <a
                    class="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    ILUSTRATION
                  </a>
                </li>
                <li>
                  <a
                    class="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    PRODUCT DESIGN
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="mt-8 grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-2 ">
            {portofolios.slice(0, 8).map((portofolio, index) => (
              <div key={index + 1} class=" rounded-lg bg-gray-200">
                <ItemPortofolioComponent portofolio={portofolio} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PastWorksComponent;
