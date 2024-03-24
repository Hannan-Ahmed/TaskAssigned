import React, { Suspense } from "react";
import Loader from "../../components/Loader";
const Sidebar = React.lazy(() => import("../../components/Sidebar"));
const EditForm = React.lazy(() => import("../../components/EditForm"));

const Edit = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Sidebar editComponent={EditForm} />
    </Suspense>
  );
};

export default Edit;
