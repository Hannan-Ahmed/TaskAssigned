import React, { Suspense } from "react";
import Loader from "../../components/Loader";
const Sidebar = React.lazy(() => import("../../components/Sidebar"));
const Table = React.lazy(() => import("../../components/Table"));

const Dashboard = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Sidebar tableComponent={Table} />
    </Suspense>
  );
};

export default Dashboard;
