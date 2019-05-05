import {connect} from 'react-redux';
import App from '../App';

export const ConnectedApp = connect((state)=>{
    return state;
})(App)

