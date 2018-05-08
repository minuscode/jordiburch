import React from "react";
import Link from "gatsby-link";

const PostLink = ({ post }) => (
  <div className="preview-post">
    <Link to={post.frontmatter.path}>
    <div className="container">
        <img src={post.frontmatter.image} alt="" />
      <h1>{post.frontmatter.title}</h1>
      {/*<p>{post.excerpt}</p>*/}
    </div>
    </Link>
  </div>
);

export default PostLink;