import React, { useEffect, useState } from "react"
import { toggleAside, toggleAsideCart } from "../actions/asideActions"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

import Instagram from "../icons/instagram"
import LinkedIn from "../icons/linkedin"
import Twitter from "../icons/twitter"
import Whatsapp from "../icons/whatsapp"
import Youtube from "../icons/youtube"
import Multilang from "../icons/multilang"
import Share from "../icons/share"
import Cart from "../icons/cart"
import Logo from "../icons/logos/logo"

import Chat from "../components/Chat"

export const Navbar = props => {
  return (
    <div className="navbar--header">
      {/* LOGO SITE */}
      <span className="navbar--logo">
        <Link to="/">
          <Logo />
        </Link>
      </span>
      {/* DESKTOP NAVBAR ICONS */}
      <nav className="navbar--icons hidden-medium-down">
        <ul>
          <li>
            <a href="#" target="_blank" className="facebook-icon">
              <Instagram width={30} height={30} />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" className="facebook-icon">
              <LinkedIn width={30} height={30} />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" className="facebook-icon">
              <Twitter width={30} height={30} />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" className="facebook-icon">
              <Whatsapp width={30} height={30} />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" className="facebook-icon">
              <Youtube width={30} height={30} />
            </a>
          </li>
        </ul>
      </nav>
      {/* MOBILE NAVBAR ICONS */}
      <div className={`navbar--toggle ` + (props.isAsideLangOpen ? `lang-open` : ``)} id="header-icon-language" onClick={() => props.toggleAside("lang")}>
        <div className="button">
          <Multilang />
        </div>
      </div>
      <div className={`navbar--toggle hidden-medium-up ` + (props.isAsideSocialOpen ? `social-open` : ``)} id="header-icon-social" onClick={() => props.toggleAside("social")}>
        <div className="button">
          <Share />
        </div>
      </div>
      <Chat responsiveDesign={`hidden-medium-down`} />
      <div className={`navbar--toggle navbar--toggle-large hidden-medium-up ` + (props.isAsideCartOpen ? `cart-open ` : ``) + (props.cartItems.length > 0 ? `cart-active` : `cart-hidden`)} id="header-icon-cart" onClick={() => props.toggleAsideCart("cart")}>
        <div className="button counter--container">
          {props.cartItems.length > 0 ? (
            <span className="counter--icon">
              <span className="counter--number">{props.cartItems.reduce((a, c) => a + c.count, 0)}</span>
            </span>
          ) : (
            ""
          )}
          <Cart />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    isAsideOpen: state.asideReducer.asideOpen,
    isAsideSocialOpen: state.asideReducer.asideSocialOpen,
    isAsideCartOpen: state.asideReducer.asideCartOpen,
    isAsideLangOpen: state.asideReducer.asideLangOpen,
    cartItems: state.cartReducer.cartItems
  }
}

const mapDispatchToProps = {
  toggleAside,
  toggleAsideCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
