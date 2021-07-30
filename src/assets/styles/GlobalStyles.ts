import { createGlobalStyle } from 'styled-components'
import img from '../images/gm35fDf9bHI.png'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    color: white;
  }

  body {
    background: #111111 url(${img}) repeat center center/cover;

  }

  button {
    font: inherit
  }
`
