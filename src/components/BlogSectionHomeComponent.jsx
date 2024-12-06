import React from "react";
import ItemListComponent from "./ItemListComponent";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllBlog } from "../redux/slices/BlogSlice";
import { useEffect } from "react";

const BlogSectionHomeComponent = () => {
  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(fetchAllBlog());
  }, []);

  return (
    <section class="bg-white">
      <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 class=" text-3xl  font-bold tracking-tight text-gray-900 sm:text-4xl sm:ps-32 ">
          Check out our interesting articles
        </h2>

        <div class="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 md:px-16">
          {blogs.slice(0, 3).map((blog, index) => (
            <div key={index + 1} class=" rounded-lg bg-gray-200">
              <ItemListComponent blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSectionHomeComponent;
