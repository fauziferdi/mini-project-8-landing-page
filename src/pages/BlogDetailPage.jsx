import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import BlogDetailComponent from "../components/BlogDetailComponent";
import FooterComponent from "../components/FooterComponent";
import AdsComponent from "../components/AdsComponent";

const BlogDetailPage = () => {
  return (
    <>
      <HeaderComponent />
      <BlogDetailComponent />
      <AdsComponent />
      <FooterComponent />
    </>
  );
};

export default BlogDetailPage;
