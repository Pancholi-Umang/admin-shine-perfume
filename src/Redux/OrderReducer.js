import * as types from "./actionType";

const initialValue = {
    orders:[],
    dateFilter:[],
    order:{},
    loading:true
}

const OrderReducer = (state = initialValue, action) => {
    if(action.type === types.GET_ORDER_ALL_DATA){
        return{
            ...state,
            loading:false,
            orders:action.payload
        }
    }else if(action.type === types.DATE_FILTER_IN_ORDER){
        return{
            ...state,
            loading:false,
            dateFilter:action.payload
        }
    }else{
        return state
    }
}

export default OrderReducer