import React from 'react';
import {Container, Row, Col, Form, Button, ButtonToolbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class SearchForm extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            inputSearch: ''
        }
    }
      handleReset = () =>{
    this.setState({inputSearch: ''})
  }

   handleChange = event =>{
    this.setState({inputSearch: event.target.value})
  }
  render(){

    return(
        <Form className="form">
                <Form.Group>
                  <Container>
                    <Row>
                      <Form.Control type="text" placeholder="Search" onChange={this.handleChange}/>
                    </Row>
                    <Row>
                      <ButtonToolbar style={{width: '100%'}}>
                        <Col xs="3">
                          {
                            this.props.filter === undefined ? 
                            <Button 
                          as={Link}
                          variant="success"
                          to={{pathname: `/products`, search: `?name=${this.state.inputSearch}`}}
                          className="buttonForm"  
                          >Search</Button>
                            : 
                            <Button 
                          as={Link}
                          variant="success"
                          to={{pathname: `/products/${this.props.filter}`, search: `?name=${this.state.inputSearch}`}}
                          className="buttonForm"  
                          >Search</Button>
                          }
                          
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
    )
  }
    
}

export default SearchForm;