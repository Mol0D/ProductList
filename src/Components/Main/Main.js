import React from 'react';
import './Main.css';
import { Container, Row, Col, Form, Button, ButtonToolbar} from 'react-bootstrap';
import ListItems from '../ListItems/ListItems';
import ProductItems from '../ProductItems/ProductItems';

class Main extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      data: [],
      listMenu: []
    }
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
          /* if(this.props.match.params){
            console.log(this.props.match.params)
            this.setState({
              data: this.state.data.filter(
                product => product.bsr_category === this.props.match.params.filter
              )
            })
            console.log(this.state.data)
          } */
          let param = this.props.match.paramsthis.props.match.params.filter;
          console.log(param)
        })
        .catch(err => console.log(err));
        
          
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
                        <Button variant="primary" type="submit" className="buttonForm" >Search</Button>
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