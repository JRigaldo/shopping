import { ADD_TO_CART, REMOVE_FROM_CART, TOTALCART, ITEM_COUNT_DOWN, ITEM_COUNT_UP } from "../actions/types"

const initialStateCart = {
  cartItems: JSON.parse(localStorage.getItem("cartItems") || "[]"),
  totalPrice: JSON.parse(localStorage.getItem("totalCart" || "0")),
  countUp: 0,
  countDown: 0
}

export default function (state = initialStateCart, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: action.payload.cartItems
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: action.payload.cartItems
      }
    case TOTALCART:
      return {
        ...state,
        totalPrice: action.payload.totalPrice
      }
    case ITEM_COUNT_UP:
      return {
        ...state,
        countUp: action.payload.cartItems
      }
    case ITEM_COUNT_DOWN:
      return {
        ...state,
        countDown: action.payload.cartItems
      }
  }
  return state
}
