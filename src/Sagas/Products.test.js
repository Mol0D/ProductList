import { expectSaga } from 'redux-saga-test-plan';
import {put} from 'redux-saga/effects'
import {fetchProductAsync} from './Products';
import {FETCH_PRODUCTS, REQUEST_PRODUCTS_IS_LOADING} from '../Constants/ActionTypes';
import {requestProductsIsLoading, requestProductsIsError} from '../Actions/Products';


function* saga() {
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

describe('test fetchProduct', () => {
    /* it('correct Action isLoading', ()=>{
        console.log(name);
            return expectSaga(fetchProductAsync)
                .put({
                    type: REQUEST_PRODUCTS_IS_LOADING
                })
                .run()
    }) */
    it('returns a greeting', () => {
        return expectSaga(saga)
          .put({type: REQUEST_PRODUCTS_IS_LOADING})
          .run();
      });
})