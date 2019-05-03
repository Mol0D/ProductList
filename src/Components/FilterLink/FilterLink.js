import React from 'react';
import { Link } from 'react-router-dom';

const FilterLink = props =>{
    return(
        <Link to={props.filter}>
            {props.children}
        </Link>
    )
}

export default FilterLink;