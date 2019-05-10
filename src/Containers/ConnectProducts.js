import {connect} from 'react-redux';
import actions from '../Products/actions';
import Products from '../Components/Products/Products';

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
    return{
        onFetchProducts: () => dispatch(actions.fetchProducts())
    }
}


const ConnectProducts = connect(mapStateToProps, mapDispatchToProps
)(Products);

export default ConnectProducts;