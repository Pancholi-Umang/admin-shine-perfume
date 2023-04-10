import * as types from "./actionType";

const initialValue = {
  products: [],
  product: {},
  search: [],
  loading: true,
};

const productReducer = (state = initialValue, action) => {
  if (action.type === types.GET_ALL_PRODUCT_DATA) {
    return {
      ...state,
      products: action.payload,
      loading: false,
    };
  } else if (action.type === types.GET_SEARCH_PRODUCT) {
    return {
      ...state,
      search: action.payload,
      loading: false,
    };
  } else if (action.type === types.GET_SINGLE_PRODUCT) {
    return {
      ...state,
      // Use {product} not a [products] because i want only one product record
      product: action.payload,
      loading: false,
    };
  } else if (action.type === types.UPDATE_SINGLE_PRODUCT) {
    return {
      ...state,
      // Use [products] because i want all updated record
      products: action.payload,
      loading: false,
    };
  } else if (action.type === types.DELETE_SINGLE_PRODUCT) {
    return {
      ...state,
      //ahiya payload ni undar je filter karavel value chhe te aavse
      products: action.payload,
      loading: false,
    };
  } else {
    return state;
  }
};

export default productReducer;
