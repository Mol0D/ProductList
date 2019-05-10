import React from 'react';
import ProductsList from '../ProductsList/ProductsList';
import queryString from 'query-string';

const ProdcutsFilter = props => {

    let arr = [];

    if( props.data.length && props.location.pathname !== '/products'){
        arr = props.data.filter(product => product.bsr_category === props.match.params.filter)
    } else {
        arr = props.data
    }

    let parsed = queryString.parse(props.location.search);
    if(parsed.name){
        arr = arr.filter(product => product.name.includes(parsed.name))
    } 
      
    return(
      <div>
         <ProductsList 
            data={arr} 
            filter={props.match.params.filter}
            search={parsed.name}
         />
      </div>
  )
}

export default ProdcutsFilter;