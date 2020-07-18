import { createGlobalStyle } from 'styled-components';

import wave from '../assets/wave.svg'

export default createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  }

  body {
    background: #030518 url(${wave}) no-repeat bottom;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  body, html {
    width: 100%;
    height: 100%;
  }

  body, input, button {
    font: 16px -apple-system, Ubuntu, sans-serif;
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
    width: 100%;
    height: 100%;
  }
`;