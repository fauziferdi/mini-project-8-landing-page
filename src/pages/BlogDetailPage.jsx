import React, { useEffect } from "react";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import AdsComponent from "../components/AdsComponent";
import DetailComponent from "../components/DetailComponent";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogDetail } from "../redux/slices/BlogSlice";
import MouseComponent from "../components/MouseComponent";
import PropTypes from "prop-types";

const BlogDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { blog, loading, error } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(fetchBlogDetail(id));
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <>
      <HeaderComponent title={"Read best articles from us."} handsAll={false} />
      <MouseComponent />
      <DetailComponent data={blog} />
      <AdsComponent />
      <FooterComponent />
    </>
  );
};

export default BlogDetailPage;

HeaderComponent.propTypes = {
  title: PropTypes.string.isRequired,
  handsAll: PropTypes.bool.isRequired,
};
