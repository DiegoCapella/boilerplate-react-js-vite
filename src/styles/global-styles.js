import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  /* poppins-300 - latin */
    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 300;
      font-display: swap;
      src: local(''),
          url('../fonts/poppins-v20-latin-300.woff2') format('woff2')
    }

    /* poppins-regular - latin */
    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: local(''),
          url('../fonts/poppins-v20-latin-regular.woff2') format('woff2')
    }

    /* poppins-500 - latin */
    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: local(''),
          url('../fonts/poppins-v20-latin-500.woff2') format('woff2')
    }

    /* poppins-600 - latin */
    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 600;
      font-display: swap;
      src: local(''),
          url('../fonts/poppins-v20-latin-600.woff2') format('woff2')
    }

    /* poppins-700 - latin */
    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: local(''),
          url('../fonts/poppins-v20-latin-700.woff2') format('woff2')
    }

    /* poppins-800 - latin */
    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 800;
      font-display: swap;
      src: local(''),
          url('../fonts/poppins-v20-latin-800.woff2') format('woff2')
    }

    /* poppins-900 - latin */
    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 900;
      font-display: swap;
      src: local(''),
          url('../fonts/poppins-v20-latin-900.woff2') format('woff2')
    }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
    }
  `}
`
