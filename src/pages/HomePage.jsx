import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import MainInfoComponent from "../components/MainInfoComponent";
import FooterComponent from "../components/FooterComponent";
import AdsComponent from "../components/AdsComponent";
import TestimonialComponent from "../components/TestimonialComponent";

const HomePage = () => {
  return (
    <>
      <HeaderComponent title={"home"} />
      <MainInfoComponent />
      <hr />
      <TestimonialComponent />
      <AdsComponent />
      <FooterComponent />
    </>
  );
};

export default HomePage;
