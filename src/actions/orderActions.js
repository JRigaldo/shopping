import { CREATE_ORDER, CLEAR_CART } from "./types"
import axios from "axios"

const options = {
  headers: { "Content-type": "application/json" }
}

export const createOrder = order => dispatch => {
  axios
    .put(
      "/api/cart/put",
      {
        body: JSON.stringify(order)
      },
      options
    )
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: CREATE_ORDER,
        payload: {
          data
        }
      })
      localStorage.clear("cartItems")
      duspatch({
        type: CLEAR_CART,
        payload: {}
      })
    })
}

export const clearOrder = () => dispatch => {}
