import reducer from '../Products';
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
})