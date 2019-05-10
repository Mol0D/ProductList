import React from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import history from '../../App/history';
import PropTypes from 'prop-types';

class SearchForm extends React.Component{

  constructor (props) {
    super(props);
    this.state = {
        inputSearch: this.props.search
    }
  }
  
  handleReset = () => {
    this.setState({inputSearch: ''})
  }

  handleSubmit = event => {
    event.preventDefault();
    if(this.props.filter === undefined){
      history.push({pathname: `/products`, search: `?name=${this.state.inputSearch}`})
    } else {
      history.push({pathname: `/products/${this.props.filter}`, search: `?name=${this.state.inputSearch}`})
    }
  }

  handleChange = event =>{
    this.setState({inputSearch: event.target.value})
  }

  render(){
    /* console.log(this.props) */
    return(
      <Form className="form" onSubmit={this.handleSubmit}>
        <Form.Group>
          <Container>
            <Row style={{textAlign: 'center'}}>
              <Col xs="10">
              <Form.Control type="text" 
                placeholder="Search" 
                value={this.state.inputSearch}
                onChange={this.handleChange}
              />
              </Col>
              <Col xs="2">
                <Button variant="danger" type="reset" onClick={this.handleReset}>Reset</Button>
              </Col>
            </Row>
          </Container>
        </Form.Group>
      </Form>
    )
  }   
}

SearchForm.propTypes = {
  filter: PropTypes.string
}

export default SearchForm;