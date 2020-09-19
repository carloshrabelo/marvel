import { createGlobalStyle } from "styled-components";
import variables from "./variables";

export default createGlobalStyle`
  :root {
    ${variables}
  }  

  body {
    color: var(--black);
    display: grid;
    font-family: 'Bangers', cursive;
    font-size: var(--font);
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
