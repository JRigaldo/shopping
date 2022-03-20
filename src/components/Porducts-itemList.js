import React, { Component } from "react"
import Eye from "../icons/eye"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { addToCart, calTotalCart } from "../actions/cartActions"
import { toggleAsideCart } from "../actions/asideActions"

class ProductsItemList extends Component {
  pushToCart(product) {
    this.props.addToCart(product)
    this.props.calTotalCart()
    if (this.props.cart.length === 0) {
      this.props.toggleAsideCart("cart")
    }
  }

  render() {
    return (
      <li className={this.props.cart.length === 0 ? "col-6 col-md-4 col-lg-3" : "col-6 col-md-4 col-lg-4"} key={this.props.product.id} id={this.props.product.id}>
        <div className={`itemList itemList--container ` + (this.props.isInCart ? "itemList-active" : "")}>
          <Link to={`/produit/${this.props.product.identifier}`}>
            <header className="itemList--header">
              <img src={this.props.product.image} alt="" />
              <Eye className="eye-icon" />
            </header>
            <article className="itemList--content">
              {/* <h3>{this.props.product.translations[this.props.currentLocale].name}</h3> */}
              <h4 className="itemList--newpirce">CHF {this.props.product.price}</h4>
              <h5 className="itemList--price">au lieu de CHF {this.props.product.price}</h5>
            </article>
          </Link>
          <div className="btn--container btn--full-width">
            <button className="btn btn--outline" onClick={() => this.pushToCart(this.props.product)}>
              Ajouter au Panier
            </button>
            {this.props.cart.length !== 0 ? "" : <button className="btn btn--primary">Achetez maintenant</button>}
          </div>
        </div>
      </li>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cartReducer.cartItems,
    isAsideCartOpen: state.asideReducer.asideCartOpen,
    currentLocale: state.localeReducer.currentLocale,
    locale: state.localeReducer.locale
  }
}

const mapDispatchToProps = {
  addToCart,
  calTotalCart,
  toggleAsideCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsItemList)
