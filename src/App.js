import React from 'react';
import './App.css';
import { Container, Row, Col, Form, Button, ButtonToolbar} from 'react-bootstrap';
import ListItems from './Components/ListItems/ListItems';
import FilterLink from './Components/FilterLink/FilterLink'
import {Switch, Router, Route, Link} from 'react-router-dom';
import ProductItems from './Components/ProductItems/ProductItems';
import FilterProducts from './Components/FilterProducts/FilterProducts';
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
    fetch(`http://localhost:3001/products`)
        .then(data => data.json())
        .then(json =>{
          this.setState({data: json})
          let obj = {};
          for (let i=0; i<json.length; i++){
            let str = json[i].bsr_category;
            obj[str] = true;
          }
          this.setState({listMenu: Object.keys(obj)})
        })
        .catch(err => console.log(err));   
  }

  handleSubmit = () =>{
    
  }

  handleChange = event =>{
    this.setState({inputSearch: event.target.value})
  }
render(){
  const WrappedProductItems = props =>{
    return <ProductItems {...props} data={this.state.data}/>
  }
  const WrappedFilterProducts = props =>{
    return <FilterProducts {...props} data={this.state.data}/>
  }
  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs="3">
            <nav>
              <ListItems listMenu={this.state.listMenu}/>
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
                        <Col xs="6">
                          <Link to={`/${this.state.inputSearch}`}
                          >Search</Link>
                        </Col>
                        <Col xs="6">
                        <Button variant="primary" type="reset" className="buttonForm" >Reset</Button>
                        </Col>
                      </ButtonToolbar>
                    </Row>
                  </Container>
                </Form.Group>
              </Form>
              <Route exact path="/" component={WrappedProductItems}/>
              <Route path="/:filter" component={WrappedFilterProducts}/>
            </main>
            
          </Col>
        </Row>
      </Container>
      
    </div>
  )
}
}

export default App;
