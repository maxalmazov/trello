/* eslint-disable @typescript-eslint/no-object-literal-type-assertion, @typescript-eslint/no-explicit-any */

import * as styledComponents from 'styled-components';
import { ThemedCssFunction } from 'styled-components';

export interface ThemeInterface {
  primaryColor?: string;
}

export const theme = {
  primaryColor: '#567',
};

export const GlobalStyles = styledComponents.createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: 0;
    font: inherit;
    color: inherit;
    line-height: inherit;
    vertical-align: baseline;
    text-decoration: inherit;
    font-family: 'Nunito Sans', sans-serif;
    user-select: none;
  }
`;

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ThemeInterface>;



const sizes = {
  tablet: 425,
  desktop: 768,
  desktopS: 992,
  desktopM: 1220,
  desktopL: 1360,
  large: 1440,
  xlarge: 1650,
  xxlarge: 1800,
  xxxlarge: 1920,
};

const media = (Object.keys(sizes) as (keyof typeof sizes)[]).reduce(
  (acc, label) => {
    acc[label] = (first: any, ...interpolations: any[]) => css`
      @media (min-width: ${sizes[label]}px) {
        ${css(first, ...interpolations)}
      }
    `;

    return acc;
  },
  {} as { [key in keyof typeof sizes]: styledComponents.ThemedCssFunction<ThemeInterface> }
);

export { css, createGlobalStyle, keyframes, ThemeProvider, media };
export default styled;
