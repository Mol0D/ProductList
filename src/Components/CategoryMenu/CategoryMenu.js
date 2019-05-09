import React from 'react';
import {ListGroup} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class CategoryMenu extends React.Component{
    render(){
        return(
            <nav>
                <ListGroup>
                    <ListGroup.Item>
                            <Link to="/products">
                                All
                            </Link>      
                    </ListGroup.Item>
                    {this.props.listMenu && this.props.listMenu.map((item, i) => (
                        <ListGroup.Item key={i}>
                            <Link to={`/products/${item}`}>
                                {item}
                            </Link> 
                        </ListGroup.Item>
                    ))} 
                </ListGroup>
            </nav> 
        )
    }
        
    }

CategoryMenu.propTypes ={
    listMenu: PropTypes.array
}


export default CategoryMenu;