import { GET_PRODUCTS, FILTER_PRODUCTS_BY_MERCHAND, FETCH_CATEGORIES, FILTER_BY_CATEGORY, READ_PRODUCT } from "./types"

import axios from "axios"
const END_POINT = "/api"

export const fetchProducts = () => async dispatch => {
  axios
    .get(`${END_POINT}/products`)
    .then(response => {
      dispatch({
        type: GET_PRODUCTS,
        payload: response.data
      })
      localStorage.setItem("products", JSON.stringify(response.data))
    })
    .catch(error => {
      console.log("Error fetch product", error)
    })
}

export const fetchCategories = () => async dispatch => {
  axios
    .get(`${END_POINT}/categories`)
    .then(response => {
      dispatch({
        type: FETCH_CATEGORIES,
        payload: {
          categories: response.data
        }
      })
      localStorage.setItem("categories", JSON.stringify(response.data))
    })
    .catch(error => {
      console.log("Get error category", error)
    })
}

export const readProduct = productIdentifier => async (dispatch, getState) => {
  const products = getState().productsReducer.products
  let productItem = products.find(item => item.identifier === productIdentifier)
  dispatch({
    type: READ_PRODUCT,
    payload: {
      item: productItem
    }
  })
  localStorage.setItem("product", JSON.stringify(productItem))
}

export const filterByMerchant = merchant => async (dispatch, getState) => {
  let products = getState().productsReducer.products
  let objectList = []
  if (!merchant) {
    objectList = [...merchant]
  } else {
    objectList = products.filter(item => item.merchant_id === merchant.merchant_id)
  }
  dispatch({
    type: FILTER_PRODUCTS_BY_MERCHAND,
    payload: {
      merchant: merchant,
      items: objectList
    }
  })
  localStorage.setItem("filtered", JSON.stringify(objectList))
  localStorage.setItem("merchant", JSON.stringify(merchant))
}

export const filterByCategory = category => async (dispatch, getState) => {
  let products = getState().productsReducer.products
  let objectList = []
  if (!category) {
    objectList = [...products]
  } else {
    objectList = products.filter(item => item.category_id === category)
  }
  dispatch({
    type: FILTER_BY_CATEGORY,
    payload: {
      category: category,
      items: objectList
    }
  })
  localStorage.setItem("filtered", JSON.stringify(objectList))
  localStorage.setItem("category", JSON.stringify(category))
}
