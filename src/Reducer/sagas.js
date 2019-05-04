import {takeLatest} from 'redux-saga/effects';
import {FETCH_PRODUCT_REQUEST, fetchProduct} from '../Actions/index';

function* mySaga(){
    yield takeLatest(FETCH_PRODUCT_REQUEST, fetchProduct)
}

export default mySaga;
