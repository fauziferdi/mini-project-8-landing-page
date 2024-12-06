import React from "react";
const ItemListComponent = ({ blog }) => {
  return (
    <>
      <article class="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
        <img
          alt={blog.title}
          src={blog.banner}
          class="h-80 w-full object-cover px-5 pt-5"
        />

        <div class="p-4 sm:p-6">
          <a href={"/blog/" + blog.slug}>
            <h3 class="text-lg font-sans font-extrabold text-gray-900">
              {blog.title}
            </h3>
          </a>

          <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            {blog.content}
          </p>

          <a
            href="#"
            class="group mt-4 inline-flex items-center gap-1 text-sm font-bold"
          >
            Read More
            <span
              aria-hidden="true"
              class="block transition-all group-hover:ms-0.5 rtl:rotate-180"
            >
              &rarr;
            </span>
          </a>
        </div>
      </article>
    </>
  );
};

export default ItemListComponent;
