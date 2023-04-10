import axios from "axios";
import * as types from "./actionType";

export const getProduct = () => {
  return function (dispatch) {
    axios
      .get("https://listofallperfumes-default-rtdb.firebaseio.com/items.json")
      .then((res) => {
        dispatch({
          type: types.GET_ALL_PRODUCT_DATA,
          payload: res.data,
        });
      });
  };
};


export const searchProduct = (searchData) => {
    return {
        type:types.GET_SEARCH_PRODUCT,
        payload:searchData
    }
}

export const fetchSingleRecord = (id) => {
  return function(dispatch){
    axios.get(`https://listofallperfumes-default-rtdb.firebaseio.com/items/${id}.json`)
    .then((res)=>{
      dispatch({
        type:types.GET_SINGLE_PRODUCT,
        payload:res.data
      })
    })
  }
}

export const updateSingleRecord = (updatedItem,SingleItem) => {
  return function(dispatch){
    axios.put(`https://listofallperfumes-default-rtdb.firebaseio.com/items/${SingleItem.id}.json`,SingleItem)
    .then((res)=>{
      dispatch({
        type:types.UPDATE_SINGLE_PRODUCT,
        payload:updatedItem
      })
    })
  }
}

export const deleteRecord = (filteredData, id) => {
  return function(dispatch){
    axios.delete(`https://listofallperfumes-default-rtdb.firebaseio.com/items/${id}.json`)
    .then((res)=>{
      dispatch({
        type:types.DELETE_SINGLE_PRODUCT,
        payload:filteredData
      })
    })
  }
}


// Login Reducer Coding

export const getAllRegistration = () => {
  return function (dispatch) {
    axios
      .get("https://registration-login-23503-default-rtdb.firebaseio.com/login.json")
      .then((res) => {
        dispatch({
          type: types.GET_REGISTRATION_ALL_DATA,
          payload: res.data,
        });
      });
  };
}


// Make A Order Actions

export const getAllOrder = () => {
  return function (dispatch) {
    axios.get("https://order-invoice-c8bed-default-rtdb.firebaseio.com/invoice.json")
      .then((res) => {
        dispatch({
          type: types.GET_ORDER_ALL_DATA,
          payload: res.data,
        });
      });
  };
}

export const getFilterDate = (filrerValue) => {
  return function(dispatch){
    dispatch({
      type:types.DATE_FILTER_IN_ORDER,
      payload:filrerValue,
    })
  }
}