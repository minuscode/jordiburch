import React from "react";
import { Link } from "gatsby";

const PostLink = ({ post }) => (
  <div className="preview-post">
    
    <Link to={post.frontmatter.path}>
      
        <div className="container">
          <div className="image">
          <img src={post.frontmatter.image} alt="" onLoad={console.log(this)} />
          </div>

          <div className="text imagePostBox">
            <h1>{post.frontmatter.title}</h1>
            {post.excerpt !== null && !post.excerpt.includes('null') && <div className="descriptionBox"><p>{post.excerpt}</p></div>}
            {console.log(post.excerpt)}
          </div>
        </div>

    </Link>

  </div>

);

export default PostLink;