import React, { Suspense } from "react";
import { connect } from "react-redux";
import Loader from "./Loader";
const Sidebar = React.lazy(() => import("./Sidebar"));

// eslint-disable-next-line react/prop-types
const ProductsTable = ({ purchasedProducts }) => {
  return (
    <Suspense fallback={<Loader />}>
      <div>
        <h2 className="text-center font-semibold text-gray-700 my-7 text-2xl">
          Purchased Products
        </h2>
        <div className="m-2 relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-16 py-3">
                  <span className="sr-only">Image</span>
                </th>
                <th scope="col" className="px-6 py-3">
                  Product
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
              </tr>
            </thead>
            <tbody>
              {/* eslint-disable-next-line react/prop-types */}
              {purchasedProducts.map((product) => (
                <tr
                  key={product.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="p-4">
                    <img
                      src={product.imageUrl}
                      className="rounded-md w-16 md:w-32 max-w-full max-h-full"
                      alt={product.image}
                    />
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {product.name}
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {product.description}
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    ${product.price}
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {product.category}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Suspense>
  );
};

const mapStateToProps = (state) => ({
  purchasedProducts: state.product.purchasedProducts,
});

const ConnectedProductsTable = connect(mapStateToProps)(ProductsTable);

const PurchaseProducts = () => {
  return <Sidebar purchasComponent={ConnectedProductsTable} />;
};

export default PurchaseProducts;
