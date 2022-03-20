import React from "react"

const Logo = props => {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="182" height="41" viewBox="0 0 182 41" {...props}>
        <text id="ID_Shopping" data-name="ID Shopping" transform="translate(91 30)" fill="#ff7600" fontSize="30" fontFamily="Nunito-Black, Nunito" fontWeight="800">
          <tspan x="-90.075" y="0">
            ID
          </tspan>
          <tspan y="0" fill="#707070">
            {" "}
          </tspan>
          <tspan y="0" fill="#000">
            Shopping
          </tspan>
        </text>
      </svg>
    </div>
  )
}

export default Logo
