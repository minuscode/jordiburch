import React from "react";
import Link from "gatsby-link";

const ProjectLink = ({ post }) => (
  <div className="preview-post project-post">

    <Link to={post.frontmatter.path}>

      <div className="container">
        <div className="image">
          <img src={post.frontmatter.image} alt="" onLoad={console.log(this)} />
        </div>

        <div className="text imagePostBox">
          <h1>{post.frontmatter.title}</h1>
        </div>
      </div>

    </Link>

  </div>

);

export default ProjectLink;