const createProjectPages = require('./gatsby-node-utils/createProjectPages');

exports.createPages = async ({ graphql, boundActionCreators }) => {
  console.log('Creating custom Pages...');
  const { createPage } = boundActionCreators;
  await createProjectPages({ createPage, graphql });
};

// exports.modifyBabelrc = ({ babelrc }) => ({
//   ...babelrc,
//   plugins: babelrc.plugins.concat([
//     'transform-decorators-legacy',
//     'transform-regenerator',
//   ]),
// });
