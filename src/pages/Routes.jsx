import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Dashboard = React.lazy(() => import("./Dashboard/Dashboard"));
const View = React.lazy(() => import("./Dashboard/View"));
const Edit = React.lazy(() => import("./Dashboard/Edit"));
const AddProduct = React.lazy(() => import("./Dashboard/AddProduct"));
const AddToCart = React.lazy(() => import("./Dashboard/AddToCart"));
const PurchaseProducts = React.lazy(() =>
  import("../components/PurchaseProducts")
);
const Loader = React.lazy(() => import("../components/Loader"));
const Signin = React.lazy(() => import("./Authentication/Signin"));
const Signup = React.lazy(() => import("./Authentication/Signup"));
const ForgetPassword = React.lazy(() =>
  import("./Authentication/ForgetPassword")
);

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/signin" replace={true} />;
};

export default function Index() {
  const authState = useSelector((state) => state.auth);
  console.log("the auth state is ", authState);
  return (
    <Suspense fallback={Loader}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute isAuthenticated={authState.isLoggedIn}>
                <Dashboard />
              </PrivateRoute>
            }
          />

          <Route
            path="/view-product/:productId"
            element={
              <PrivateRoute isAuthenticated={authState.isLoggedIn}>
                <View />
              </PrivateRoute>
            }
          />

          <Route
            path="/wallet/:productId"
            element={
              <PrivateRoute isAuthenticated={authState.isLoggedIn}>
                <AddToCart />
              </PrivateRoute>
            }
          />

          <Route
            path="/edit-product/:productId"
            element={
              <PrivateRoute isAuthenticated={authState.isLoggedIn}>
                <Edit />
              </PrivateRoute>
            }
          />

          <Route
            path="/purchased-products"
            element={
              <PrivateRoute isAuthenticated={authState.isLoggedIn}>
                <PurchaseProducts />
              </PrivateRoute>
            }
          />

          <Route
            path="/add-product"
            element={
              <PrivateRoute isAuthenticated={authState.isLoggedIn}>
                <AddProduct />
              </PrivateRoute>
            }
          />

          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
