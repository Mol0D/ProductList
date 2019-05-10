import types from './types';

const initialState = {
    data: [],
    filterData: [],
    isLoading: false,
    isError: false,
    listMenu: [],
    filter: '',
    search: false
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.REQUEST_PRODUCTS_IS_LOADING:
            return {
                isLoading: true,
                isError: false,
                data: []
            }
        case types.REQUEST_PRODUCTS_IS_ERROR: 
            return {
                isLoading: false,
                isError: true,
                data: []
            }
        case types.REQUEST_PRODUCTS_SUCCESS:
            return {
                isLoading: false,
                isError: false,
                data: action.payload.products,
                listMenu: action.payload.listMenu,
                filterData: action.payload.products
            }
        default: 
            return state;
    }
} 

export default productsReducer;