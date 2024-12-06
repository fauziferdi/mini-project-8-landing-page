import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
const ItemMemberComponent = ({ team }) => {
  return (
    <>
      <article className="overflow-hidden bg-white border border-gray-100 rounded-lg shadow-sm">
        <img
          alt={team.name}
          src={team.photo}
          className="object-cover w-full px-5 pt-5 h-80"
        />

        <div className="p-4 sm:p-6">
          <h2 className="text-2xl font-extrabold text-gray-900 font-sansbold">
            {team.name}
          </h2>
          <p className="mt-2 text-gray-500 line-clamp-3 text-md/relaxed">
            Founder
          </p>

          <Link
            to={team.linkedin_url}
            className="inline-flex items-center gap-1 mt-8 text-sm font-bold text-gray-500 group me-5 "
          >
            LINKEDIN
            <span
              aria-hidden="true"
              className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
            >
              <FiArrowUpRight />
            </span>
          </Link>

          <Link
            to={team.ig_url}
            className="inline-flex items-center gap-1 mt-4 text-sm font-bold text-gray-500 group "
          >
            INSTAGRAM
            <span
              aria-hidden="true"
              className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
            >
              <FiArrowUpRight />
            </span>
          </Link>
        </div>
      </article>
    </>
  );
};

export default ItemMemberComponent;
