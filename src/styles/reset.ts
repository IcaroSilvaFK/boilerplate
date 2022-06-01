import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html,body,#root{
    width: 100%;
    height: 100%;
    font-size: 1rem;
  }
  button,input{
    border:none;
    outline: none;
  }
  button{
    cursor: pointer;
  }
  a{
    text-decoration: none;
    color: inherit;
  }

`;
