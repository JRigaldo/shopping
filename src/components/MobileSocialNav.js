import React from "react"
import { connect } from "react-redux"
import Instagram from "../icons/instagram"
import LinkedIn from "../icons/linkedin"
import Twitter from "../icons/twitter"
import Whatsapp from "../icons/whatsapp"
import Youtube from "../icons/youtube"
import Facebook from "../icons/facebook"
import CancelCircle from "../icons/cancel-circle"
import { toggleAside } from "../actions/asideActions"

const MobileSocialNav = props => {
  return (
    <aside className={`mobile-menu ` + (props.isAsideSocialOpen ? `aside-social` : ``)}>
      {/* MOBILE NAVIGATION SOCIAL */}
      <div className="mobile-menu--container">
        <div className="exit-menu" id="exit-menu-social" onClick={() => props.toggleAside("social")}>
          <div>
            <CancelCircle width={30} height={30} />
          </div>
        </div>
        <nav className="mobile-menu--icon">
          <ul>
            <li className="mobile-menu--icon-item">
              <a href="https://www.facebook.com/idmobilesa" target="_blank" className="facebook-icon">
                <Facebook width={30} height={30} />
              </a>
            </li>
            <li className="mobile-menu--icon-item">
              <a href="https://www.youtube.com/channel/UCc1LiNnRA9EWoOIAM8BKJgQ" target="_blank" className="youtube-icon">
                <Youtube width={30} height={30} />
              </a>
            </li>
            <li className="mobile-menu--icon-item">
              <a href="https://twitter.com/idmobile_sa" target="_blank" className="twitter-icon">
                <Twitter width={30} height={30} />
              </a>
            </li>
            <li className="mobile-menu--icon-item">
              <a href="https://www.linkedin.com/company/id-mobile-sa/" target="_blank" className="linkedIn-icon">
                <LinkedIn width={30} height={30} />
              </a>
            </li>
            <li className="mobile-menu--icon-item">
              <a href="https://www.linkedin.com/company/id-mobile-sa/" target="_blank" className="linkedIn-icon">
                <Instagram width={30} height={30} />
              </a>
            </li>
            <li className="mobile-menu--icon-item">
              <a href="https://www.linkedin.com/company/id-mobile-sa/" target="_blank" className="linkedIn-icon">
                <Whatsapp width={30} height={30} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  )
}

const mapStateToProps = state => {
  return {
    isAsideSocialOpen: state.asideReducer.asideSocialOpen
  }
}

const mapDispatchToProps = {
  toggleAside
}

export default connect(mapStateToProps, mapDispatchToProps)(MobileSocialNav)
