import React from "react";
import { graphql } from 'gatsby';
import PostLink from "../components/post-link";
import { Link } from "gatsby";

const Textos = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => edge.node.frontmatter.path.includes("/texts") && edge.node.frontmatter.path.split('/').length <= 3) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />);

  return (
    <div>
      <h1 className="pageTitle">Textos</h1>
      <div className="postsDisplay">{Posts}</div>
    </div>
  );
};

export default Textos;

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
            image
            templateKey
          }
        }
      }
    }
  }
`;