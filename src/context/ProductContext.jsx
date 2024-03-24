import { createContext, useContext, useState } from "react";
import productData from "../utils/data";

const ProductContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useProductContext = () => useContext(ProductContext);

// eslint-disable-next-line react/prop-types
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(productData);

  const addProduct = (newProduct) => {
    newProduct.id = Math.floor(Math.random() * 1000);
    setProducts([...products, newProduct]);
  };

  const deleteProduct = (deletedProductId) => {
    setProducts((prevProducts) => {
      return prevProducts.filter((product) => product.id !== deletedProductId);
    });
  };

  const updateProduct = (productId, newData) => {
    setProducts((prevProducts) => {
      return prevProducts.map((product) => {
        if (product.id === parseInt(productId)) {
          return { ...product, ...newData };
        }
        return product;
      });
    });
  };

  return (
    <ProductContext.Provider
      value={{ products, addProduct, updateProduct, deleteProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};
