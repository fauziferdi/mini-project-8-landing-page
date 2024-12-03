import React from "react";
import HeaderComponent from "../components/HeaderComponent";

import FooterComponent from "../components/FooterComponent";
import AdsComponent from "../components/AdsComponent";
import BlogListComponent from "../components/BlogListComponent";

const BlogListPage = () => {
  return (
    <>
      <HeaderComponent />
      <BlogListComponent />
      <AdsComponent />
      <FooterComponent />
    </>
  );
};

export default BlogListPage;
