import {connect} from 'react-redux';
import App from '../App';
import { bindActionCreators } from 'redux';
import {fetchProducts} from '../Actions/Products';

const mapStateToProps = state =>{
    const {data, isLoading, isError, listMenu} = state;
    return{
        data,
        isLoading,
        isError,
        listMenu
    }
}

const mapDispatchToProps = dispatch =>{

    return bindActionCreators({fetchProducts: fetchProducts}, dispatch)
}


export const ConnectedApp = connect(mapStateToProps, mapDispatchToProps
)(App)

