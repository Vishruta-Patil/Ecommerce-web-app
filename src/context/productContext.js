import { productReducer } from "reducer/productReducer";
import { createContext, useContext, useReducer } from "react"

const ProductContext = createContext()
const useProduct = () => useContext(ProductContext)

export const composeFunc = ( state, ...func) => (data)=> {
    return func.reduce((acc, curr) =>  curr(state, acc), data);
  };

const filterByPrice = (state, data) => {
    if(state.filterByPrice === "1500-4000") {
        return data.filter(product => product?.price >= 1500 && product?.price <= 4000)
    } else if(state.filterByPrice === "4001-7000") {
        return data.filter(product => product?.price >= 4001 && product?.price <= 7000)
    } else if(state.filterByPrice === "7001+") {
        return data.filter(product => product?.price >= 7001)
    } else {
        return data
    }
}

const filterByTemplate = (state, data) => {
    if(state.template === "2") {
        return data.filter(product => product?.template === 2)
    } else if(state.template === "3") {
        return data.filter(product => product?.template === 3)
    } else if(state.template === "3+") {
        return data.filter(product => product?.template > 3)
    } else {
        return data
    }
}

const filterByType = (state, data) => {
    if(state.type === "loafers") {
        return data.filter(product => product?.type === "loafers")
    } else if(state.type === "sneakers") {
        return data.filter(product => product?.type === "sneakers")
    } else {
        return data
    }
}

const ProductProvider = ({children}) => {
    const initialValue = {
        productData: [],
        cart: [],
        filterByPrice: "",
        template: "",
        type: ""
    }
    const [productState, productDispatch] = useReducer(productReducer, initialValue)

    const filteredProductData =  composeFunc(
        productState,
        filterByPrice,
        filterByTemplate,
        filterByType
      )(productState.productData);

    return (
        <ProductContext.Provider value={{productState, productDispatch, filteredProductData}}>
            {children}
        </ProductContext.Provider>
    )
}

export {ProductProvider, useProduct}