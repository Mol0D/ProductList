import React from 'react';
import './App.css';

import Item from './Item/Item';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      data: []
    }
  }
  componentDidMount(){
    console.log(1);
    fetch(`https://demo8421975.mockable.io/products`)
        .then(data => data.json())
        .then(json => this.setState({data: json.products}))
        .catch(err => console.log(err));
}
render(){
  return (
    <div className="App">
      {
        this.state.data.map((item, index)=>{
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
  )
}
  
}

export default App;
