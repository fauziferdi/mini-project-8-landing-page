import React, { useEffect } from "react";
import ItemListComponent from "./ItemListComponent";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllBlog } from "../redux/slices/BlogSlice";

const BlogListComponent = () => {
  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(fetchAllBlog());
  }, []);

  return (
    <>
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
        <div className="px-5 py-10 sm:px-16">
          <h2 className="pb-10 font-sans text-4xl font-extrabold">
            Check out our interesting articles
          </h2>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 ">
            {blogs.map((blog, index) => (
              <div key={index + 1} className="bg-gray-200 rounded-lg ">
                <ItemListComponent blog={blog} />
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10 mb-32">
            <button className="inline-block px-12 py-3 text-sm font-medium text-white bg-black border border-black hover:bg-transparent hover:text-black focus:outline-none focus:ring active:text-black">
              Load More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogListComponent;
