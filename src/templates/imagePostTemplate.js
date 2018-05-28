import React from "react";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <div className="post-image-container">
      <div className="post">
        <h1 className="pageTitle">{frontmatter.title}</h1>
        <img src={frontmatter.image} alt="" />
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query ImagePostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        image
      }
    }
  }
`;