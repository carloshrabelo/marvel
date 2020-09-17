import { createGlobalStyle } from "styled-components";
import variables from "./variables";

export default createGlobalStyle`
  :root {
    ${variables}
  }  

  body {
    color: var(--primary);
    font-family: 'Bangers', cursive;
    font-size: var(--font);
    padding: 0 var(--space-md);
  }
`;
