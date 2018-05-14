import React from "react";
import PostLink from "../components/post-link";
import Link from 'gatsby-link';

const Projetos = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const ownPath = document.location.pathname;
  const Posts = edges
    .filter(edge => edge.node.frontmatter.path.includes(ownPath) && edge.node.frontmatter.path !== ownPath) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />);
  return <div className="postsDisplay">{Posts}</div>;
};

export default Projetos;

export const pageQuery = graphql`
  query previewGroupTemplate {
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
          }
        }
      }
    }
  }
`;