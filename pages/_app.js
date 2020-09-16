import GoogleFonts from "next-google-fonts";
import { createGlobalStyle } from "styled-components";
import { Normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: #e62429;
  }  

  body {
    font-family: 'Bangers', cursive;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Normalize />
      <link rel="shortcut icon" href="/favicon.ico" />
      <GlobalStyle />
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Bangers:wght@400;700&display=swap" />
      <Component {...pageProps} />
    </>
  );
}
