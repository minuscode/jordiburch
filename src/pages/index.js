import React from "react";
import { graphql } from 'gatsby';
import PostLink from "../components/post-link";
import PostSlider from "../components/post-slider";
import { Link } from "gatsby";

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => edge.node.frontmatter.featured === 'Yes' && edge.node.frontmatter.path !== '/cv') // You can filter your posts based on some criteria
    .map(edge => <PostSlider key={edge.node.id} post={edge.node} />);
    
  return <div className="postsDisplay homepageDisplay">{Posts}</div>;
};

export default IndexPage;

export const pageQuery = graphql`
  {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            images
            image
            templateKey
            featured
          }
        }
      }
    }
  }
`;