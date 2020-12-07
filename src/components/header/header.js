import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import s from "../../styles/header.module.css"
import logo from "./modshopLogo@2x.png"

const Header = ({ page }) => (
  <header className={s.header}>
    <Link to="/" className={s.header_imgLink}>
      <img src={logo} alt="logo" className={s.header_imgLink__img} />
    </Link>
    <div className={s.header_links}>
      <p className={s.header_links__link}>LOG IN</p>
      <Link
        className={`${s.header_links__link} ${page === "register" && s.blackAndNoHover}`}
        to={page === 'register' ? undefined : "/register/"}
      >
        REGISTER
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
