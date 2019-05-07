import React from 'react';
import {ListGroup} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
const ListItems = props =>{
        return(
            <nav>
                <ListGroup>
                    <ListGroup.Item>
                        <Link to='/'>
                            All
                        </Link>      
                    </ListGroup.Item>
                    {props.listMenu && props.listMenu.map((item, i) => (
                        <ListGroup.Item key={i}>
                            <Link to={`/${item}`}>
                                {item}
                            </Link>      
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </nav> 
        )
    }

ListItems.propTypes ={
    listMenu: PropTypes.array
}


export default ListItems;