import React from 'react';
// import PropTypes from 'prop-types';
import ProjectPage from 'components/ProjectPage';

function Project({ pathContext }) {
  return <ProjectPage data={pathContext} />;
}

// Blog.propTypes = {
//   pathContext: PropTypes.shape({}).isRequired,
// };

export default Project;
