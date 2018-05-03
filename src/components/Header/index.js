import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div  className="header" >
    <div className="container">
      <h1><Link to="/" className="home-btn">Jordi Burch</Link></h1>
      <div className="menu">
        <p><Link to="/projetos">Projetos</Link></p>
        <p><Link to="/livros">Livros</Link></p>
        <p><Link to="/exposicoes">Exposições</Link></p>
        <p><Link to="/textos">Textos</Link></p>
        <p><Link to="/cv">CV</Link></p>
      </div>
    </div>
  </div>
)

export default Header
