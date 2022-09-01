import {
  ADD_TO_CART,
  CLEAR_ALL_FILTERS,
  FILTER_BY_PRICE_RANGE,
  FILTER_BY_TEMPLATES,
  FILTER_BY_TYPE,
  GET_ALL_PRODUCTS,
  REMOVE_FROM_CART,
} from "./productConstant";

export const productReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload),
      };

    case GET_ALL_PRODUCTS:
      return {
        ...state,
        productData: action.payload,
      };

    case FILTER_BY_PRICE_RANGE:
      return {
        ...state,
        filterByPrice: action.payload,
      };

    case FILTER_BY_TEMPLATES:
      return {
        ...state,
        template: action.payload,
      };

    case FILTER_BY_TYPE:
      return {
        ...state,
        type: action.payload,
      };

    case CLEAR_ALL_FILTERS:
      return {
        ...state,
        filterByPrice: "",
        template: "",
        type: "",
      };
  }
};
