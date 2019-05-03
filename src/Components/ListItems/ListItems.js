import React from 'react';
import {ListGroup} from 'react-bootstrap';
import FilterLink from '../FilterLink/FilterLink';

class ListItems extends React.Component{
    render(){
        return(
            <nav>
                <ListGroup>
                    <ListGroup.Item>
                        <FilterLink filter='all'>
                            All
                        </FilterLink>
                    </ListGroup.Item>
                    {this.props.listMenu.map((item, i)=>{
                        return(
                            <ListGroup.Item key={i}>
                                <FilterLink filter={item}>
                                    {item}
                                </FilterLink>
                                    
                            </ListGroup.Item>
                        )
                    })}
                </ListGroup>
            </nav>
            
        )
    }
}

export default ListItems;