import React from "react";
import ItemPortofolioComponent from "./ItemPortofolioComponent";
import { useDispatch, useSelector } from "react-redux";
import { fetchPortofolio } from "../redux/slices/PortofolioSlice";
import { useEffect } from "react";

const OurWorksListComponent = () => {
  const dispatch = useDispatch();
  const { portofolios } = useSelector((state) => state.portofolio);

  useEffect(() => {
    dispatch(fetchPortofolio());
  }, []);
  return (
    <section className="bg-gray-50">
      <div className="px-4 py-12 mx-auto max-w-screen-2xl sm:px-6 lg:px-28 lg:py-16 ">
        <div className="md:flex md:items-end md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">
              Featured Work
              <br /> <br /> <br /> <br />
            </h2>
          </div>
          <div className="max-w-xl text-right">
            <p className="max-w-lg mt-6 font-semibold leading-relaxed text-black">
              We are an award-winning creative & <br /> design agency committed
              to <br />
              excellence since forever.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 lg:mt-12 ">
          {portofolios.map((portofolio, index) => (
            <div key={index + 1}>
              <ItemPortofolioComponent portofolio={portofolio} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWorksListComponent;
