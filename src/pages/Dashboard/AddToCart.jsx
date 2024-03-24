import React, { Suspense } from "react";
import Loader from "../../components/Loader";
const Sidebar = React.lazy(() => import("../../components/Sidebar"));
const Wallet = React.lazy(() => import("../../components/Wallet"));

const AddToCart = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Sidebar cartComponent={Wallet} />
    </Suspense>
  );
};

export default AddToCart;
