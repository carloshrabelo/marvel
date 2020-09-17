import React from "react";
import PropTypes from "prop-types";
import GoogleFonts from "next-google-fonts";
import { Normalize } from "styled-normalize";
import GlobalStyle from "styles/GlobalStyle";

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
