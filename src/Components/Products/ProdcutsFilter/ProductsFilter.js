import React from 'react';
import ProductsLists from '../ProductsList/ProductsList';
import queryString from 'query-string';

const ProdcutsFilter = props =>{
    let arr;
    if(props.data.length !== 0){
      
      let parsed = queryString.parse(props.location.search);
      if(props.location.pathname !== '/products'){
        arr = props.data.filter(product => product.bsr_category === props.match.params.filter)
      }
      else{
        arr = props.data
      }
      if(parsed.name){
        arr = arr.filter(product => product.name === parsed.name)
      } 
      
    }
    return(
      <div>
         <ProductsLists data={arr} filter={props.match.params.filter}
         />
      </div>
  )
}

export default ProdcutsFilter;