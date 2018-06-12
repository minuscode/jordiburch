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
        { name: 'description', content: '' },
        { name: 'keywords', content: '' },
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
      <p className="footer">mail at <a href="mailto:burchjordi@gmail.com">burchjordi@gmail.com</a></p>
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
