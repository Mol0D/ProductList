import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import productsReducer from '../../Products/reducers';
import watchFetchProducts from '../../Products/Operations';
const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
    productsReducer,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(watchFetchProducts);
