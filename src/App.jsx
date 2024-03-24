import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Routes from "./pages/Routes";
import { ProductProvider } from "./context/ProductContext";
import { WebSocketProvider } from "./context/WebSocketContext";
function App() {
  return (
    <>
      <WebSocketProvider>
        <ProductProvider>
          <Routes />
          <ToastContainer />
        </ProductProvider>
      </WebSocketProvider>
    </>
  );
}

export default App;
