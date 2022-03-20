import React from "react"
import ReactDOM from "react-dom"

import { Provider } from "react-redux"
import store from "./reducers"

import App from "./containers/App"
import "./scss/index.scss"

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
