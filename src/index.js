import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from 'react-router-dom';
import {store} from './Reducer/index';
import {Provider} from 'react-redux';
import {ConnectedApp} from './Containers/ConnectedApp';

ReactDOM.render(
<Provider store={store}>
    <BrowserRouter>
        <ConnectedApp /> 
    </BrowserRouter>
</Provider>    
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
