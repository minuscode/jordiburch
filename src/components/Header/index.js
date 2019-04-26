import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div  className="header" >
    <div className="container">
      <h1><Link to="/" className="home-btn">Jordi Burch</Link></h1>
      <div className="menu">
        <p><Link to="/projects" className="menu-item">Projetos</Link></p>
        <p><Link to="/books" className="menu-item">Livros</Link></p>
        <p className='unused'><Link to="/exhibitions" className="menu-item">Exposições</Link></p>
        <p className='unused'><Link to="/texts" className="menu-item">Textos</Link></p>
        <p><Link to="/about" className="menu-item">Sobre</Link></p>
      </div>
    </div>
  </div>
)

if (typeof window !== `undefined`) {
  document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
      let menuItem = Array.from(document.querySelectorAll('.menu-item'));
      let homeBtn = document.querySelector('.home-btn');
      homeBtn.addEventListener('click', () => {
        for (let i = 0; i < menuItem.length; i++) {
          menuItem[i].classList.remove('active');
        }
      });
      for (let i = 0; i < menuItem.length; i++) {
        menuItem[i].addEventListener('click', () => { 
          for (let index = 0; index < menuItem.length; index++) {
            menuItem[index].classList.remove('active');
          }
          menuItem[i].classList.add('active');
        });
      }
    }
  };
}

export default Header
