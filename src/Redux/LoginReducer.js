import * as types from './actionType'

const initialValue = {
    registrations:[],
    register:{},
    loading:true
}

const LoginReducer = (state = initialValue, action) => {
    if(action.type === types.GET_REGISTRATION_ALL_DATA){
        return{
            ...state,
            loading:false,
            registrations:action.payload
        }
    }else{
        return state
    }
}

export default LoginReducer