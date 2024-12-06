import React from "react";
import ItemPortofolioComponent from "./ItemPortofolioComponent";
import { useDispatch, useSelector } from "react-redux";
import { fetchPortofolio } from "../redux/slices/PortofolioSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const PastWorksComponent = () => {
  const dispatch = useDispatch();
  const { portofolios } = useSelector((state) => state.portofolio);

  useEffect(() => {
    dispatch(fetchPortofolio());
  }, []);

  return (
    <>
      <section className="bg-white">
        <div className="max-w-screen-xl px-4 py-10 mx-auto sm:px-6 lg:px-8 lg:py-16">
          <div className="flex justify-between">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:ps-32 sm:p">
              Our Work So Far
            </h2>
            <div className="flex items-center md:gap-12">
              <ul className="flex items-center gap-6 tex">
                <li>
                  <Link
                    className="font-bold text-black underline transition hover:text-gray-500/75"
                    to="#"
                  >
                    All
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    to="#"
                  >
                    BRANDING
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    to="#"
                  >
                    ILUSTRATION
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    to="#"
                  >
                    PRODUCT DESIGN
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-4 md:gap-2 ">
            {portofolios.slice(0, 8).map((portofolio, index) => (
              <div key={index + 1} className="bg-gray-200 rounded-lg ">
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
