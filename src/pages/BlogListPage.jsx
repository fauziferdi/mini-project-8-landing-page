import React from "react";
import HeaderComponent from "../components/HeaderComponent";

import FooterComponent from "../components/FooterComponent";
import AdsComponent from "../components/AdsComponent";
import BlogListComponent from "../components/BlogListComponent";
import MouseComponent from "../components/MouseComponent";

const BlogListPage = () => {
  return (
    <>
      <HeaderComponent title={"We write article with love."} />
      <MouseComponent />
      <BlogListComponent />
      <AdsComponent />
      <FooterComponent />
    </>
  );
};

export default BlogListPage;
