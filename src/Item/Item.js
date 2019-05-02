import React from 'react';
import './Item.css';


class Item extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }


    render(){
        const {name, img, price, stars, link, brand} = this.props;
        return(
            <div className='item'>
                <p className='name'>{name}</p>
                <img src={img} className='img'/>
                <a className="link" href={link}>Go to shope!</a>
                <p className='infoName'>Inforamtion</p>
                <p className="info">Price: {price}</p>
                <p className="info">Stars: {stars}</p>
                <p className="info">Brand: {brand}</p>
            </div>
        )
    }
}
export default Item;