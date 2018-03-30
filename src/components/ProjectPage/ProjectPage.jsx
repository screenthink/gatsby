import React from 'react';
// import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { theme, media } from 'styles';
import { Container } from 'components/shared';
import { Header } from './components';

const { sp, colors } = theme;

const Wrapper = styled.div`
  margin-bottom: 100px;
`;

const Content = styled.div`
  font-size: 20px;
  font-weight: 400;
  margin: 0 auto;

  h2 {
    margin-bottom: ${sp.xl};
  }

  h3 {
    margin-bottom: ${sp.m};
  }

  p,
  ul,
  ol {
    counter-reset: item;
    line-height: 1.4;
    font-weight: 400;
    margin-bottom: ${sp.xl};

    ${media.tablet`
      margin-bottom: ${sp.xxl};
    `};
  }

  ol,
  ul {
    padding: 0;

    ${media.tablet`
      padding: 0 0 0 30px;
    `};
  }

  ul li {
    position: relative;
    list-style: none;
    padding-left: 40px;
    margin-bottom: ${sp.s};

    &::before {
      position: absolute;
      top: 15px;
      left: 0;
      width: 20px;
      height: 2px;
      background-color: ${colors.blue};
      content: '';
    }
  }

  ol li {
    position: relative;
    counter-increment: item;
    list-style: none;
    padding-left: 40px;
    margin-bottom: ${sp.s};

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      content: counters(item, '') '.';
      color: ${colors.blue};
      width: 20px;
    }
  }

  a {
    transition: all 0.3s;
    text-decoration: none;
    color: ${colors.blue};
  }

  a:hover {
    color: ${colors.blue};
  }

  blockquote {
    margin: ${sp.max} 0 100px;
    border-left: ${sp.xxs} solid ${colors.blue};

    p {
      margin: 0;
      padding-right: 40px;
      padding-left: 40px;
      width: 100%;
      font-size: 24px;
      line-height: 36px;
      font-style: italic;
      font-weight: 500;
      color: ${colors.grey};

      ${media.tablet`
        padding-right: 100px;
        padding-left: 80px;
      `};
    }
  }

  .embed-container {
    margin-bottom: ${sp.xxl};
  }

  img {
    display: block;
    max-width: 100%;
    margin-bottom: ${sp.xxl};

    ${media.desktop`
      max-width: 125%;
      margin-left: -100px;
    `};
  }
`;

function ProjectPage({ data }) {
  const { heading, slug, content } = data;
  return (
    <Wrapper>
      <Header heading={heading} />
      <Container narrow>
        <Content>
          <ReactMarkdown source={content.content} escapeHtml={false} />
        </Content>
      </Container>
    </Wrapper>
  );
}

// ProductPage.propTypes = {
//   data: PropTypes.shape({}).isRequired,
// };

export default ProjectPage;
