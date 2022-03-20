import React from "react"
import { Link } from "react-router-dom"

const Button = props => {
  return <button className={props.className}>{props.link ? <Link to={`${props.link}`}>{props.text}</Link> : props.text}</button>
}

export default Button
