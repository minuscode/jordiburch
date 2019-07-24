import React from "react";
import { graphql } from 'gatsby';
import ProjectLink from "../components/project-link";
import { Link } from "gatsby";

const Projetos = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => edge.node.frontmatter.path.includes("/projects") && edge.node.frontmatter.path.split('/').length <= 3) // You can filter your posts based on some criteria
    .map(edge => <ProjectLink key={edge.node.id} post={edge.node} />);

  return (
  <div>
      <h1 className="pageTitle">Projetos</h1>
      <div className="postsDisplay projectsDisplay" onLoad={console.log(this)}>{Posts}</div>
  </div>
  );
};


export default Projetos;

export const pageQuery = graphql`
  {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___order] }) {
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
            order
          }
        }
      }
    }
  }
`;