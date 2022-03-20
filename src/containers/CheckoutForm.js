import React, { useState } from "react"
import ArrowBack from "../icons/arrow-back"
import RadioChecked from "../icons/radio-checked"
import RadioUnchecked from "../icons/radio-unchecked"
import MasterCard from "../icons/logos/Matercard"
import Visa from "../icons/logos/Visa"
import Twint from "../icons/logos/Twint"
import Postfinance from "../icons/logos/Postfinance"
import Sunrise from "../icons/logos/Sunrise"
import Salt from "../icons/logos/Salt"
import Swisscom from "../icons/logos/Swisscom"
import { Link } from "react-router-dom"
import Container from "../components/Container"

const CheckoutForm = props => {
  const [inputValues, setInputValues] = useState({
    firstname: "",
    lastname: ""
  })

  function handleFocus(input) {
    if (input.target) {
      input.target.parentNode.classList.add("is-focused", "has-label")
    }
  }

  function handleChange(input) {
    if (input.target.value !== "") {
      input.target.parentNode.classList.add("has-label")
    }
    const { name, value } = input.target
    setInputValues({ ...inputValues, [name]: value })
  }

  function handleBlur(input) {
    if (input.target.value === "") {
      input.target.parentNode.classList.remove("has-label")
    }
    input.target.parentNode.classList.remove("is-focused")
  }

  function handleSubmit(e) {
    e.preventDefault()
    props.callback(inputValues)
  }

  return (
    <Container wide={false} transition={true}>
      <div className="checkoutForm">
        <div className="checkoutForm--container">
          <Link to="/">
            <ArrowBack width="40" height="35" className="item--arrowBack" />
          </Link>
          <form className="form--container">
            {/* <img src={require("../../img/checkout.png")} alt="" /> */}
            <div className="row-top">
              <div className="col-md-12">
                <span>Entrez votre mobile pour recevoir votre reçu par par SMS</span>
                <div className="field">
                  <label htmlFor="firstname" className="field-label">
                    <small>Tapez votre numéro de mobile</small>
                  </label>
                  <input type="text" className="field-input" id="firstname" name="firstname" required onFocus={handleFocus} onChange={handleChange} onBlur={handleBlur} />
                  <div className="error-input">
                    <div className="message-error firstname-empty">Field empty</div>
                    <div className="message-error firstname-invalid">Invalid field</div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="row-center">
                  <div className="col-md-3">
                    <div className="radio--container">
                      <input type="radio" name="mastercard" value="mastercard" value="off" />
                      <RadioChecked className="radio--icon radio--icon-checked" width={"30px"} height={"30px"} />
                      <RadioUnchecked className="radio--icon radio--icon-unChecked" width={"30px"} height={"30px"} />
                      <span>
                        <MasterCard className="radio--pic" width={"30px"} height={"30px"} />
                      </span>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="radio--container">
                      <input type="radio" name="mastercard" value="mastercard" value="off" />
                      <RadioChecked className="radio--icon radio--icon-checked" width={"30px"} height={"30px"} />
                      <RadioUnchecked className="radio--icon radio--icon-unChecked" width={"30px"} height={"30px"} />
                      <span>
                        <Visa className="radio--pic" width={"30px"} height={"30px"} />
                      </span>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="radio--container">
                      <input type="radio" name="mastercard" value="mastercard" value="off" />
                      <RadioChecked className="radio--icon radio--icon-checked" width={"30px"} height={"30px"} />
                      <RadioUnchecked className="radio--icon radio--icon-unChecked" width={"30px"} height={"30px"} />
                      <span>
                        <Twint className="radio--pic" width={"30px"} height={"30px"} />
                      </span>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="radio--container">
                      <input type="radio" name="mastercard" value="mastercard" value="off" />
                      <RadioChecked className="radio--icon radio--icon-checked" width={"30px"} height={"30px"} />
                      <RadioUnchecked className="radio--icon radio--icon-unChecked" width={"30px"} height={"30px"} />
                      <span>
                        <Postfinance propsClass="radio--pic" width={"30px"} />
                      </span>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="radio--container">
                      <input type="radio" name="mastercard" value="mastercard" value="off" />
                      <RadioChecked className="radio--icon radio--icon-checked" width={"30px"} height={"30px"} />
                      <RadioUnchecked className="radio--icon radio--icon-unChecked" width={"30px"} height={"30px"} />
                      <span>
                        <Sunrise className="radio--pic" width={"30px"} height={"30px"} />
                      </span>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="radio--container">
                      <input type="radio" name="mastercard" value="mastercard" value="off" />
                      <RadioChecked className="radio--icon radio--icon-checked" width={"30px"} height={"30px"} />
                      <RadioUnchecked className="radio--icon radio--icon-unChecked" width={"30px"} height={"30px"} />
                      <span>
                        <Salt className="radio--pic" width={"30px"} height={"30px"} />
                      </span>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="radio--container">
                      <input type="radio" name="mastercard" value="mastercard" value="off" />
                      <RadioChecked className="radio--icon radio--icon-checked" width={"30px"} height={"30px"} />
                      <RadioUnchecked className="radio--icon radio--icon-unChecked" width={"30px"} height={"30px"} />
                      <span>
                        <Swisscom className="radio--pic" width={"30px"} height={"30px"} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="btn--container">
                  <button className="btn btn--primary" type="submit">
                    Order
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Container>
  )
}

export default CheckoutForm
