import React from "react";

import ItemListComponent from "../ItemListComponent";

const BlogListComponent2 = () => {
  return (
    <>
      <div className="container tw-pt-20">
        <div className="row">
          <div className="col-md-4">
            <ItemListComponent />
          </div>
          <div className="col-md-4">
            <ItemListComponent />
          </div>
          <div className="col-md-4">
            <ItemListComponent />
          </div>
        </div>
        <div className="row tw-pt-5">
          <div className="col-md-4">
            <ItemListComponent />
          </div>
          <div className="col-md-4">
            <ItemListComponent />
          </div>
          <div className="col-md-4">
            <ItemListComponent />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogListComponent2;
