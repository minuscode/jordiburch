import React from "react"
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import favicon from '../components/Favicon/favicon.png'
import Header from '../components/Header'
import("../styles/style.scss")

const TemplateWrapper = ({ children }) => (
  <div className="container">
    <Helmet
      title="Jordi Burch"
      meta={[
        { name: 'description', content: 'Barcelona, Spain, 1979. Jordi is now living in Sao Paulo, Brazil. With a special interest on building human touching stories, he’s always with his head full of ideas and, as he likes to call his future work, “novels”.' },
        { name: 'keywords', content: 'Jordi, Burch, Fotografia, Photography, Art, Brasil, Portugal' },
        { name: 'author', content: 'Jordi Burch' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      ]}
      link={[
        { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
      ]}
    />
    
    <Header />
    <div
      className="wrapper"
    >
      {children}
      <p className="footer">Jordi Burch - 2020</p>
      <p className="footer bot-space"><a href="mailto:mail@jordiburch.com">mail@jordiburch.com</a></p>
    </div>
  </div>
)


TemplateWrapper.propTypes = {
  children: PropTypes.object,
}

export default TemplateWrapper
