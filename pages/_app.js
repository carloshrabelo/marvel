import React from "react";
import PropTypes from "prop-types";
import Layout from "Layout";

const App = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

App.propTypes = { Component: PropTypes.any, pageProps: PropTypes.any };

export default App;
