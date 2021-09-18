import React from "react"
import {Link} from "gatsby"
import ThemeToggler from "../components/themeToggler"

export default (props) => (
  <header>
    <h1 className="visually-hidden">Marco Amodio - Contenuto Principale - Main Content</h1>
    <div className="me">
      <Link title="Marco Amodio" aria-label="Marco Amodio" to="/">M</Link>
    </div>
    <div className="themeToggler">
      <ThemeToggler/>
    </div>
  </header>
)