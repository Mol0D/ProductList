import {takeEvery} from 'redux-saga/effects';
import {put, call} from 'redux-saga/effects';
import {
    requestProductsIsLoading, 
    requestProductsIsError,
    requestProductsSuccess
} from '../Actions/Products';
import {FETCH_PRODUCTS} from '../Constants/ActionTypes';


export default function* watchFetchProducts(){
    yield takeEvery(FETCH_PRODUCTS, fetchProductsAsync);
}

export function* fetchProductsAsync(){
    try{
        yield put(requestProductsIsLoading());
        const products = yield call(()=>{
            return fetch(`http://localhost:3001/products`)
                        .then(res => res.json())
                        .then(data =>{
                            let obj ={};
                            for(let i =0; i<data.length; i++){
                                let str = data[i].bsr_category;
                                obj[str] = true;
                            }
                            let objRes = Object.keys(obj);
                            return {data, objRes}
                        })
        })
        yield put(requestProductsSuccess(products.data, products.objRes))
    } catch (error){
        yield put(requestProductsIsError())
    }
}

