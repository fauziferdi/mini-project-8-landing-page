import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import MainInfoComponent from "../components/MainInfoComponent";
import FooterComponent from "../components/FooterComponent";
import AdsComponent from "../components/AdsComponent";
import TestimonialComponent from "../components/TestimonialComponent";
import BlogSectionHomeComponent from "../components/BlogSectionHomeComponent";
import BrandComponent from "../components/BrandComponent";
import OurProcessComponent from "../components/OurProcessComponent";
import PastWorksComponent from "../components/PastWorksComponent";
import PropTypes from "prop-types";

const HomePage = () => {
  return (
    <>
      <HeaderComponent
        title={"Let’s create something great together."}
        handsAll={true}
      />
      <MainInfoComponent />
      <hr />
      <PastWorksComponent />
      <OurProcessComponent />
      <TestimonialComponent />
      <BrandComponent home={true} />
      <BlogSectionHomeComponent />
      <AdsComponent />
      <FooterComponent />
    </>
  );
};

export default HomePage;

HeaderComponent.propTypes = {
  title: PropTypes.string.isRequired,
  handsAll: PropTypes.bool.isRequired,
  home: PropTypes.bool,
};
