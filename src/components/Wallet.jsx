import { Suspense, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";
import { useDispatch } from "react-redux";
import { addPurchasedProduct } from "../redux/actions/addProduct.action";
import Loader from "./Loader";

const Wallet = () => {
  const [balance, setBalance] = useState(0);
  const [topUpAmount, setTopUpAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const dispatch = useDispatch();

  const { productId } = useParams();
  const { products } = useProductContext();
  const product = products.find(
    (product) => product.id === parseInt(productId)
  );
  console.log("Wallaet product is :", product);
  const handleTopUp = () => {
    const amount = parseFloat(topUpAmount);
    if (!isNaN(amount) && amount > 0) {
      setBalance(balance + amount);
      setTopUpAmount("");
    }
  };

  const handleWithdraw = () => {
    const amount = parseFloat(withdrawAmount);
    if (!isNaN(amount) && amount > 0 && balance >= amount) {
      setBalance(balance - amount);
      setWithdrawAmount("");
    }
  };
  const amount = useMemo(() => {
    return product ? parseFloat(product.price.replace("$", "")) : 0;
  }, [product]);
  console.log("amount is ", amount);
  const makeTransaction = (amount) => {
    if (balance >= amount) {
      setBalance(balance - amount);
      dispatch(addPurchasedProduct(product));
      console.log(`Transaction successful: $${amount} deducted from wallet`);
    } else {
      console.log("Insufficient balance");
    }
  };

  return (
    <>
    <Suspense fallback={<Loader />}>
      <div className="text-center text-2xl font-semibold text-gray-700 my-4">
        Connect Your Wallet And get Your Item.
      </div>
      <div className="bg-gray-700 p-8 rounded-lg shadow-lg text-white h-full">
        <h2 className="text-2xl font-bold mb-4">Wallet Balance: ${balance}</h2>
        <div className="flex items-center justify-between">
          <div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Top Up</h3>
              <input
                type="number"
                value={topUpAmount}
                onChange={(e) => setTopUpAmount(e.target.value)}
                className="mt-2 p-2 rounded-lg bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter amount"
              />
              <button
                onClick={handleTopUp}
                className="mt-2 ml-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Top Up
              </button>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Withdraw</h3>
              <input
                type="number"
                value={withdrawAmount}
                onChange={(e) => setWithdrawAmount(e.target.value)}
                className="mt-2 p-2 rounded-lg bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter amount"
              />
              <button
                onClick={handleWithdraw}
                className="mt-2 ml-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Withdraw
              </button>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Make Transaction</h3>
              <button
                onClick={() => makeTransaction(amount)}
                className="mt-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg mr-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Purchase Product ({amount})
              </button>
            </div>
          </div>

          <div>
            <div className="bg-gray-800 p-3 rounded-lg shadow-lg text-white ">
              <h2 className="text-2xl font-bold mb-4">Product Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Product Image */}
                <div className="md:col-span-1">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="md:col-span-1">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-sm text-gray-400">
                    Category: {product.category}
                  </p>
                  <p className="text-sm text-gray-400">
                    Color: {product.color}
                  </p>
                  <p className="text-sm text-gray-400">
                    Description: {product.description}
                  </p>
                  <p className="text-lg font-semibold mt-2">{product.price}</p>
                  <p className="text-sm text-gray-400">
                    {product.rating} Rating
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Suspense>
    </>
  );
};

export default Wallet;
