import React from 'react';
import './Item.css';
import PropTypes from 'prop-types';
import {Card} from 'react-bootstrap';
const Item = props =>{
    
        const {name, img, price, stars, link, brand} = props;
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

Item.propTypes = {
    name: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.number,
    stars: PropTypes.number,
    link: PropTypes.string,
    brand: PropTypes.string
}

export default Item;