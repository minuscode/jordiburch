import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import "../styles/style.scss"

const TemplateWrapper = ({ children }) => (
  <div className="container">
    <Helmet
      title="Jordi Burch"
      meta={[
        {
          name: 'description', content: 'Barcelona, Spain, 1979. Jordi is now living in Sao Paulo, Brazil. With a special interest on building human touching stories, he’s always with his head full of ideas and, as he likes to call his future work, “novels”.' },
        { name: 'keywords', content: 'Jordi Burch, Photograph, Magazine, Project, Text, Book, Exhibition' },
        { name: 'author', content: 'Jordi Burch' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      ]}
    />
    
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 1550,
        paddingTop: 0,
      }}

      className="wrapper"
    >
      {children()}
      <p className="footer">Jordi Burch - 2018</p>
      <p className="footer">mail at <a href="mailto:mail@jordiburch.com">mail@jordiburch.com</a></p>
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
