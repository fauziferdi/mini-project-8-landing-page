import React from "react";
import { Link } from "react-router-dom";

const ItemPortofolioComponent = ({ portofolio }) => {
  return (
    <>
      <Link
        to={"/our-works/" + portofolio.id}
        className="relative block bg-black group "
      >
        <img
          alt={portofolio.title}
          src={portofolio.banner}
          className="absolute inset-0 object-cover w-full h-full transition-opacity opacity-75 group-hover:opacity-50"
        />

        <div className="relative p-4 sm:p-6 lg:p-8">
          <div className="mt-32 sm:mt-48 lg:mt-64">
            <div className="transition-all transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
              <h3 className="text-xl font-semibold tracking-tight text-center text-white">
                {portofolio.title}
              </h3>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ItemPortofolioComponent;
