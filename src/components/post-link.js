import React from "react";
import Link from "gatsby-link";

const PostLink = ({ post }) => (
  <div className="preview-post">
    
    {post.frontmatter.templateKey !== 'imagePostTemplate' && <Link to={post.frontmatter.path}>
      <div className="container">
        {post.frontmatter.image !== null &&
          <div className="image">
            <img src={post.frontmatter.image} alt="" />
          </div>
        }
        <div className="text">
          <h1>{post.frontmatter.title}</h1>
          {post.frontmatter.image === null && <p>{post.excerpt}</p>}
        </div>
      </div>
    </Link> }

    {post.frontmatter.templateKey === 'imagePostTemplate' && 
    <div>
      <a href={'#' + post.frontmatter.path} className='small-img'>
        <div className="container">
          {post.frontmatter.image !== null &&
            <div className="image">
              <img src={post.frontmatter.image} alt="" />
            </div>
          }
          <div className="text">
            <h1>{post.frontmatter.title}</h1>
            {post.frontmatter.image === null && <p>{post.excerpt}</p>}
          </div>
        </div>
      </a>
      <a href='#_' className='lightbox' id={post.frontmatter.path}>
        <img src={post.frontmatter.image} />
      </a>
    </div>}
  </div>

);

export default PostLink;