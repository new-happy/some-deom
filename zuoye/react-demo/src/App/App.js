import React, { Component } from 'react';
import './app.css'
import Shopping from '../Shopping/Shopping'
import Cart from '../Cart/Cart'
class App extends Component {
state = {
  productsInCart: []
}
addToCart = (product) =>{
  this.setState({
    productsInCart:[
      ...this.state.productsInCart,
      {
        ...product,
        count:1
      }
    ]
  })
}

  minus = (id) => {
      console.log(id)
      const newProductsInCart = this.state.productsInCart.map(t => {
        if(id === t.id && t.count !== 0) {
          return {...t, count: t.count - 1}
        }
        return t;
      })
      this.setState({
        productsInCart: newProductsInCart

      })
    }

    add = (id) => {
      console.log(id)
      const newProductsInCart = this.state.productsInCart.map(t => {
        if(id === t.id) {
          return {...t, count: t.count + 1}
        }
        return t;
      })
      this.setState({
        productsInCart: newProductsInCart

      })
    }


  render() {
    const { productsInCart } = this.state
    return (
      <div className="app">
        <div className="main">
          <Shopping addToCart={this.addToCart}/>
          <Cart
            add={this.add}
            minus={this.minus}
            productsInCart={productsInCart}/>
        </div>
      </div>
    )
  }
}

export default App;
