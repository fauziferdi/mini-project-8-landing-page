import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import DetailComponent from "../components/DetailComponent";
import AdsComponent from "../components/AdsComponent";
import FooterComponent from "../components/FooterComponent";

const OurWorksDetailPage = () => {
  return (
    <>
      <HeaderComponent title={"We work with love."} />
      <DetailComponent />
      <AdsComponent />
      <FooterComponent />
    </>
  );
};

export default OurWorksDetailPage;
