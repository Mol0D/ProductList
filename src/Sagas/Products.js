import {takeEvery} from 'redux-saga/effects';
import {put, call} from 'redux-saga/effects';
import {FETCH_PRODUCTS, 
    requestProductsIsLoading, 
    requestProductsIsError,
    requestProductsSuccess
} from '../Actions/Products';


export default function* watchFetchProducts(){
    yield takeEvery(FETCH_PRODUCTS, fetchProductsAsync);
}

function* fetchProductsAsync(){
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

