import React from "react";
import HeaderComponent from "../components/HeaderComponent";

import FooterComponent from "../components/FooterComponent";
import AdsComponent from "../components/AdsComponent";
import BlogListComponent from "../components/BlogListComponent";
import MouseComponent from "../components/MouseComponent";
import PropTypes from "prop-types";

const BlogListPage = () => {
  return (
    <>
      <HeaderComponent title={"We write article with love."} handsAll={false} />
      <MouseComponent />
      <BlogListComponent />
      <AdsComponent />
      <FooterComponent />
    </>
  );
};

export default BlogListPage;

HeaderComponent.propTypes = {
  title: PropTypes.string.isRequired,
  handsAll: PropTypes.bool.isRequired,
};
