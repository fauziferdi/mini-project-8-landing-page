import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import DetailComponent from "../components/DetailComponent";
import AdsComponent from "../components/AdsComponent";
import FooterComponent from "../components/FooterComponent";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPortofolioDetail } from "../redux/slices/PortofolioSlice";
import { useEffect } from "react";
import MouseComponent from "../components/MouseComponent";

const OurWorksDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { portofolio } = useSelector((state) => state.portofolio);

  useEffect(() => {
    dispatch(fetchPortofolioDetail(id));
  }, []);

  return (
    <>
      <HeaderComponent title={"We work with love."} handsAll={false} />
      <MouseComponent />
      <DetailComponent data={portofolio} />
      <AdsComponent />
      <FooterComponent />
    </>
  );
};

export default OurWorksDetailPage;
