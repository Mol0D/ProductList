import React from 'react';
import './App.css';
import { Container, Row, Col, Form, Button, ButtonToolbar} from 'react-bootstrap';

import Main from './Components/Main/Main';
import {Switch, Router, Route} from 'react-router-dom';
class App extends React.Component{

render(){
  
  return (
    <div className="App">
      <Route exact path="/" component={Main}/>
      <Route path="/:filter" component={Main}/> 
    </div>
  )
}
}

export default App;
