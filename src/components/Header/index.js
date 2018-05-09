import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div  className="header" >
    <div className="container">
      <h1><Link to="/" className="home-btn">Jordi Burch</Link></h1>
      <div className="menu">
        <p><Link to="/projects">Projects</Link></p>
        <p><Link to="/books">Books</Link></p>
        <p><Link to="/exhibitions">Exhibitions</Link></p>
        <p><Link to="/texts">Texts</Link></p>
        <p><Link to="/cv">CV</Link></p>
      </div>
    </div>
  </div>
)

export default Header
