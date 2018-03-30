const path = require('path');

module.exports = async ({ graphql, createPage }) => {
  try {
    const template = path.resolve(`./src/templates/Project.js`);

    const result = await graphql(`
      query {
        allContentfulProject {
          edges {
            node {
              id
              node_locale
              heading
              slug
              content {
                id
                content
              }
            }
          }
        }
      }
    `);
    if (result.errors) throw new Error(result.errors);

    result.data.allContentfulProject.edges.forEach(edge => {
      const { node } = edge;
      createPage({
        path: `/projects/${node.slug}`,
        component: template,
        context: node,
      });
    });
  } catch (e) {
    console.error('Failed to create Project Pages');
    console.error(e);
  }
};
