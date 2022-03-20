import React from "react"
import { connect } from "react-redux"
import Cart from "../containers/Cart"
import CancelCircle from "../icons/cancel-circle"
import { toggleAsideCart } from "../actions/asideActions"

const MobileCartNav = props => {
  return (
    <aside className={`mobile-menu mobile-cart ` + (props.isAsideCartOpen ? `aside-cart` : ``)}>
      <div className="mobile-menu--container">
        <div className="exit-menu" id="exit-menu-cart" onClick={() => props.toggleAsideCart("cart")}>
          <div>
            <CancelCircle width={30} height={30} />
          </div>
        </div>
        <Cart />
      </div>
    </aside>
  )
}

const mapStateToProps = state => {
  return {
    isAsideCartOpen: state.asideReducer.asideCartOpen
  }
}

const mapDispatchToProps = {
  toggleAsideCart
}

export default connect(mapStateToProps, mapDispatchToProps)(MobileCartNav)
