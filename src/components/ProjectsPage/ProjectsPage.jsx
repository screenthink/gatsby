import * as React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { filter } from 'lodash';
import routes, { routeFor } from 'helpers/routes';
// import { BlogType, BlogCategoryType } from 'types';
import Link from 'gatsby-link';
import { theme, media } from 'styles';
import { Container } from 'components/shared';
import { List } from './components';

const Wrapper = styled.div`
  background-color: ${theme.colors.offWhite};
  background-position: top 0px right 0px;
`;

const Main = styled.div``;

// const propTypes = {
//   posts: PropTypes.arrayOf({}).isRequired,
// };

class ProjectsPage extends React.Component {
  render() {
    const posts = this.props.posts;

    return (
      <Wrapper>
        <Main>
          <List posts={posts} />
        </Main>
      </Wrapper>
    );
  }
}

// ProjectsPage.propTypes = propTypes;
// ProjectsPage.defaultProps = defaultProps;

export default ProjectsPage;
