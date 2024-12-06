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
    <section className="bg-white">
      <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8 lg:py-16">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900  sm:text-4xl sm:ps-32">
          Check out our interesting articles
        </h2>

        <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-3 md:gap-8 md:px-16">
          {blogs.slice(0, 3).map((blog, index) => (
            <div key={index + 1} className="bg-gray-200 rounded-lg ">
              <ItemListComponent blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSectionHomeComponent;
