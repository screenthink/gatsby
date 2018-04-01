import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { ProjectCard } from 'components/shared';
import { theme, media } from 'styles';

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: flex-start;

  &:after {
    content: '';
    width: calc((100% - ${parseInt(theme.sp.xl, 10) * 2}px) / 3);
  }
`;

const CardWrapper = styled.div`
  margin-bottom: ${theme.sp.max};
  width: 100%;

  ${media.tablet`
    width: calc((100% - ${parseInt(theme.sp.xl, 10)}px) / 2);
  `};
`;

// const propTypes = {
//   posts: PropTypes.arrayOf({}).isRequired,
// };

const defaultProps = {
  selectedCategoryId: undefined,
};

function List({ posts }) {
  return (
    <Wrapper>
      {posts.map(post => (
        <CardWrapper key={post.id}>
          {/* <ProjectCard post={post} /> */}
          <Link to={`/projects/${post.slug}`}>{post.heading}</Link>
        </CardWrapper>
      ))}
    </Wrapper>
  );
}

// List.propTypes = propTypes;
// List.defaultProps = defaultProps;

export default List;
