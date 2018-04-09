import React from 'react'
import Link from 'gatsby-link'

const Project = ({title, image, body}) => (
  <div className="project">
    <h1>{title}</h1>
    <img src={image} alt="Imagem do Projeto"/>
    <p>{body}</p>
  </div>
)

export default Project
