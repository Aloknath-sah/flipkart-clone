import {REGREQUEST, REGSUCCESS, REGFAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILURE, IS_AUTH, USER_DATA, LOGIN_USER} from './actionTypes'

const initState = {
    isLoading: false,
    isError: false,
    isRegister: false,
    data: [],
    isAuthVal: false,
    loginUser:""
}

export const registerReducer = (state = initState, {type, payload}) => {
    switch(type){
        
        case REGREQUEST:
            return {
                ...state,
                isLoading: true
            }
        case REGSUCCESS: 
            return {
                ...state,
                isLoading: false,
                isRegister: true,
                data:[...state.data, payload]
            }
        case REGFAILURE:
            return {
                ...state,
                isLoading: true
            }
        case GET_USER_REQUEST:
                return {
                    ...state,
                    isLoading: true
                }
        //storing the registered data in data array
        case GET_USER_SUCCESS: 
                return {
                    ...state,
                    isLoading: false,
                    data: payload
                }
        case GET_USER_FAILURE:
                return {
                    ...state,
                    isLoading: true
                }
        case IS_AUTH:
                return {
                    ...state,
                    isAuthVal: payload
                }
        case LOGIN_USER:
            return {
                ...state,
                loginUser: payload
            }
        default:
            return state
    }
}