// componentDidMount() {
//   this.getProducts()
// }

// getProducts() {
//   axios.get(`/api/products`).then(products => {
//     this.setState({ items: products.data, loading: false })
//   })
// }

                <header className="item--header">
                  <img src={item.image} alt="" />
                </header>
                <article className="item--content">
                  <h3>{item.title}</h3>
                  <h4>
                    {item.currency} <span>{item.price}</span>
                  </h4>
                  {/* <p className="item--text">
                    <span>
                      Avec code promo{" "}
                      <strong>
                        {this.props.product.currency} {this.props.product.promo}
                      </strong>
                    </span>
                    <span>
                      au lieu de {this.props.currency} {this.props.product.poupercentage}%
                    </span>
                  </p> */}
                  {/* {console.log(this.props.productItem.identifier)} */}
                  {/* {console.log(this.props.params.id)} */}
                  <div className="item--buttons">
                    <Button classlevel="btn-primary" text="Ajouter au Panier" />
                    <Button classlevel="btn-primary" text="Achetez maintenant" />
                  </div>
                </article>

                 <header className="item--header">
                  <img src={this.props.productItem.image} alt="" />
                </header>
                <article className="item--content">
                  <h3>{this.props.productItem.title}</h3>
                  <h4>
                    {this.props.productItem.currency} <span>{this.props.productItem.price}</span>
                  </h4>
                  {/* <p className="item--text">
                    <span>
                      Avec code promo{" "}
                      <strong>
                        {this.props.product.currency} {this.props.product.promo}
                      </strong>
                    </span>
                    <span>
                      au lieu de {this.props.currency} {this.props.product.poupercentage}%
                    </span>
                  </p> */}
                  {/* {console.log(this.props.productItem.identifier)} */}
                  {/* {console.log(this.props.params.id)} */}
                  <div className="item--buttons">
                    <Button classlevel="btn-primary" text="Ajouter au Panier" />
                    <Button classlevel="btn-primary" text="Achetez maintenant" />
                  </div>
                </article>


                // export const filterByCategory = (productsCategories, category) => async dispatch => {
//   // console.log(productsCategories)
//   // console.log(category)
//   let objectList = []
//   productsCategories.forEach(element => {
//     // console.log(element.categories.id)
//     // console.log(category.id)
//     if (category === "") {
//       objectList.push(productsCategories)
//     } else if (element.categories.id === category.id) {
//       objectList.push(element)
//     }
//   })
//   console.log(objectList)
//   axios
//     .get(`/api/products?category=${identifier}`)
//     .then(response => {
//       dispatch({
//         type: FILTER_BY_CATEGORIES,
//         payload: {
//           category: category === "" ? productsCategories : objectList,
//           items: response.data
//         }
//       })
//     })
//     .catch(error => {
//       console.log("error", error)
//     })
// }

import React from "react"
import Eye from "../icons/eye"
import { Link } from "react-router-dom"

const ProductsItemList = props => {
  const { product, countItems } = props

  return (
    <li className={countItems.length === 0 ? "col-3 col-md-3 col-lg-3" : "col-4 col-md-4 col-lg-4"} key={product.id} id={product.id}>
      {/* <div className="itemList itemList--container is-active"> */}
      <div className="itemList itemList--container">
        <Link to={`/produit/${product.identifier}`}>
          <header className="itemList--header">
            <img src={product.image} alt="" />
            <Eye className="eye-icon" />
          </header>
          <article className="itemList--content">
            <h3>{product.name}</h3>
            <h4>
              CHF <span>{product.price}</span>
            </h4>
            <p className="itemList--text">
              <span>
                Avec code promo <strong>CHF {product.price}</strong>
              </span>
            </p>
          </article>
        </Link>
        <div className="btn--container">
          <button className="btn btn--outline" onClick={() => addToCart(product)}>
            Ajouter au Panier
          </button>
          {countItems.length !== 0 ? "" : <button className="btn btn--primary">Achetez maintenant</button>}
        </div>
      </div>
    </li>
  )

  function addToCart(product) {
    props.callback(product)
  }
}

export default ProductsItemList



  // pushToCart(product) {
  //   this.props.addToCart(product)
  //   this.props.addKeyToProduct(product)
  //   // const newProducts = this.props.productsFilter.map(product => {
  //   //   return { ...product, count: 0 }
  //   // })

  //   // this.setState({ products: newProducts })

  //   // console.log(this.setState({ products: newProducts }))

  //   // if (this.props.cartItems !== undefined) {
  //   //   this.props.cartItems.map(item => {
  //   //     console.log(item)
  //   //     if (item.count && this.state.products !== undefined) {
  //   //       this.state.products.forEach(product => {
  //   //         if (product.count) {
  //   //           console.log(product)
  //   //         }
  //   //       })
  //   //     }
  //   //   })
  //   // }
  // }


  changeCount() {
    // console.log(this.props.product.identifier)
    // this.props.cart.find(item => {
    //   console.log(item.identifier)
    // })
    const cartProduct = this.props.cart.find(item => item.identifier === this.props.product.identifier)
    console.log(cartProduct)
    return this.props.cart.length > 0 ? (
      <div className="btn--container btn--counter">
        <button disabled={cartProduct.count === cartProduct.stock} className="btn" onClick={() => this.props.countUp(this.props.product)}>
          <Plus width={30} height={30} />
        </button>
        <input type="text" value={cartProduct.count} disabled />
        <button disabled={!cartProduct.count} className="btn" onClick={() => this.props.countDown(this.props.product)}>
          <Minus width={30} height={30} />
        </button>
      </div>
    ) : (
      ""
    )
  }