import styled from 'styled-components';
import media from 'styles/media';
import { sp } from 'styles/theme';

// prettier-ignore
export default styled.div`
  position: relative;
  margin: 0 auto;
  padding-right: ${sp.m};
  padding-left: ${sp.m};
  width: 100%;
  ${props => props.centerText && 'text-align: center'};

  ${media.tablet`
    padding-right: ${sp.l};
    padding-left: ${sp.l};
  `}

  ${media.laptop`
    padding-right: ${sp.max};
    padding-left: ${sp.max};
    max-width: 928px;
  `}

  ${media.desktop`
    max-width: 1170px;
    ${props => props.narrow && 'max-width: 928px;'};
  `}

  ${media.max`
    max-width: 1300px;
    ${props => props.narrow && 'max-width: 928px;'};
  `}
`
