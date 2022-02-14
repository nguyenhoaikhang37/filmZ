import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './theme';

const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  @import url("https://fonts.googleapis.com/css2?family=Rowdies:wght@700&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");

  /* Reset */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  figure,
  picture {
    margin: 0;
  }
  body {
    min-height: 100vh;
    line-height: 1.5;
  }
  input,
  button,
  select,
  textarea {
    font: inherit;
  }
  img,
  picture {
    display: block;
    max-width: 100%;
  }
  a {
    color: unset;
  }
  /* remove animation for people who've turned them off */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  ::placeholder{
    color: #475069;
  }

  /* Global */
  html {
    font-size: 62.5%;
  }

  body {
    font-family: ${(props) => props.theme.fonts.primary};
    font-size: 16px;
    background-color: ${(props) => props.theme.colors.dark};
    color: ${(props) => props.theme.colors.white50};
  }
`;

export default GlobalStyles;
