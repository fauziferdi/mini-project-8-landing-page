import React from "react";
import HeaderComponent from "../components/HeaderComponent";

import BrandComponent from "../components/BrandComponent";
import AdsComponent from "../components/AdsComponent";
import FooterComponent from "../components/FooterComponent";
import OurWorksListComponent from "../components/OurWorksListComponent";

const OurWorksListPage = () => {
  return (
    <>
      <HeaderComponent
        title={"The work we do, and the people we help."}
        handsAll={true}
      />
      <OurWorksListComponent />
      <BrandComponent />
      <AdsComponent />
      <FooterComponent />
    </>
  );
};

export default OurWorksListPage;
