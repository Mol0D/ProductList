import React from 'react';
import './ProductsList';
import {Spinner, Container, Row, Col} from 'react-bootstrap';
import ProductCard from '../ProductCard/ProductCard';
import SearchForm from '../SearchForm/SearchForm';

const ProductsList = props =>{
    return(
        <div>
          <SearchForm filter={props.filter}/>
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
                        <ProductCard
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

export default ProductsList;