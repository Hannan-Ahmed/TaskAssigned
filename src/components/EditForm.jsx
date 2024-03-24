import  { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";
import { toast } from "react-toastify";

const EditForm = () => {
  const navigate = useNavigate();

  const { productId } = useParams();
  const { products, updateProduct } = useProductContext();
  const [productData, setProductData] = useState({
    name: "",
    color: "",
    category: "",
    price: "",
    description: "",
  });

  useEffect(() => {
    const productToUpdate = products.find(
      (product) => product.id === parseInt(productId)
    );
    if (productToUpdate) {
      setProductData({
        name: productToUpdate.name,
        color: productToUpdate.color,
        category: productToUpdate.category,
        price: productToUpdate.price,
        description: productToUpdate.description,
      });
    }
  }, [products, productId]);
  console.log(productData);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct(productId, productData);
    toast.success("Product Updated Successfully!", { autoClose: 1000 });
    navigate("/");
  };

  const handleChange = (e) => {
    setProductData({
      ...productData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div>
      <div className="text-center my-7 text-2xl font-semibold text-gray-700">
        Edit Your Product Information
      </div>
      <form
        onSubmit={handleSubmit}
        className="max-w-sm mx-auto p-5 rounded-lg border-2 shadow-2xl bg-gray-700 border-gray-600"
      >
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Product Name
          </label>
          <input
            type="text"
            id="name"
            value={productData.name}
            onChange={handleChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="color"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Product Name
          </label>
          <input
            type="text"
            id="color"
            value={productData.color}
            onChange={handleChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Product Name
          </label>
          <input
            type="text"
            id="description"
            value={productData.description}
            onChange={handleChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="category"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Product Name
          </label>
          <input
            type="text"
            id="category"
            value={productData.category}
            onChange={handleChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="price"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Product Name
          </label>
          <input
            type="text"
            id="price"
            value={productData.price}
            onChange={handleChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditForm;
