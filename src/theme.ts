import * as styledComponents from 'styled-components';
import { NOTES, NOTES_SECTIONS } from './store/types';

export interface ThemeInterface {
  primaryColor?: string;
}

const colors = {
  primaryColor: '#dfe1e6',
  white: '#ffffff',
  whiteDarkened10: '#e6e6e6',
  black: '#000000',
  orange: '#ffbb37',
  orangeDarkened10: '#e6a21e',
  orangeLightened10: '#ffd551',
  pink: '#ff768f',
  pinkDarkened10: '#e65d76',
  pinkLightened10: '#ff90a9',
  blue: '#4d88ff',
  blueDarkened10: '#346fe6',
  blueLightened10: '#4e89ff',
  green: '#43dc9c',
  greenDarkened10: '#2ac383',
  greenLightened10: '#5df6b6',
};

export const theme = {
  primaryColor: colors.primaryColor,
  white: colors.white,
  whiteDarkened10: colors.whiteDarkened10,
  black: colors.black,
  orange: colors.orange,
  orangeDarkened10: colors.orangeDarkened10,
  orangeLightened10: colors.orangeLightened10,
  pink: colors.pink,
  pinkDarkened10: colors.pinkDarkened10,
  pinkLightened10: colors.pinkLightened10,
  blue: colors.blue,
  blueDarkened10: colors.blueDarkened10,
  blueLightened10: colors.blueLightened10,
  green: colors.green,
  greenDarkened10: colors.greenDarkened10,
  greenLightened10: colors.greenLightened10,
  getColors: (type: string) => {
    switch (type) {
      case NOTES:
        return theme.noteColors;

      case NOTES_SECTIONS:
        return theme.notesSectionColors;

      default:
        return theme.noteColors
    }
  },
  noteColors: [
    colors.white,
    colors.orange,
    colors.pink,
    colors.blue,
    colors.green,
  ],
  notesSectionColors: [
    colors.primaryColor,
    colors.orangeLightened10,
    colors.pinkLightened10,
    colors.blueLightened10,
    colors.greenLightened10,
  ],
  getDarkened10: (color: string|undefined) => {
    switch (color) {
      case theme.white:
        return theme.whiteDarkened10;
      case theme.orange:
        return theme.orangeDarkened10;
      case theme.pink:
        return theme.pinkDarkened10;
      case theme.blue:
        return theme.blueDarkened10;
      case theme.green:
        return theme.greenDarkened10;
    }
  },
  getLightened10: (color: string|undefined) => {
    switch (color) {
      case theme.white:
        return theme.white;
      case theme.orange:
        return theme.orangeLightened10;
      case theme.pink:
        return theme.pinkLightened10;
      case theme.blue:
        return theme.blueLightened10;
      case theme.green:
        return theme.greenLightened10;
    }
  },
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
