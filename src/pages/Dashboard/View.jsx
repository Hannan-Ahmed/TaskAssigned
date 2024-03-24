import React, { Suspense } from "react";
import Loader from "../../components/Loader";
const Sidebar = React.lazy(() => import("../../components/Sidebar"));
const ViewProduct = React.lazy(() => import("../../components/ViewProduct"));

const View = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Sidebar productComponent={ViewProduct} />
    </Suspense>
  );
};

export default View;
