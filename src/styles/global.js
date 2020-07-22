import { createGlobalStyle } from 'styled-components';

import wave from '../assets/wave.svg';

export default createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  }

  body {
    background: #030518 url(${wave}) no-repeat;
    background-position: bottom;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
    margin: 0 20px;
  }

  body, input, button {
    font: 16px -apple-system, Ubuntu, sans-serif;
  }

  html, body, #___gatsby {
    min-height: 100%;
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #FFF;
  }

  #___gatsby {
    padding: 40px 0px;
  }
`;