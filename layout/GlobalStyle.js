import { createGlobalStyle } from "styled-components";
import variables from "./variables";

export default createGlobalStyle`
  :root {
    ${variables}
  }  

  body {
    color: var(--black);
    font-family: 'Bangers', cursive;
    font-size: var(--font);
    padding: 0 var(--space-md);
  }
  
  h1,h2,h3{
    color:var(--primary)
  }
`;
