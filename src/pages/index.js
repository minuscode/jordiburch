import React from "react";
import PostLink from "../components/post-link";
import Link from 'gatsby-link';
import { EDEADLK } from "constants";

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  console.log(edges);
  const Posts = edges
    .filter(edge => edge.node.frontmatter.templateKey !== 'previewGroupTemplate' && edge.node.frontmatter.path !== '/cv') // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />);
    
  return <div className="postsDisplay">{Posts}</div>;
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexQueryPage {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            image
            templateKey
          }
        }
      }
    }
  }
`;