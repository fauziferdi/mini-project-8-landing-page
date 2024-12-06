import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import AboutUsComponent from "../components/AboutUsComponent";
import ListMemberComponent from "../components/ListMemberComponent";
import StatComponent from "../components/StatComponent";
import BrandComponent from "../components/BrandComponent";
import FooterComponent from "../components/FooterComponent";
import AdsComponent from "../components/AdsComponent";
import PropTypes from "prop-types";

const AboutUsPage = () => {
  return (
    <>
      <HeaderComponent
        title={"We specialize in problem solving."}
        handsAll={true}
      />
      <AboutUsComponent />
      <ListMemberComponent />
      <StatComponent />
      <BrandComponent />
      <AdsComponent />
      <FooterComponent />
    </>
  );
};

export default AboutUsPage;

HeaderComponent.propTypes = {
  title: PropTypes.string.isRequired,
  handsAll: PropTypes.bool.isRequired,
};
