import React from 'react';
import './Item.css';
import PropTypes from 'prop-types';

class Item extends React.Component{
    render(){
        const {name, img, price, stars, link, brand} = this.props;
        return(
            <div className='item'>
                <p className='name'>{name}</p>
                <img src={img} className='img' alt="Img"/>
                <a className="link" href={link}>Go to shope!</a>
                <p className='infoName'>Inforamtion</p>
                <p className="info">Price: {price}</p>
                <p className="info">Stars: {stars}</p>
                <p className="info">Brand: {brand}</p>
            </div>
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