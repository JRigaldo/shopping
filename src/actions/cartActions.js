import { ADD_TO_CART, REMOVE_FROM_CART, TOTALCART, ITEM_COUNT_DOWN, ITEM_COUNT_UP } from "./types"

import axios from "axios"
const END_POINT = "/api"

// PRROBLEME URL STATUS 'OK' MEME SI C'EST PAS NIKE-STORE
export const addToCart = product => async (dispatch, getState) => {
  let cartItems = getState().cartReducer.cartItems.slice()
  let alreadyExists = false
  cartItems.forEach(item => {
    if (item.identifier === product.identifier) {
      alreadyExists = true
      item.count++
    }
  })
  if (!alreadyExists) {
    cartItems.push({ ...product, count: 1 })
  }
  cartItems.forEach(item => {
    if (item.identifier === product.identifier) {
      axios
        .put(`${END_POINT}/cart/put/nike-store/${item.identifier}/1?quantity=${item.count}`)
        .then(response => {
          console.log("PUT repsonse sucess", response)
        })
        .catch(error => console.log("PUT error", error))
    }
  })
  dispatch({
    type: ADD_TO_CART,
    payload: {
      cartItems
    }
  })
  localStorage.setItem("cartItems", JSON.stringify(cartItems))
}

// PRROBLEME URL STATUS 'OK' MEME SI C'EST PAS NIKE-STORE
export const removeFromCart = product => async (dispatch, getState) => {
  const cartItems = getState()
    .cartReducer.cartItems.slice()
    .filter(item => item.identifier !== product.identifier)
  axios
    .delete(`${END_POINT}/cart/delete/nike-store/${product.identifier}/1?quantity=${product.count}`)
    .then(response => {
      if (response.statusText === "OK") {
        console.log("DELETE response", response)
      }
    })
    .catch(error => {
      console.log("DELETE error", error)
    })
  dispatch({
    type: REMOVE_FROM_CART,
    payload: {
      cartItems
    }
  })
  localStorage.setItem("cartItems", JSON.stringify(cartItems))
}

export const calTotalCart = () => async (dispatch, getState) => {
  let cartItems = getState().cartReducer.cartItems
  const cartItemTotalPrice = cartItems.reduce((a, c) => a + c.price * c.count, 0)
  let totalPrice = Number.parseFloat(cartItemTotalPrice).toFixed(2)
  if (totalPrice) {
    dispatch({
      type: TOTALCART,
      payload: {
        totalPrice
      }
    })
  } else {
    console.log("CART TOTAL ERROR", totalPrice)
  }
  localStorage.setItem("totalCart", totalPrice)
}

export const countUp = product => async (dispatch, getState) => {
  let cartItems = getState().cartReducer.cartItems.slice()
  console.log("cartItems", getState().cartReducer)
  const productIncartIndex = cartItems.findIndex(item => item.identifier === product.identifier)
  if (productIncartIndex > -1) {
    const consumeredProduct = cartItems[productIncartIndex]

    if (consumeredProduct.count < product.stock) {
      consumeredProduct.count++
    }
  }
  dispatch({
    type: ITEM_COUNT_UP,
    payload: {
      cartItems
    }
  })
}

export const countDown = product => async (dispatch, getState) => {
  let cartItems = getState().cartReducer.cartItems.slice()
  const productIncartIndex = cartItems.findIndex(item => item.identifier === product.identifier)
  if (productIncartIndex > -1) {
    const consumeredProduct = cartItems[productIncartIndex]

    if (consumeredProduct.count > 0) {
      consumeredProduct.count--
    }
  }
  dispatch({
    type: ITEM_COUNT_DOWN,
    payload: {
      cartItems
    }
  })
}
