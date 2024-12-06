import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import FormContactUs from "../components/FormContactUs";
import StatComponent from "../components/StatComponent";
import BrandComponent from "../components/BrandComponent";
import AdsComponent from "../components/AdsComponent";
import FooterComponent from "../components/FooterComponent";
import MouseComponent from "../components/MouseComponent";

const ContactUsPage = () => {
  return (
    <>
      <HeaderComponent
        title={"We would love to hear from you."}
        handsAll={false}
      />
      <MouseComponent />
      <FormContactUs />
      <StatComponent />
      <BrandComponent />
      <AdsComponent />
      <FooterComponent />
    </>
  );
};

export default ContactUsPage;
