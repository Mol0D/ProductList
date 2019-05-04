import { call, put } from 'redux-saga/effects';

export const FETCH_PRODUCT_REQUEST = 'FETCH_PRODUCT_REQUEST';
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS';

const api = (url) => fetch(url).then(response =>response.json())

export const fetchProductsRequest = () =>({
    type: FETCH_PRODUCT_REQUEST
})

export function* fetchProduct(action){
    try{
        const product = yield call(api, 'http://localhost:3001/products')

        yield put({type: FETCH_PRODUCT_SUCCESS, data: product.results })
    } catch(e){
        console.error(e);
    }
}