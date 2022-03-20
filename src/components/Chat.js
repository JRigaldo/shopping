import React from "react"
import Info from "../icons/info"

const Chat = props => {
  return (
    <div className={`chat--button ` + props.responsiveDesign}>
      <div className="button">
        <span>Des questions ?</span> <Info />
      </div>
    </div>
  )
}

export default Chat
