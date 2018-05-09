const path = require("path");

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const project = path.resolve(`src/templates/project.js`);
  const previewGroupTemplate = path.resolve(`src/templates/previewGroupTemplate.js`);
  const imagePostTemplate = path.resolve(`src/templates/imagePostTemplate.js`);
  const textPostTemplate = path.resolve(`src/templates/textPostTemplate.js`);
  const imagetextPostTemplate = path.resolve(`src/templates/imagetextPostTemplate.js`);

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
      if (result.errors) {
        return Promise.reject(result.errors);
      }

      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.frontmatter.path,
          component: path.resolve(`src/templates/${String(node.frontmatter.templateKey)}.js`),
          context: {}, // additional data can be passed via context
        });
      });

    });
};