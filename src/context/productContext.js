import { productReducer } from "reducer/productReducer";
import { createContext, useContext, useReducer } from "react"

const ProductContext = createContext()
const useProduct = () => useContext(ProductContext)

const ProductProvider = ({children}) => {
    const initialValue = {
        cart: []
    }
    const [productState, productDispatch] = useReducer(productReducer, initialValue)

    return (
        <ProductContext.Provider value={{productState, productDispatch}}>
            {children}
        </ProductContext.Provider>
    )
}

export {ProductProvider, useProduct}