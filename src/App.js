import React from 'react';
import './App.css';
import { Container, Row, Col, Form, Button, ButtonToolbar} from 'react-bootstrap';
import ListItems from './Components/ListItems/ListItems';
import {Route, Link, BrowserRouter} from 'react-router-dom';
import ProductItems from './Components/ProductItems/ProductItems';
import FilterProducts from './Components/FilterProducts/FilterProducts';
import SearchProducts from './Components/FilterProducts/SearchProducts';
import {fetchProducts} from './Actions/Products';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      data: [],
      listMenu: [],
      inputSearch: ''
    }
  }

  componentDidMount(){
    this.props.fetchProducts()
  }

  handleReset = () =>{
    this.setState({inputSearch: ''})
  }

  handleChange = event =>{
    this.setState({inputSearch: event.target.value})
  }
render(){
  const WrappedProductItems = props =>{
    return <ProductItems {...props} data={this.props.data}/>
  }
  const WrappedFilterProducts = props =>{
    return <FilterProducts {...props} data={this.props.data}/>
  }
  const WrappedSearchProducts = props =>{
    return <SearchProducts {...props} data={this.props.data}/>
  }
  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs="3">
            <nav>
              <ListItems listMenu={this.props.listMenu}/>
            </nav>
          </Col>
          <Col xs="9">
            <main>
            <Form className="form">
                <Form.Group>
                  <Container>
                    <Row>
                      <Form.Control type="text" placeholder="Search" onChange={this.handleChange}/>
                    </Row>
                    <Row>
                      <ButtonToolbar style={{width: '100%'}}>
                        <Col xs="3">
                          <Button as={Link} 
                          variant="success"
                          to={`/${this.state.inputSearch}`}  
                          className="buttonForm"  
                          >Search</Button>
                        </Col>
                        <Col xs="6"></Col>
                        <Col xs="3">
                        <Button variant="danger" type="reset" className="buttonForm" onClick={this.handleReset}>Reset</Button>
                        </Col>
                      </ButtonToolbar>
                    </Row>
                  </Container>
                </Form.Group>
              </Form>
              <div>
              <Route exact path="/" component={WrappedProductItems}/>
              <Route path="/:filter" component={WrappedFilterProducts}/>
              <Route path="/:search" component={WrappedSearchProducts}/>
              </div>
              
            </main>
          </Col>
        </Row>
      </Container>
      
    </div>
  )
}
}

export default App;
