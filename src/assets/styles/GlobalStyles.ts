import { createGlobalStyle } from 'styled-components'
import img from '../images/bg.png'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    color: white;
    max-width: 100%;
  }

  body {
    background: #111111 url(${img}) repeat center center/cover;

  }

  button {
    font: inherit
  }
`
