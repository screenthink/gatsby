import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { theme } from 'styles';
import { Container } from 'components/shared';

const Headline = styled.h1`
  margin: 30px 0;
  font-size: 50px;
  line-height: 50px;
  font-weight: 400;
  letter-spacing: 1px;
  color: ${theme.colors.slate};
`;

class AboutPage extends Component {
  render() {
    return (
      <Container>
        <Headline>about</Headline>
        <Link to="/">Home</Link>
      </Container>
    );
  }
}

export default AboutPage;
