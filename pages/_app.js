import React from "react";
import PropTypes from "prop-types";
import Layout from "Layout";
import Provider from "store";

const App = ({ Component, pageProps }) => (
  <Provider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </Provider>
);

App.propTypes = { Component: PropTypes.any, pageProps: PropTypes.any };

export default App;
