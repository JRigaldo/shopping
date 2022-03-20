import React from "react"
import { connect } from "react-redux"
import CancelCircle from "../icons/cancel-circle"
import { toggleAside } from "../actions/asideActions"
import { changeLocale } from "../actions/localeActions"

const MobileLangNav = props => {
  return (
    <aside className={`mobile-menu ` + (props.isAsideLangOpen ? `aside-lang` : ``)}>
      {/* MOBILE NAVIGATION LANGUAGES */}
      <div className="mobile-menu--container">
        <div className="exit-menu" id="exit-menu-language" onClick={() => props.toggleAside("lang")}>
          <div>
            <CancelCircle width={30} height={30} />
          </div>
        </div>
        <nav className="mobile-menu--text">
          <ul>
            {props.locales.map(locale => {
              return (
                <li key={locale} className="nav--en">
                  <div onClick={() => props.changeLocale(locale)}>{locale}</div>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </aside>
  )
}

const mapStateToProps = state => {
  return {
    isAsideLangOpen: state.asideReducer.asideLangOpen,
    locales: state.localeReducer.locales
  }
}

const mapDispatchToProps = {
  toggleAside,
  changeLocale
}

export default connect(mapStateToProps, mapDispatchToProps)(MobileLangNav)
