import React, { Component } from 'react';
import './shopping.css'
import meiImg from '../images/1.png'
import gaoImg from '../images/2.png'
import shiImg from '../images/3.png'
class Shopping extends Component {

  state = {
    products: [
      {
        id: '123',
        name: '提拉米苏',
        price: 12,
        isInCart: false
      },
      {
        id: '342',
        name: '黑森林',
        price: 13,
        isInCart: false
      },
      {
        id: '456',
        name: '半熟芝士',
        price: 15,
        isInCart: false
      }
    ]
  }

handleCLick = (id) =>{
  this.setState({
    products:this.state.products.map(t => {
      if(t.id === id) return {...t,isInCart:true}
      return t
    })
  })
  const product = this.state.products
          .find(t => t.id === id)
    this.props.addToCart(product)
}

  render() {

const { products } = this.state
    let productList = products.map(t => (
      <div key={t.id} className='product'>
        <button disabled={t.isInCart}
          className={t.isInCart && 'disabled'}
          onClick={() => this.handleCLick(t.id)}>
          {t.isInCart ? '已购':'购买'}
          </button>
      </div>
    ))
    return (
      <div className="shopping">
        <div className='shopping-cart'>
          <img src={meiImg} alt="mei"/>
          <img src={gaoImg} alt="gao"/>
          <img src={shiImg} alt="shi"/>
        </div>
        <div className='cart-button'>
          {productList}
        </div>
      </div>
    )
  }
}

export default Shopping
