import React, { Component } from 'react';
import './cart.css'

class Cart extends Component {

    calTotal = (products) => {
      const total = products.reduce((sum, t) => {
        return sum + t.price*t.count
      }, 0)
      return total
    }




    render () {
      const { productsInCart } = this.props
      const total = this.calTotal(productsInCart)
      const productList = productsInCart.map(t => (
        <div key={t.id} className='product-in-cart'>
          {t.name}--{t.price} 元
          <div className='count-wrap'>
            <div onClick={() => this.props.minus(t.id)}
            className='btn minus'>
              -
            </div>
            {t.count}
            <div onClick={() => this.props.add(t.id)}
            className='btn add'>
              +
            </div>
          </div>
        </div>
      ))
      return (
        <div className='cart'>
          <div className='total'>
            <h1>{total} 元</h1>
          </div>
          <div className='cart-product-list'>
            {productList}
          </div>
        </div>
      )
    }
  }

  export default Cart
