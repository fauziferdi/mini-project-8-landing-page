import React from "react";
import HeaderComponent from "../components/HeaderComponent";

import FooterComponent from "../components/FooterComponent";
import AdsComponent from "../components/AdsComponent";
import BlogListComponent from "../components/BlogListComponent";

const BlogListPage = () => {
  return (
    <>
      <HeaderComponent title={"We write article with love."} />
      <BlogListComponent />
      <AdsComponent />
      <FooterComponent />
    </>
  );
};

export default BlogListPage;
