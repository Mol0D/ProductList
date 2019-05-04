import React from 'react';
import ProductItems from '../ProductItems/ProductItems';
const FilterProducts = props =>{
    let arr;

    if (props.match !== undefined){
      let param = props.match.params.filter;
      arr = props.data.filter(product => product.bsr_category === param)
    } else{
      arr = props.data;
    } 
        return(
            <div>
                <ProductItems data={arr}/>
            </div>
        )
    
}

export default FilterProducts;