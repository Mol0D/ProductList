import {takeEvery} from 'redux-saga/effects';
import {put, call} from 'redux-saga/effects';
import types from './types';
import actions from './actions';
import api from './api';

const sortCategory = (data) =>{
    let obj ={};
    for(let i =0; i<data.length; i++){
        let str = data[i].bsr_category;
        obj[str] = true;
    }
    return Object.keys(obj)
}

export default function* watchFetchProducts(){
    yield takeEvery(types.FETCH_PRODUCTS, fetchProductsAsync);
}

export function* fetchProductsAsync(){
    try{
        yield put(actions.requestProductsIsLoading());
        const products = yield call(() => api()
                                    .then(data =>{
                                        let objRes = sortCategory(data);
                                        return {data, objRes}
                                    }))
        yield put(actions.requestProductsSuccess(products.data, products.objRes))
    } catch (error){
        yield put(actions.requestProductsIsError())
    }
}

