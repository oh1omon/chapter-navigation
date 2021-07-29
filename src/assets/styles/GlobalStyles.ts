import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
	  margin: 0;
	  padding: 0;
	  outline: 0;
	  box-sizing: border-box;
	  font-family: 'Poppins', sans-serif;
    color:white;
  }
  
  body{
    background: grey;
  }
  
  button {
	  font: inherit
  }
`
