import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div  className="header" >
    <div className="container">
      <h1><Link to="/" className="home-btn">Jordi Burch</Link></h1>
      <div className="menu">
        <p><Link to="/">Projetos</Link></p>
        <p><Link to="/">Livros</Link></p>
        <p><Link to="/">Exposições</Link></p>
        <p><Link to="/">Textos</Link></p>
        <p><Link to="/">CV</Link></p>
      </div>
    </div>
  </div>
)

export default Header
