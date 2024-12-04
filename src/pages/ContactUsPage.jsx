import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import FormContactUs from "../components/FormContactUs";
import MapComponent from "../components/MapComponent";
import StatComponent from "../components/StatComponent";
import BrandComponent from "../components/BrandComponent";
import AdsComponent from "../components/AdsComponent";
import FooterComponent from "../components/FooterComponent";

const ContactUsPage = () => {
  return (
    <>
      <HeaderComponent title={"We would love to hear from you."} />
      <FormContactUs />
      <MapComponent />
      <StatComponent />
      <BrandComponent />
      <AdsComponent />
      <FooterComponent />
    </>
  );
};

export default ContactUsPage;
