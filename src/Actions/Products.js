import {REQUEST_PRODUCTS_IS_LOADING, 
    REQUEST_PRODUCTS_IS_ERROR,
    REQUEST_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS
} from '../Constants/ActionTypes';

export const requestProductsIsLoading = () =>{
    return {
        type: REQUEST_PRODUCTS_IS_LOADING
    }
}

export const requestProductsIsError = () =>{
    return {
        type: REQUEST_PRODUCTS_IS_ERROR 
    }
}

export const requestProductsSuccess = (products, listMenu) =>{
    return {
        type: REQUEST_PRODUCTS_SUCCESS,
        payload: {
            products,
            listMenu
        }
    }
}

export const fetchProducts = () =>{
    return {
        type: FETCH_PRODUCTS
    }
}