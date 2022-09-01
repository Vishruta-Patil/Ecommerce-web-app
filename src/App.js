import { Header } from "components/header";
import { Router } from "components/routes";
import "./App.css";
import "styles/index.css";
import { useEffect } from "react";
import { useProduct } from "context/productContext";
import { GET_ALL_PRODUCTS } from "reducer/productConstant";
import { ProductData } from "data/productData";

function App() {
  const { productDispatch } = useProduct();
  useEffect(() => {
    productDispatch({ type: GET_ALL_PRODUCTS, payload: ProductData });
  }, []);
  return (
    <div className="App">
      <Header />
      <Router />
    </div>
  );
}

export default App;
