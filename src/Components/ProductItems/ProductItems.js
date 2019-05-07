import React from 'react';
import './ProductItems.css';
import {Spinner, Container, Row, Col} from 'react-bootstrap';
import Item from '../Item/Item';

class ProductItems extends React.Component{
    
        render(){
          return(
            <div>
            {
            this.props.data === undefined ? 
            <div className="spinner">
              <Spinner animation="border" variant="primary" />
            </div>
             : 
            <Container>
              <Row>
                {this.props.data.map((item, index)=>{
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
    }

export default ProductItems;