import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import AdsComponent from "../components/AdsComponent";
import DetailComponent from "../components/DetailComponent";

const BlogDetailPage = () => {
  return (
    <>
      <HeaderComponent title={"Read best articles from us."} />
      <DetailComponent />
      <AdsComponent />
      <FooterComponent />
    </>
  );
};

export default BlogDetailPage;
