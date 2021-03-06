import { css } from 'styled-components';

export const sizes = {
  max: 1400,
  desktop: 1080,
  laptop: 992,
  tablet: 768,
  phablet: 376,
};

// iterate through the sizes and create a media template
export default Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16;
  return {
    ...accumulator,
    [label]: (...args) => css`
      @media (min-width: ${emSize}em) {
        ${css(...args)};
      }
    `,
  };
}, {});
