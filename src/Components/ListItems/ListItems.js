import React from 'react';
import {ListGroup} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class ListItems extends React.Component{

    render(){
        return(
            <nav>
                <ListGroup>
                            <ListGroup.Item>
                                <Link to='/'>
                                    All
                                </Link>      
                            </ListGroup.Item>
                    {   this.props.listMenu !== undefined ?  
                            this.props.listMenu.map((item, i)=>{
                            return(
                                <ListGroup.Item key={i}>
                                    <Link to={`/${item}`}>
                                        {item}
                                    </Link>      
                                </ListGroup.Item>
                            )
                        }) : ''
                    }
                </ListGroup>
            </nav> 
        )
    }
}

export default ListItems;