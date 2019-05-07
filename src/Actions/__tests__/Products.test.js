import * as actions from '../Products';
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
})