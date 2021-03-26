import {GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, GET_PRODUCT_FAILURE, ADD_TO_CART} from './actionTypes';

const initState = {
    isLoading: false,
    isError: false,
    product: [],
    cart:[],
    len:""

}

export const productReducer = (state = initState, {type, payload}) => {
    switch(type){
        case GET_PRODUCT_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        //filling the empty product array in state with the payload we are getting from action
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
        //adding the product by finding it and storing it in cart array
        case ADD_TO_CART:
            const productToAdd = state.product.find((item) => item.id === payload)
            const qty = {...productToAdd, qty: 1}
            const searchCart = state.cart.findIndex((item) => item.id === payload)
            if(searchCart === -1){
                return {
                    ...state,
                    cart: [...state.cart, qty]
                }
            }
            else{
                return {
                    ...state,
                    cart: state.cart.map((item, index) => index === searchCart?{...item, qty: item.qty+1}: item)
                }
            }
            
        default:
            return state
    }
}