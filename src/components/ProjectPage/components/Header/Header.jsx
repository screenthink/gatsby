import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme, media } from 'styles';
import { Container } from 'components/shared';

const { sp, colors } = theme;

const BannerContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  height: 100%;
  text-align: center;
`;

const StyledHeader = styled.div`
  margin-bottom: ${sp.max};
  height: 200px;
  background-color: ${colors.blue};

  ${media.tablet`
    background-size: cover;
    background-position: left;
    background-image: url('${props => props.src}');
    background-repeat: no-repeat;
    height: 200px;
  `};

  h1 {
    margin: 0 auto;
    max-width: 600px;
    color: ${colors.white};
  }
`;

function Header(props) {
  const { heading } = props;
  return (
    <StyledHeader>
      <BannerContainer>
        <h1>{heading}</h1>
      </BannerContainer>
    </StyledHeader>
  );
}

// Header.propTypes = {
//   heading: PropTypes.string.isRequired,
//   slug: PropTypes.string.isRequired,
//   image: PropTypes.shape({}).isRequired,
//   categories: PropTypes.arrayOf({}).isRequired,
// };

export default Header;
