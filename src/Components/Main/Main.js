import React from 'react';
import './Main.css';


import ProductItems from '../ProductItems/ProductItems';

import {Link, Route} from 'react-router-dom'
class Main extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
    this.arr = []
  }
  
componentDidMount(){
  
  
    if(this.props.match.path !== '/'){
      this.arr = this.props.data.filter(
        product => product.bsr_category === this.props.location.pathname.substring(1))
        this.state.data = this.arr;
        this.setState({
          data: this.state.data
        })
    } 
}

render(){
  console.log(this.props)
  return (
    <div className="App">
              <ProductItems data={this.state.data}/>
    </div>
  )
}
}

export default Main;