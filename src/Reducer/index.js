import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import productsReducer from './Products';
import watchFetchProducts from '../Sagas/Products';
const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
    productsReducer,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(watchFetchProducts);
