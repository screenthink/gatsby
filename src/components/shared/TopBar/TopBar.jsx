import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { theme } from 'styles';
import Container from 'components/shared/Container';

const StyledContainer = styled(Container)`
  height: ${theme.sp.max};
`;

const TopBar = () => {
  return <StyledContainer>{/* <div>TopBar</div> */}</StyledContainer>;
};

export default TopBar;
