import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
const ItemMemberComponent = ({ team }) => {
  return (
    <>
      <article class="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
        <img
          alt={team.name}
          src={team.photo}
          class="h-80 w-full object-cover px-5 pt-5"
        />

        <div class="p-4 sm:p-6">
          <h2 class="text-2xl font-sansbold font-extrabold text-gray-900">
            {team.name}
          </h2>
          <p class="mt-2 line-clamp-3 text-md/relaxed text-gray-500">Founder</p>

          <a
            href={team.linkedin_url}
            class="group mt-8 inline-flex items-center gap-1 text-sm font-bold  text-gray-500 me-5 "
          >
            LINKEDIN
            <span
              aria-hidden="true"
              class="block transition-all group-hover:ms-0.5 rtl:rotate-180"
            >
              <FiArrowUpRight />
            </span>
          </a>

          <a
            href={team.ig_url}
            class="group mt-4 inline-flex items-center gap-1 text-sm font-bold text-gray-500 "
          >
            INSTAGRAM
            <span
              aria-hidden="true"
              class="block transition-all group-hover:ms-0.5 rtl:rotate-180"
            >
              <FiArrowUpRight />
            </span>
          </a>
        </div>
      </article>
    </>
  );
};

export default ItemMemberComponent;
