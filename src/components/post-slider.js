import React from "react";
import { Link } from "gatsby";
import { Carousel } from 'react-responsive-carousel';
import { marked } from "marked";
import('react-responsive-carousel/lib/styles/carousel.min.css');


const PostSlider = ({ post }) => {
  const SliderWrap = post.frontmatter.featured === 'Yes' ? React.Fragment : Link

  return (
    <div className="preview-post">
      <SliderWrap {...(post.frontmatter.featured === 'Yes' ? {} : { to: post.frontmatter.path})}>
        <div className="container">
          <div className="image">
            {console.log(post)}
            <Carousel autoPlay interval={10000} infiniteLoop showArrows={false} showIndicators={false} showThumbs={false} showStatus={false} dynamicHeight>
              {post.frontmatter.images != null && (post.frontmatter.images.split('\n').map(img => (
                img.includes('/assets/images/uploads') &&
                <div key={post.frontmatter.title} dangerouslySetInnerHTML={{__html: marked.parse(img)}} />
              ))).filter((element) => element !== false)}
            </Carousel>
          </div>

          <div className="text imagePostBox">
            <h1>{post.frontmatter.title}</h1>
            {post.excerpt !== null && <div className="descriptionBox"><p>{post.excerpt}</p></div>}
          </div>
        </div>

      </SliderWrap>

    </div>
  );
}

export default PostSlider;