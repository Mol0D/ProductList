import React from 'react';
import './App.css';
import { Container, Row} from 'react-bootstrap';
import {Route, Router} from 'react-router-dom';
import ConnectProducts from '../../Containers/ConnectProducts';
import Header from '../Header/Header';
import Main from '../Main/Main';
import history from './history';
class App extends React.Component{
  render(){
    return (
      <div className="App">
      <Header/>
        <Container>
          <Row>
              <main>
                <Router history={history}>
                  <Route exact path="/" component={Main}/>
                  <Route path="/products" component={ConnectProducts}/>
                </Router>
              </main>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App;
