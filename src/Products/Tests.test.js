import reducer from '../Products';
import types from './types';
import { expectSaga } from 'redux-saga-test-plan';
import {put} from 'redux-saga/effects'
import {fetchProductAsync} from './Operations';
import actions from './actions';

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
            data: [],
            isLoading: true,
            isError: false,
            listMenu: []
        })
    })

    it('correct return requestIsError', ()=>{
        expect(
            reducer([], {
                type: types.REQUEST_PRODUCTS_IS_ERROR
            })
        ).toEqual({
            data: [],
            isLoading: false,
            isError: true,
            listMenu: []
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
})

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
}) 

