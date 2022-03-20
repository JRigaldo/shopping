import React, { Component } from "react"
import CartIcon from "../icons/cart"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { removeFromCart, calTotalCart, countUp, countDown } from "../actions/cartActions"
import CrossClose from "../icons/crossClose"
import Plus from "../icons/plus"
import Minus from "../icons/minus"

class Cart extends Component {
  removeProductFromCart(item) {
    this.props.removeFromCart(item)
    this.props.calTotalCart()
  }

  changeCount(cartProduct) {
    return cartProduct ? (
      <div className="btn--container btn--counter">
        <button disabled={cartProduct.count === cartProduct.stock} className="btn" onClick={() => this.props.countUp(cartProduct)}>
          <Plus width={30} height={30} />
        </button>
        <input className="btn--counter-input" type="text" value={cartProduct.count} disabled />
        <button disabled={!cartProduct.count} className="btn" onClick={() => this.props.countDown(cartProduct)}>
          <Minus width={30} height={30} />
        </button>
      </div>
    ) : (
      ""
    )
  }

  handleSubmit(order) {
    console.log(order)
  }

  render() {
    return (
      <div className="cart cart--container cart--sticky-desktop cart--mobile">
        {this.props.cartItems.length === 0 ? (
          <div className="cart--content">
            <div className="cart--intro-title">
              <CartIcon width={18} height={18} className="cart-icon" />
              <p className="cart--intro">Mon panier est actuellement vide</p>
            </div>
          </div>
        ) : (
          <div>
            <div className="cart--content">
              <div className="cart--intro-title">
                <CartIcon width={18} height={18} className="cart-icon" /> <span className="cart--intro">Mes articles :</span>
              </div>
              <ul className="cartItems cartItems--container">
                {this.props.cartItems.map(item => {
                  return item.count > 0 ? (
                    <li key={item.identifier} className="cartItems--item">
                      <span className="cartItems--pic">
                        <img src={item.image} alt="" />
                      </span>
                      <span className="cartItems--title">{item.name}</span>
                      {this.changeCount(item)}

                      <span className="cartItems--currency">CHF</span>
                      <span className="cartItems--price">{item.price}</span>
                      <span className="cartItems--cross" onClick={() => this.removeProductFromCart(item)}>
                        <span className="cross--container">
                          <CrossClose width={15} height={15} className="cross-icon" />
                        </span>
                      </span>
                    </li>
                  ) : (
                    this.removeProductFromCart(item)
                  )
                })}
              </ul>
            </div>
            <div className="promo--container">input promo code</div>
            <div>
              {this.props.cartItems.length !== 0 && (
                <div className="cart--content cart--total">
                  <div className="cart--total-text">
                    <h5>Total de mon Panier : </h5>
                    <span className="cart--total-currency">CHF</span>
                    <span className="cart--total-price">{this.props.totalCart}</span>
                  </div>
                  <div className="btn--container">
                    <Link to="/checkout">
                      <button className="btn btn--primary">Finaliser la commande</button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    product: state.productsReducer.product,
    cartItems: state.cartReducer.cartItems,
    totalCart: state.cartReducer.totalPrice,
    countUp: state.cartReducer.countUp,
    countDown: state.cartReducer.countDown,
    currentLocale: state.localeReducer.currentLocale
  }
}

const mapDispatchToProps = {
  removeFromCart,
  calTotalCart,
  countUp,
  countDown
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
