import React from 'react';
import './App.css';
import { Container, Row} from 'react-bootstrap';
import {Route, Router} from 'react-router-dom';
import ConnectedProductItems from '../../Containers/ConnectProducts';
import Header from '../Header/Header';
import Main from '../Main/Main';
import history from './history';
class App extends React.Component{

render(){
  const WrappedProductItems = props =>{
    return <ConnectedProductItems {...props} data={this.props.data} isLoading={this.props.isLoading}
      propFetchProducts={this.props.propFetchProducts}
    />
  }

  
  return (
    <div className="App">
    <Header/>
      <Container>
        <Row>
            <main>
            <Router history={history}>
              <Route exact path="/" component={Main}/>
              <Route path="/products" component={WrappedProductItems}/>
            </Router>
            </main>
        </Row>
      </Container>
      
    </div>
  )
}
}

export default App;
