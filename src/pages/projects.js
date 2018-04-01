import React from 'react';
import mapNodes from 'helpers/mapNodes';
// import PropTypes from 'prop-types';
import ProjectsPage from 'components/ProjectsPage';

// const propTypes = {
//   data: PropTypes.shape({
//     allContentfulPost: PropTypes.object,
//     allContentfulPostCategory: PropTypes.object,
//   }).isRequired,

//   pathContext: PropTypes.shape({ selectedCategoryId: PropTypes.string })
//     .isRequired,
// };

function ProjectsPageContainer({ data }) {
  return <ProjectsPage posts={mapNodes(data.allContentfulProject)} />;
}

// console.log(mapNodes(data.allContentfulProject));
// ProjectsPageContainer.propTypes = propTypes;

export default ProjectsPageContainer;

export const query = graphql`
  query ProjectsPageQuery {
    allContentfulProject(
      filter: { node_locale: { eq: "en-US" } }
      sort: { fields: [createdAt], order: DESC }
    ) {
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
`;
