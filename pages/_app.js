import React from "react";
import PropTypes from "prop-types";
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

const App = ({ Component, pageProps }) => (
  <>
    <Normalize />
    <GlobalStyle />
    <GoogleFonts href="https://fonts.googleapis.com/css2?family=Bangers:wght@400;700&display=swap" />
    <Component {...pageProps} />
  </>
);

App.propTypes = { Component: PropTypes.any, pageProps: PropTypes.any };

export default App;
