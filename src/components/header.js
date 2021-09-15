import React from "react"
import {Link} from "gatsby"
import ThemeToggler from "../components/themeToggler"

export default (props) => (
  <nav className="navigation"> 
    <Link to="/contact">Contact</Link>
    <ThemeToggler/>
  </nav>
)