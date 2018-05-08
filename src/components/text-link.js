import React from "react";
import Link from "gatsby-link";

const TextLink = ({ post }) => (
  <div className="preview-post">
    <Link to={post.frontmatter.path}>
      <div className="container">
        <div className="image">
          <img src={post.frontmatter.image} alt="" />
        </div>
        <div className="text">
          <h1>{post.frontmatter.title}</h1>
          <p>{post.excerpt}</p>
        </div>
      </div>
    </Link>
  </div>
);

export default TextLink;