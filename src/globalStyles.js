import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', 'sans-serif';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  }

  button {
    background: none;
    border: 0;
    color: inherit;
    cursor: pointer;
    font: inherit;
    line-height: normal;
    overflow: visible;
    padding: 0;
    -webkit-appearance: button; /* for input */
    -webkit-user-select: none; /* for button */
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  input::-moz-focus-inner,
  button::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  body, input, button, textarea {
    font: Poppins, sans-serif;
  }
`;

export default GlobalStyle;
