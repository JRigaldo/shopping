import React from "react"
import Cross from "../icons/cross"

const Badge = props => {
  const { item } = props

  return (
    <div className="badge badge--container badge--primary">
      <span className="bagde--item-bold">{item.name}</span>
      <span className="bagde--item-light bagde--item-dash">-</span>
      <span className="bagde--item-bold">{item.count}</span>
      <span className="bagde--item-light bagde--item-nb">x</span>
      <span className="bagde--item-light bagde--item-currency">CHF</span>
      <span className="bagde--item-bold bagde--item-price">{item.price}</span>
      <span className="badge--cross" onClick={() => removeFromCart(item)}>
        <Cross className="cross-icon" />
      </span>
    </div>
  )

  function removeFromCart(item) {
    props.callback(item)
  }
}

export default Badge
