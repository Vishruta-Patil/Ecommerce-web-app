import { productReducer } from "reducer/productReducer";
import { createContext, useContext, useReducer } from "react";
import {
  composeFunc,
  filterByPrice,
  filterByTemplate,
  filterByType,
} from "utils/filterHelper";

const ProductContext = createContext();
const useProduct = () => useContext(ProductContext);

const ProductProvider = ({ children }) => {
  const initialValue = {
    productData: [],
    cart: [],
    filterByPrice: {
      lessPrice: false,
      mediumPrice: false,
      highPrice: false,
    },
    template: [],
    type: [],
  };
  const [productState, productDispatch] = useReducer(
    productReducer,
    initialValue
  );

  const filteredProductData = composeFunc(
    productState,
    filterByPrice,
    filterByTemplate,
    filterByType
  )(productState.productData);

  return (
    <ProductContext.Provider
      value={{ productState, productDispatch, filteredProductData }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, useProduct };
