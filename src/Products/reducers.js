import types from './types';

const initialState = {
    data: [],
    isLoading: false,
    isError: false,
    listMenu: []
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.REQUEST_PRODUCTS_IS_LOADING:
            return {
                isLoading: true,
                isError: false,
                data: [],
                listMenu: []
            }
        case types.REQUEST_PRODUCTS_IS_ERROR: 
            return {
                isLoading: false,
                isError: true,
                data: [],
                listMenu: []
            }
        case types.REQUEST_PRODUCTS_SUCCESS:
            return {
                isLoading: false,
                isError: false,
                data: action.payload.products,
                listMenu: action.payload.listMenu
            }
        default: 
            return state;
    }
} 

export default productsReducer;