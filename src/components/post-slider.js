import React from "react";
import Link from "gatsby-link";
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

const PostSlider = ({ post }) => (
  <div className="preview-post">
  
    <Link to={post.frontmatter.path}>

      <div className="container">
        <div className="image">
          <Carousel autoPlay interval={10000} infiniteLoop showArrows={false} showIndicators={false} showThumbs={false} showStatus={false}>
            <div>
              <img src={post.frontmatter.image} />
            </div>
            <div>
              <img src={post.frontmatter.imagend} />
            </div>
          </Carousel>
        </div>

        <div className="text imagePostBox">
          <h1>{post.frontmatter.title}</h1>
          {post.excerpt !== null && <div className="descriptionBox"><p>{post.excerpt}</p></div>}
        </div>
      </div>

    </Link>

  </div>

);

export default PostSlider;