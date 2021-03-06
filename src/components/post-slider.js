import React from "react";
import { Link } from "gatsby";
import { Carousel } from 'react-responsive-carousel';
import('react-responsive-carousel/lib/styles/carousel.min.css');


const PostSlider = ({ post }) => (
  <div className="preview-post">
   
    <Link to={post.frontmatter.path}>

      <div className="container">
        <div className="image">
          <Carousel autoPlay interval={10000} infiniteLoop showArrows={false} showIndicators={false} showThumbs={false} showStatus={false} dynamicHeight>
            {post.frontmatter.images != null && (post.frontmatter.images.split('(').join(')').split(')').map(img => (
              img.includes('/assets/images/uploads') &&
              <div key={post.frontmatter.title}>
                <img src={img} alt={post.frontmatter.title} />
              </div>
            ))).filter((element) => element !== false)}
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