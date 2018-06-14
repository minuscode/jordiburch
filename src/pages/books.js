import React from "react";
import PostLink from "../components/post-link";
import Link from 'gatsby-link';

const Livros = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => edge.node.frontmatter.path.includes("/books") && edge.node.frontmatter.path.split('/').length <= 3) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />);

  { console.log(Posts) };
return (
  <div>
    <h1 className="pageTitle">Livros</h1>
    <div className="postsDisplay">{Posts}</div>
  </div>
  );
};

export default Livros;

export const pageQuery = graphql`
  query IndexQueryLivros {
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