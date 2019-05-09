import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from 'react-router-dom';
import {store} from './Components/App/RootReducer';
import {Provider} from 'react-redux';
import App from './Components/App/App';

ReactDOM.render(
<Provider store={store}>
    <BrowserRouter>
        <App /> 
    </BrowserRouter>
</Provider>    
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
