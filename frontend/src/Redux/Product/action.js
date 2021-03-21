import {GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, GET_PRODUCT_FAILURE,ADD_TO_CART} from './actionTypes';
import axios from 'axios'

export const getProductRequest = () => ({
    type: GET_PRODUCT_REQUEST
})

export const getProductSuccess = (payload) => ({
    type: GET_PRODUCT_SUCCESS,
    payload
})

export const getProductFailure = () => ({
    type: GET_PRODUCT_FAILURE
})

export const getProduct = () => dispatch => {
    dispatch(getProductRequest())
    axios.get("http://localhost:3004/products")
    .then(res => dispatch(getProductSuccess(res.data)))
    .catch(() => dispatch(getProductFailure()))
}

export const addToCart = (payload) => ({
    type: ADD_TO_CART,
    payload
})