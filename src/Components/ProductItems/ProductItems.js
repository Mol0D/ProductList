import React from 'react';
import './ProductItems.css';
import {Spinner, Container, Row, Col} from 'react-bootstrap';
import Item from '../Item/Item';
import PropTypes from 'prop-types';

const ProductItems = props =>{

    return(
      <div>
        {
          props.isLoading ? 
            <div className="spinner">
              <Spinner animation="border" variant="primary" />
            </div>
             : 
            <Container>
              <Row>
              {props.data && props.data.map((item, index)=>{
                  const {name, img, price, stars, link, brand} = item;
                    return(
                      <Col xs={6} key={index}>
                      <Item
                        name={name}
                        img={img}
                        price={price}
                        stars={stars}
                        link={link}
                        brand={brand}
                        />
                      </Col>
                    )
                  })
                 }
                
                </Row>
              </Container>
            }
        </div>
      )
  }
    
 

  ProductItems.propTypes = {
    data: PropTypes.array,
    isLoading: PropTypes.bool
  }

export default ProductItems;