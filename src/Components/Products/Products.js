import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import CategoryMenu from '../CategoryMenu/CategoryMenu';
import ProductsFilter from './ProductsFilter/ProductsFilter';
import { Route } from 'react-router-dom'

class ProductItems extends React.Component{

  constructor (props) {
    super(props);
    this.state = {
      data: [],
      listMenu: []
    }
  }

  componentDidMount () {
    this.props.onFetchProducts();
  }

  render() {

    const WrappedFilterProducts = props => {
      return <ProductsFilter {...props} data={this.props.data} /> 
    }

    return(
      <div>
        <Container>
          <Row>
            <Col xs="3">
              <nav>
                <CategoryMenu listMenu={this.props.listMenu} propParam={this.props.filter} />
              </nav>
            </Col>
            <Col xs="9">
              <Route exact path='/products' component={WrappedFilterProducts}/>
              <Route path="/products/:filter" component={WrappedFilterProducts}/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
    

  ProductItems.propTypes = {
    data: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    onFetchProducts: PropTypes.func.isRequired,
    listMenu: PropTypes.arrayOf(PropTypes.string)
  }

export default ProductItems;