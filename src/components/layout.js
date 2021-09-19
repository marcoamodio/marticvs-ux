import React from "react"
// import { Link } from "gatsby"
import Header from "../components/header"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedinIn,
  faDribbble,
} from '@fortawesome/free-brands-svg-icons'
import { Row } from "react-bootstrap"

export default ({ children }) => {
  return (
    <div>
      <Header />
      <main className="container">
        <h2 className="visually-hidden">Contenuto navigazione</h2>
        <Row>
          <div className="col-md-6">
            <div className="marco">
              <h2>Hello pixels</h2>
              <p>I'm Marco Amodio. As <mark>UX Engineer</mark> I build design systems, web interfaces and components library.</p>
              <p>I contribute to <mark className="bg-green">open source projects</mark>, and in my free time I broaden my knowledge in ancient history and philosophy. Self-taught study. </p>
              {/* <h2 className="pt-5">Public works</h2> */}
              {/* <p> <a title="marcoamodio@protonmail.com" href="mailto:marcoamodio@protonmail.com">ask portfolio </a></p> */}

            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div className="address">
              <div className="find-me mb-3">.. and where you can find me</div>
              <a className="social" title="profilo Dribbble" target="_blank" href="https://dribbble.com/marcoamodio88">
                <FontAwesomeIcon icon={faDribbble} />
              </a>
              <a className="social" title="profilo github" target="_blank" href="https://github.com/marcoamodio">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a className="social" title="profilo linkedln" target="_blank" href="https://www.linkedin.com/in/marco-amodio-30639158/">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
        </Row>
      </main>
    </div>
  )
}