import React from 'react';
import './ProductsList';
import { Spinner, Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ProductCard from '../ProductCard/ProductCard';
import SearchForm from '../SearchForm/SearchForm';


const ProductsList = props =>{
  return(
    <div>
      <SearchForm filter={props.filter} search={props.search}/>
      {
      props.isLoading ? 
        <div className="spinner">
          <Spinner animation="border" variant="primary" />
        </div>
          : 
        <Container>
          <Row>
          { props.data && props.data.length > 0 ? 
            props.data.map(( item, index ) => {
              const { name, img, price, stars, link, brand } = item;
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
          : 
            <div>No such result</div>
          }
          </Row>
        </Container>
      }
    </div>
  )
}

ProductsList.propTypes = {
  filter: PropTypes.string,
  data: PropTypes.array,
  isLoading: PropTypes.bool
}

export default ProductsList;