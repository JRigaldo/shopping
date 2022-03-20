import React from "react"
import MasterCard from "../icons/logos/Matercard"
import Visa from "../icons/logos/Visa"
import Twint from "../icons/logos/Twint"
import Postfinance from "../icons/logos/Postfinance"
import Sunrise from "../icons/logos/Sunrise"
import Salt from "../icons/logos/Salt"
import Swisscom from "../icons/logos/Swisscom"

const logosInline = props => {
  return (
    <ul className="logosInline">
      <li>
        <MasterCard />
      </li>
      <li>
        <Visa />
      </li>
      <li>
        <Twint />
      </li>
      <li>
        <Postfinance />
      </li>
      <li>
        <Sunrise />
      </li>
      <li>
        <Salt />
      </li>
      <li>
        <Swisscom />
      </li>
    </ul>
  )
}

export default logosInline
