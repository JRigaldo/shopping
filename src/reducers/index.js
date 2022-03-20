import { createStore, applyMiddleware, compose, combineReducers } from "redux"
import thunk from "redux-thunk"
import ReducerProducts from "./reducer_products"
import ReducerCart from "./reducer_cart"
import ReducerAside from "./reducer_aside"
import ReducerLocale from "./reducer_locale"

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  combineReducers({
    productsReducer: ReducerProducts,
    cartReducer: ReducerCart,
    asideReducer: ReducerAside,
    localeReducer: ReducerLocale
  }),
  composeEnhancer(applyMiddleware(thunk))
)

export default store
