import React, { Suspense } from "react";
import AddForm from "../../components/AddForm";
import Loader from "../../components/Loader";
const Sidebar = React.lazy(() => import("../../components/Sidebar"));

const AddProduct = () => {
  return (
    <Suspense fallback={<Loader />}>
      <div>
        <Sidebar addComponent={AddForm} />
      </div>
    </Suspense>
  );
};

export default AddProduct;
