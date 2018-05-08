import React from "react";
import TextLink from "../components/text-link";
import Link from 'gatsby-link';

const Textos = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => edge.node.frontmatter.path.includes("/textos")) // You can filter your posts based on some criteria
    .map(edge => <TextLink key={edge.node.id} post={edge.node} />);

  return <div className="postsDisplay">{Posts}</div>;
};

export default Textos;

export const pageQuery = graphql`
  query IndexQueryTextos {
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