import React from "react"
import Chat from "../components/Chat"
import LogosInline from "../components/LogosInline"
import Footer from "../containers/Footer"
function Container(props) {
  return (
    <div className={props.transition ? "transition-container" : ""}>
      <div>
        <main>
          <section>
            <div className={"container " + (props.wide ? "" : "container--simple")}>{props.children}</div>
          </section>
          {/* <Chat responsiveDesign={`hidden-medium-up`} /> */}
          <Chat responsiveDesign={`hidden-medium-up`} />
          <LogosInline />
          <Footer />
        </main>
      </div>
    </div>
  )
}

export default Container
