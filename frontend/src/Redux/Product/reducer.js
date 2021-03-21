import {GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, GET_PRODUCT_FAILURE} from './actionTypes';

const initState = {
    isLoading: false,
    isError: false,
    product: []

}

export const productReducer = (state = initState, {type, payload}) => {
    switch(type){
        case GET_PRODUCT_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                product: payload
            }
        case GET_PRODUCT_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        default:
            return state
    }
}