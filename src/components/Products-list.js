import React, { Component } from "react"
import { connect } from "react-redux"
import ProductsItemList from "./Porducts-itemList"

class ProductsList extends Component {
  isProductInCart(product) {
    if (this.props.cart.length) {
      let resultProductInCart = this.props.cart.find(item => item.identifier === product.identifier)
      return !!resultProductInCart
    } else {
      return false
    }
  }

  render() {
    return (
      <div>
        <ul className="row-top gutter">
          {this.props.productsFilter.map(product => {
            return <ProductsItemList key={product.identifier} product={product} isInCart={this.isProductInCart(product)} />
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    productsFilter: state.productsReducer.filter,
    cart: state.cartReducer.cartItems
  }
}

export default connect(mapStateToProps)(ProductsList)
