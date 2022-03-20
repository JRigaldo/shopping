import React from "react"
import { connect } from "react-redux"
import CrossClose from "../icons/crossClose"
import Plus from "../icons/plus"
import Minus from "../icons/minus"
import { readProduct } from "../actions/productActions"
import { addToCart, calTotalCart, countUp, countDown } from "../actions/cartActions"

const CartItems = props => {
  // removeProductFromCart(item) {
  //   this.props.removeFromCart(item)
  //   this.props.calTotalCart()
  // }

  function changeCount() {
    const cartProduct = props.cart.find(item => item.identifier === props.product.identifier)
    return props.cart.length > 0 ? (
      <div className="btn--container btn--counter">
        <button disabled={cartProduct.count === cartProduct.stock} className="btn" onClick={() => props.countUp(this.props.product)}>
          <Plus width={30} height={30} />
        </button>
        <input type="text" value={cartProduct.count} disabled />
        <button disabled={!cartProduct.count} className="btn" onClick={() => this.props.countDown(this.props.product)}>
          <Minus width={30} height={30} />
        </button>
      </div>
    ) : (
      ""
    )
  }

  return (
    <ul className="cartItems cartItems--container">
      {props.cartItems.map(item => {
        return (
          <li className="cartItems--item">
            <span className="cartItems--pic">
              <img src={item.image} alt="" />
            </span>
            <span className="cartItems--title">{item.name}</span>
            {() => changeCount()}
            {/* <span className="cartItems--dash">-</span>
        <span className="cartItems--count">{item.count}</span>
        <span className="cartItems--nb">x</span> */}
            <span className="cartItems--currency">CHF</span>
            <span className="cartItems--price">{item.price}</span>
            <span className="cartItems--cross" onClick={() => removeFromCart(item)}>
              <span className="cross--container">
                <CrossClose width={15} height={15} className="cross-icon" />
              </span>
            </span>
          </li>
        )
      })}
    </ul>
  )

  function removeFromCart(item) {
    props.callback(item)
  }
}

const mapStateToProps = state => {
  return {
    product: state.productsReducer.product,
    cart: state.cartReducer.cartItems,
    cartItems: state.cartReducer.cartItems,
    totalCart: state.cartReducer.totalPrice,
    countUp: state.cartReducer.countUp,
    countDown: state.cartReducer.countDown
  }
}

const mapDispatchToProps = {
  readProduct,
  addToCart,
  calTotalCart,
  countUp,
  countDown
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItems)
