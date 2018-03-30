import React from 'react';
import Helmet from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from 'styles';
import { Footer } from 'components/shared';
import './index.css';

const Wrapper = styled.div`
  font-weight: 400;
  color: ${theme.colors.midnight};
  -webkit-font-smoothing: antialiased;
`;

class TemplateWrapper extends React.Component {
  render() {
    return (
      <Wrapper>
        <Helmet
          title="Marlon Works"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
            {
              name: 'viewport',
              content:
                'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
            },
          ]}
        />
        <ThemeProvider theme={theme}>{this.props.children()}</ThemeProvider>
        <Footer />
      </Wrapper>
    );
  }
}

export default TemplateWrapper;
