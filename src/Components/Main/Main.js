import React from 'react';
import './Main.css';
import { Container, Row, Col, Form, Button, ButtonToolbar} from 'react-bootstrap';
import ListItems from '../ListItems/ListItems';
import ProductItems from '../ProductItems/ProductItems';
import FilterLink from '../FilterLink/FilterLink';
import {Link} from 'react-router-dom'
class Main extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      data: [],
      listMenu: [],
    }
    this._inputSearch = '';
  
  }

  componentDidMount(){
    fetch(`https://demo8421975.mockable.io/products`)
        .then(data => data.json())
        .then(json =>{
          this.setState({data: json.products})
          let obj = {};
          for (let i=0; i<json.products.length; i++){
            let str = json.products[i].bsr_category;
            obj[str] = true;
          }
          this.setState({listMenu: Object.keys(obj)})

          /* if(this.props.match.params.filter === undefined){
            this.setState({data: json.products})
          } else{
            this.setState({
              data: this.state.data.filter(
                product => product.bsr_category === this.props.match.params.filter
              )
            })
          } */
        })
        .catch(err => console.log(err)); 
        /* console.log(this.props.match.params) */
  }

  searchName = ()=>{
    console.log(this._inputSearch.value);
      this.setState({
        data: this.state.data.filter(
          product => product.name === this._inputSearch.value
        )
      })
      
    
  }

  handleSubmit = (event) =>{
    event.preventDefault();
    if (this._inputSearch.value == 0){
      fetch(`https://demo8421975.mockable.io/products`)
        .then(data => data.json())
        .then(json => this.setState({data: json.products}))
        .catch(err => console.log(err));
    } else{
      this.setState({
        data: this.state.data.filter(
          product => product.name === this._inputSearch.value 
        )
      })
    }
  }

render(){
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
              <Form className="form" onSubmit={this.handleSubmit}>
                <Form.Group>
                  <Container>
                    <Row>
                      <Form.Control type="text" placeholder="Search" ref={(node) => this._inputSearch = node}/>
                    </Row>
                    <Row>
                      <ButtonToolbar style={{width: '100%'}}>
                        <Col xs="6">
                          <Link to={this._inputSearch.value} 
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
              <ProductItems data={this.state.data}/>
            </main>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
}

export default Main;