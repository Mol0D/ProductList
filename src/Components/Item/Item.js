import React from 'react';
import './Item.css';
import PropTypes from 'prop-types';
import {Card} from 'react-bootstrap';
class Item extends React.Component{
    render(){
        const {name, img, price, stars, link, brand} = this.props;
        return(
            
            <Card className="item">
                <Card.Img variant="top" src={img} width="320px" height="240px"/>
                <Card.Body>
                    <Card.Title className="text">{name}</Card.Title>
                        <Card.Text>
                        Price: {price}
                        </Card.Text>
                        <Card.Text>
                        Stars: {stars}
                        </Card.Text>
                        <Card.Text>
                        Brand: {brand}
                        </Card.Text>
                        <Card.Link href={link}>Go to shop</Card.Link>
                </Card.Body>
            </Card>
        )
    }
}


Item.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stars: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired
}

export default Item;