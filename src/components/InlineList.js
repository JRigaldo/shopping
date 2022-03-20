import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchCategories, filterByCategory } from "../actions/productActions"

class InlineList extends Component {
  componentDidMount() {
    if (!this.props.categoryList || !this.props.categoryList.length) {
      this.props.fetchCategories()
    }
  }

  categoryActive(categoryId) {
    if (Number.isInteger(categoryId)) {
      let currentCategory = this.props.categoryList.find(item => item.id === categoryId)
      return currentCategory.id
    } else {
      return false
    }
  }

  renderCategories() {
    let productsCategories = this.props.categoryList
    if (productsCategories !== undefined) {
      return productsCategories.map((item, i) => (
        <li key={i} className={`btn btn--secondary ` + (this.categoryActive(this.props.category) === item.id ? `is-active` : ``)}>
          <button onClick={e => this.props.filterByCategory(item.id)}>{item.name}</button>
        </li>
      ))
    }
  }

  render() {
    return (
      <div className="inlinelist--container">
        <ul className="btn--container flex-wrap">{this.renderCategories()}</ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    category: state.productsReducer.category,
    categoryList: state.productsReducer.categories,
    products: state.productsReducer.products
  }
}

const mapDispatchToProps = {
  fetchCategories,
  filterByCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(InlineList)
