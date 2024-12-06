import React from "react";
import { Link } from "react-router-dom";
const ItemListComponent = ({ blog }) => {
  return (
    <>
      <article className="overflow-hidden bg-white border border-gray-100 rounded-lg shadow-sm">
        <img
          alt={blog.title}
          src={blog.banner}
          className="object-cover w-full px-5 pt-5 h-80"
        />

        <div className="p-4 sm:p-6">
          <Link to={"/blog/" + blog.slug}>
            <h3 className="font-sans text-lg font-extrabold text-gray-900">
              {blog.title}
            </h3>
          </Link>

          <p className="mt-2 text-gray-500 line-clamp-3 text-sm/relaxed">
            {blog.content}
          </p>

          <Link
            to={"../blog/" + blog.slug}
            className="inline-flex items-center gap-1 mt-4 text-sm font-bold group"
          >
            Read More
            <span
              aria-hidden="true"
              className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
            >
              &rarr;
            </span>
          </Link>
        </div>
      </article>
    </>
  );
};

export default ItemListComponent;
