import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { connect } from "react-redux"
import { toggleAside } from "../actions/asideActions"
import Home from "./Home"
import CheckoutForm from "./CheckoutForm"
import Item from "../components/Item"
import Navbar from "../components/Navbar"
import MobileSocialNav from "../components/MobileSocialNav"
import MobileLangNav from "../components/MobileLangNav"
import MobileCartNav from "../components/MobileCartNav"
import { CSSTransition, TransitionGroup } from "react-transition-group"

class App extends Component {
  render() {
    return (
      <div className={`app--container with-sidebar ` + (this.props.isAsideSocialOpen || this.props.isAsideLangOpen ? `is-open` : ``) + (this.props.isAsideCartOpen ? `is-cartOpen` : ``)}>
        <Router>
          <Navbar />
          <MobileSocialNav />
          <MobileLangNav />
          <MobileCartNav />
          <div className="site-cover" onClick={() => this.props.toggleAside("closeAll")}></div>
          <Route
            render={({ location }) => (
              <TransitionGroup>
                <CSSTransition key={location.key} timeout={450} classNames="fade">
                  <Switch location={location}>
                    <Route exact path="/" component={Home} />
                    <Route path="/checkout" component={CheckoutForm} />
                    <Route exact path="/produit/:identifier" component={Item} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
        </Router>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAsideOpen: state.asideReducer.asideOpen,
    isAsideSocialOpen: state.asideReducer.asideSocialOpen,
    isAsideCartOpen: state.asideReducer.asideCartOpen,
    isAsideLangOpen: state.asideReducer.asideLangOpen
  }
}

const mapDispatchToProps = {
  toggleAside
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
