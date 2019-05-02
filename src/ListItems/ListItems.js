import React from 'react';
import {ListGroup} from 'react-bootstrap';

class ListItems extends React.Component{
    
    

    render(){
        console.log(this.props);
        return(
            
            <ListGroup>
                {this.props.listMenu.map((item, i)=>{
                    return(
                        <ListGroup.Item key={i}>{item}</ListGroup.Item>
                    )
                })}
            </ListGroup>
        )
    }
}

export default ListItems;