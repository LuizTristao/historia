import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  button {
    font-family: 'Roboto Condensed', sans-serif;
    background-color: transparent;
    border: none;
    outline: none;
  }

  body {
    background-color: #F8FDFF;
    font-family: 'Roboto Condensed', sans-serif;
  }

  a {
    text-decoration: none;
    outline: none;
  }

  html, body, #root {
    height: 100%;
  }
`;

export default GlobalStyle;
