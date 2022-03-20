import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchProducts, filterByMerchant } from "../actions/productActions"

class Options extends Component {
  constructor(props) {
    super(props)
    this.optionsRef = React.createRef()
    this.state = {
      selectOption: "-",
      showSelect: false
    }
  }

  toggleHandler(event) {
    event.stopPropagation()
    this.setState(state => ({
      showSelect: !state.showSelect
    }))
    const handler = event => {
      if (this.state.showSelect == true && !this.optionsRef.current.contains(event.target)) {
        this.setState(state => ({
          showSelect: !state.showSelect
        }))
      }
    }
    document.addEventListener("mousedown", handler)
    return () => {
      document.removeEventListener("mousedown", handler)
    }
  }

  onSelect(event) {
    event.stopPropagation()
    let target = event.target.parentNode.firstElementChild
    if (target.value) {
      this.setState(state => ({
        selectOption: target.name,
        showSelect: !state.showSelect
      }))
      this.props.products.forEach(actionFilter => {
        if (actionFilter.identifier === target.value) {
          this.props.filterByMerchant(actionFilter)
        }
      })
    }
  }

  render() {
    return (
      <div className="select-box">
        <div className="is-selected" onClick={this.toggleHandler.bind(this)}>
          {this.props.merchant.name ? this.props.merchant.name : this.state.selectOption}
        </div>
        <div className={"options--container " + (this.state.showSelect ? "is-active" : "")} ref={this.optionsRef}>
          {this.props.products.map(option => {
            return (
              <div className="option" key={option.identifier}>
                <input type="radio" className="radio" id={option.identifier} value={option.identifier} name={option.name} />
                <label htmlFor={option.identifier} onClick={this.onSelect.bind(this)}>
                  {option.name}
                </label>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.productsReducer.products,
    merchant: state.productsReducer.merchant
  }
}

const mapDispatchToProps = {
  fetchProducts,
  filterByMerchant
}

export default connect(mapStateToProps, mapDispatchToProps)(Options)
