import React from 'react';
import './App.css';

import Item from './Item/Item';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      data: null
    }
  }

  componentDidMount(){
    fetch(`https://demo8421975.mockable.io/products`)
        .then(data => data.json())
        .then(json => this.setState({data: json.products}))
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
      <form className="form" onSubmit={this.handleSubmit}>
        <input type="text" ref={(node) => this._inputSearch = node}/>
        <input type="submit" value="Search"/>
        <input type="reset" value="Reset"/>
      </form>
      {
        this.state.data === null ? 
        
        <div className='load'>Loading...</div> : 
        <div className='products'>
          {this.state.data.map((item, index)=>{
              const {name, img, price, stars, link, brand} = item;
              return(
                <Item
                  key={index}
                  name={name}
                  img={img}
                  price={price}
                  stars={stars}
                  link={link}
                  brand={brand}
                />
              )
            })
          }
        </div>
        
      }
    </div>
  )
}
  
}



export default App;
