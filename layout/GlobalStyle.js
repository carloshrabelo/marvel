import { createGlobalStyle } from "styled-components";
import variables from "./variables";

export default createGlobalStyle`
  *{
    box-sizing: border-box;
  }

  :root {
    ${variables}
  } 

  html,
  body {
    color: var(--black);
    font-family: 'Bangers', cursive;
    font-size: var(--font);
    height: 100%;
    width: 100%;
  }

  h1,h2,h3{
    color:var(--primary)
  }

  #__next{
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding: 0 var(--space-md);
  }

  main{
    display: flex;
    flex: 1;
    flex-direction: column;
  }
`;
