import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { theme } from 'styles';
import Container from 'components/shared/Container';

const Headline = styled.h1`
  margin: 0 0 30px;
  font-size: 50px;
  line-height: 50px;
  font-weight: 400;
  letter-spacing: 1px;
  color: ${theme.colors.slate};
`;

class IndexPage extends Component {
  render() {
    return (
      <Container>
        <Headline>marlon.works</Headline>
        <Link to="/about/">About Me</Link>
      </Container>
    );
  }
}

export default IndexPage;
