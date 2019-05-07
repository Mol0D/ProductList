import React from 'react';
import ProductItems from '../ProductItems/ProductItems';

const SearchProducts = props =>{
    let arr;
    if(props.match !== undefined){
        let param = props.match.params.search;
        arr = props.data.filter((product => product.name === param));
    }
    return(
        <div>
            <ProductItems data={arr}/>
        </div>
    )
}

export default SearchProducts;