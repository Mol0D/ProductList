import React from 'react';

import { Container, Row, Col, Form, Button, ButtonToolbar} from 'react-bootstrap';
import ListItems from '../ListItems/ListItems';
import FilterLink from '../FilterLink/FilterLink'
import {Switch, Router, Route, Link} from 'react-router-dom';
import ProductItems from '../ProductItems/ProductItems';
import FilterProducts from '../FilterProducts/FilterProducts';

class Main extends React.Component{
    
    render(){
        return(
            <ProductItems data={this.props.data}/>
        )
    }
}

export default Main;