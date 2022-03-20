import React, { Component } from "react"
import Container from "../components/Container"
import Button from "./Button"
import ArrowBack from "../icons/arrow-back"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { readProduct } from "../actions/productActions"
import { addToCart, calTotalCart, countUp, countDown } from "../actions/cartActions"
import { toggleAsideCart } from "../actions/asideActions"
import Cart from "../containers/Cart"
import Plus from "../icons/plus"
import Minus from "../icons/minus"

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

class Item extends Component {
  componentDidMount() {
    this.props.readProduct(this.props.match.params.identifier)
  }

  pushToCart(product) {
    console.log(product)
    this.props.addToCart(product)
    this.props.calTotalCart()
    if (this.props.cart.length === 0) {
      this.props.toggleAsideCart("cart")
    }
  }

  changeCount(product) {
    let productInCart = this.props.cart.find(item => item.identifier === product.identifier)
    return productInCart ? (
      <div className="btn--container btn--counter">
        <button disabled={productInCart.count === productInCart.stock} className="btn" onClick={() => this.props.countUp(this.props.product)}>
          <Plus width={30} height={30} />
        </button>
        <input type="text" value={productInCart.count} disabled />
        <button disabled={!productInCart.count} className="btn" onClick={() => this.props.countDown(this.props.product)}>
          <Minus width={30} height={30} />
        </button>
      </div>
    ) : (
      ""
    )
  }

  render() {
    return (
      <Container wide={false} transition={true}>
        <div className="row-top full-height">
          <div className={`smooth-transition ` + (this.props.cart.length === 0 ? `col-md-12 col-lg-12` : `col-md-8 col-lg-8`)}>
            <div className="item">
              <div className="item--container">
                <Link to="/">
                  <ArrowBack width="40" height="35" className="item--arrowBack" />
                </Link>
                <header className="item--header">
                  <Swiper spaceBetween={0} slidesPerView={1} pagination={{ clickable: true }} onSlideChange={() => console.log("slide change")} onSwiper={swiper => console.log(swiper)}>
                    <SwiperSlide>
                      <img src={this.props.product.image} alt="this.props.product.name" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={this.props.product.image} alt="this.props.product.name" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={this.props.product.image} alt="this.props.product.name" />
                    </SwiperSlide>
                  </Swiper>
                </header>
                <article className="item--content">
                  {/* <h1>{this.props.product.translations[this.props.currentLocale].name}</h1> */}
                  <h1>{this.props.product.name}</h1>
                  <h4>
                    {this.props.product.currency} <span>{this.props.product.price}</span>
                  </h4>
                  <p className="item--text">
                    <span>
                      <strong>Au lieu de {this.props.product.price}</strong>
                    </span>
                  </p>
                </article>
                <div className="btn--container btn--margin">
                  <button className="btn btn--outline" onClick={() => this.pushToCart(this.props.product)}>
                    Ajouter au Panier
                  </button>

                  {this.props.cart.length === 0 ? <Button className="btn btn--primary" text="Achetez maintenant" /> : ""}
                </div>
              </div>
              {this.changeCount(this.props.product)}
            </div>
          </div>
          <div className={`smooth-transition hidden-medium-down ` + (this.props.cart.length === 0 ? `cart-empty ` : `col-md-4 col-lg-4 full-height sticky-container`)}>
            <Cart />
          </div>
        </div>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    product: state.productsReducer.product,
    cart: state.cartReducer.cartItems,
    isAsideCartOpen: state.asideReducer.asideCartOpen,
    countUp: state.cartReducer.countUp,
    countDown: state.cartReducer.countDown,
    currentLocale: state.localeReducer.currentLocale
  }
}

const mapDispatchToProps = {
  readProduct,
  addToCart,
  calTotalCart,
  toggleAsideCart,
  countUp,
  countDown
}

export default connect(mapStateToProps, mapDispatchToProps)(Item)
