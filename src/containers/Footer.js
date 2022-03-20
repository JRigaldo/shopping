import React from "react"

import Idmobile from "../icons/idmobile"
import Button from "../components/Button"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer--logo">
        <Idmobile />
      </div>
      <div className="btn--container">
        <Button className="btn btn--accent" text="info@idmobile.ch" />
        <Button className="btn btn--accent" text="+41 (0)848 1234 00" />
      </div>
      <div className="footer--adress">
        <address>
          <span className="footer--adress-title">ID Mobile S.A.,</span> Route Industrielle 4, Z.I. Rio Gredon, 1806 St-Légier, Suisse
        </address>
      </div>
    </footer>
  )
}

export default Footer
