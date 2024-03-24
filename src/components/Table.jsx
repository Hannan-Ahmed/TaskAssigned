import { GrView } from "react-icons/gr";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { Suspense, useState } from "react";
import Backdrop from "./Backdrop";
import { useProductContext } from "../context/ProductContext";
import { toast } from "react-toastify";
import Loader from "./Loader";

const Table = () => {
  const { products, deleteProduct } = useProductContext();
  const [showDialog, setShowDialog] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleDelete = (id) => {
    setShowDialog(true);
    setSelectedProductId(id);
  };

  const confirmDelete = () => {
    deleteProduct(selectedProductId);
    setShowDialog(false);
    toast.success("Deleted Product Successfully!", { autoClose: 1000 });
  };

  const cancelDelete = () => {
    setShowDialog(false);
  };

  return (
    <Suspense fallback={<Loader />}>
    <div>
      {showDialog && (
        <Backdrop>
          <div className="bg-white p-6 rounded-lg shadow-lg z-50">
            <h2 className="text-xl font-semibold mb-4">Confirm Action</h2>
            <p className="text-gray-700">
              Are you sure you want to delete this product?
            </p>
            <div className="mt-6 flex justify-end gap-2">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={confirmDelete}
              >
                Proceed
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={cancelDelete}
              >
                Cancel
              </button>
            </div>
          </div>
        </Backdrop>
      )}
      <div className="flex flex-col">
      <div className="my-3 text-3xl text-gray-700 font-semibold">Dashboard</div>
       
        <div>
          <Link
            to="/add-product"
            className="float-right bg-gray-600 px-3 py-3 text-white mr-3 rounded-lg my-3 text-sm font-semibold hover:bg-gray-500"
          >
            Add New Product
          </Link>
        </div>
        <div className="relative overflow-x-auto shadow-lg sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Color
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {product.name}
                  </th>
                  <td className="px-6 py-4">{product.color}</td>
                  <td className="px-6 py-4">{product.category}</td>
                  <td className="px-6 py-4">{product.price}</td>
                  <td
                    className="px-6 py-4 flex gap-3 "
                    style={{ fontSize: "1.2em" }}
                  >
                    <Link
                      to={`/view-product/${product.id}`}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      <GrView style={{ color: "white" }} />
                    </Link>
                    <Link
                      to={`/edit-product/${product.id}`}
                      className="font-medium text-yellow-600 dark:text-yellow-500 hover:underline"
                    >
                      <FaEdit style={{ color: "white" }} />
                    </Link>
                    <a
                      className="font-medium text-red-600 dark:text-red-500 hover:underline"
                      onClick={() => handleDelete(product.id)}
                    >
                      <MdDelete style={{ color: "white" }} />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </Suspense>
  );
};

export default Table;
