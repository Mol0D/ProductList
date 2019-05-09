/* import reducer from '../Products';
import * as types from '../../Constants/ActionTypes';

describe('Product reducer', () => {
    it('correct return initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            data: [],
            isLoading: false,
            isError: false,
            listMenu: []
        })
    })

    it('correct return requestIsLoading', ()=>{
        expect(
            reducer([], {
                type: types.REQUEST_PRODUCTS_IS_LOADING
            })
        ).toEqual({
            isLoading: true,
            isError: false,
            data: []
        })
    })

    it('correct return requestIsError', ()=>{
        expect(
            reducer([], {
                type: types.REQUEST_PRODUCTS_IS_ERROR
            })
        ).toEqual({
            isLoading: false,
            isError: true,
            data: []
        })
    })

    it('correct return requestSuccess', ()=>{
        expect(
            reducer([],{
                type: types.REQUEST_PRODUCTS_SUCCESS,
                payload:{
                    products: [],
                    listMenu: []
                }
                 
            })
        ).toEqual({
            isLoading: false,
                isError: false,
                data: [],
                listMenu: []
        })
    })
}) */

/* import * as actions from '../Products';
import * as types from '../../Constants/ActionTypes';

describe('actions', ()=>{
    it('Action requestProductsIsLoading', () => {
        const expectedAction = {
            type: types.REQUEST_PRODUCTS_IS_LOADING
        }
        expect(actions.requestProductsIsLoading()).toEqual(expectedAction);
    })

    it('Action requestProductsError', ()=>{
        const expectedAction = {
            type: types.REQUEST_PRODUCTS_IS_ERROR
        }
        expect(actions.requestProductsIsError()).toEqual(expectedAction);
    })

    it('Action requestProductsSuccess', ()=>{
        const payload ={
            listMenu: undefined,
            products: undefined
        }
        const expectedAction = {
            type: types.REQUEST_PRODUCTS_SUCCESS,
            payload
        }
        expect(actions.requestProductsSuccess()).toEqual(expectedAction);
    })

    it('Action fetchProducts', () =>{
        const expectedAction = {
            type: types.FETCH_PRODUCTS
        }
        expect(actions.fetchProducts()).toEqual(expectedAction)
    })
}) */

/* import { expectSaga } from 'redux-saga-test-plan';
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
    }) 
    it('returns a greeting', () => {
        return expectSaga(saga)
          .put({type: REQUEST_PRODUCTS_IS_LOADING})
          .run();
      });
}) */