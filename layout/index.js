import React from "react";
import PropTypes from "prop-types";
import GoogleFonts from "next-google-fonts";
import { Normalize } from "styled-normalize";
import GlobalStyle from "layout/GlobalStyle";
import Header from "./Header";

const App = ({ children }) => (
  <>
    <Normalize />
    <GlobalStyle />
    <GoogleFonts href="https://fonts.googleapis.com/css2?family=Bangers:wght@400;700&display=swap" />
    <Header />
    <main>{children}</main>
  </>
);

App.propTypes = {
  children: PropTypes.element,
};

export default App;
