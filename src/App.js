import React from 'react';
import './App.css';
import { Container, Row, Col, Form, Button, ButtonToolbar} from 'react-bootstrap';
import ListItems from './Components/ListItems/ListItems';
import FilterLink from './Components/FilterLink/FilterLink'
import Main from './Components/Main/Main';
import {Switch, Router, Route, Link} from 'react-router-dom';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      data: [],
      listMenu: [],
    }
    this._inputSearch = ''
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

  handleSubmit = (event) =>{
    event.preventDefault();
    console.log(this._inputSearch.value);

    
  }
render(){
  console.log(this.props)
  const WrappedMain = props =>{
    return <Main {...props} data={this.state.data}/>
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
            <Form className="form" onSubmit={this.handleSubmit}>
                <Form.Group>
                  <Container>
                    <Row>
                      <Form.Control type="text" placeholder="Search" ref={(node) => this._inputSearch = node}/>
                    </Row>
                    <Row>
                      <ButtonToolbar style={{width: '100%'}}>
                        <Col xs="6">
                          <FilterLink filter={`/${this._inputSearch.value}`}
                          onClick={this.handleSubmit}
                          >Search</FilterLink>
                        </Col>
                        <Col xs="6">
                        <Button variant="primary" type="reset" className="buttonForm" >Reset</Button>
                        </Col>
                      </ButtonToolbar>
                    </Row>
                  </Container>
                </Form.Group>
              </Form>
            <Route path='/' component={WrappedMain}/>
            </main>
            {
              this.state.listMenu.map((item, i)=>{
                return (
                  <Route key={i} path={`/${item}`} component={WrappedMain}/>
                )
              })
            }
            <Route path=":/query" component={WrappedMain}/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
}

export default App;
