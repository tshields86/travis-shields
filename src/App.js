import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import Hero from './containers/Hero/Hero';

class App extends Component {
  render() {
    return (
      <Layout>
        <Hero />
      </Layout>
    );
  }
}

export default App;
