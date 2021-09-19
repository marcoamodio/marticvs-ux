import * as React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import "../styles/scss/main.scss"

// markup
const IndexPage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>UX Engineer | Marco Amodio</title>
      </Helmet>
      <Layout />
    </div>

  )
}

export default IndexPage
