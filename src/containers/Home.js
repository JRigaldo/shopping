import React, { Component } from "react"
import Container from "../components/Container"

import Cart from "./Cart"
import Banner from "../components/Banner"
import Options from "../components/Options"
import InlineList from "../components/InlineList"
import ProductsList from "../components/Products-list"

import { connect } from "react-redux"
import { fetchProducts } from "../actions/productActions"

class Home extends Component {
  componentDidMount() {
    if (!this.props.products.length) {
      this.props.fetchProducts()
    }
  }

  render() {
    return (
      <Container wide={false} transition={true}>
        <Banner />
        <div className="row-top">
          <div className="col-12 col-md-12 col-lg-4">
            <Options name="merchand" />
          </div>
          <div className="col-12 col-md-12 col-lg-8">
            <InlineList name="category" />
          </div>
        </div>
        {!this.props.products ? (
          <div className="row-center">
            <div className="col-md-12">
              <div>Loading</div>
            </div>
          </div>
        ) : (
          <div className="row-top">
            <div className={`smooth-transition ` + (this.props.cart.length === 0 ? "col-12 col-md-12 col-lg-12" : "col-12 col-md-12 col-lg-8 ")}>
              <ProductsList />
            </div>
            <div className={`smooth-transition hidden-medium-down ` + (this.props.cart.length === 0 ? "cart-empty" : "col-md-4 col-lg-4 full-height sticky-container")}>
              <Cart />
            </div>
          </div>
        )}
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.productsReducer.products,
    cart: state.cartReducer.cartItems
  }
}

const mapDispatchToProps = {
  fetchProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
