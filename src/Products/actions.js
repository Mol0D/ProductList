import types from './types';

const requestProductsIsLoading = () =>{
    return {
        type: types.REQUEST_PRODUCTS_IS_LOADING
    }
}

const requestProductsIsError = () =>{
    return {
        type: types.REQUEST_PRODUCTS_IS_ERROR 
    }
}

const requestProductsSuccess = (products, listMenu) =>{
    return {
        type: types.REQUEST_PRODUCTS_SUCCESS,
        payload: {
            products,
            listMenu
        }
    }
}

const fetchProducts = () =>{
    return {
        type: types.FETCH_PRODUCTS
    }
}

export default {
    requestProductsIsLoading,
    requestProductsIsError,
    requestProductsSuccess,
    fetchProducts
}