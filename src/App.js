import React, { useState } from 'react';
import Layout from './hoc/Layout/Layout';
import Hero from './components/Hero/Hero';
import Main from './components/Main/Main';

const App = () => {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <Layout>
      <Hero
        hasEntered={hasEntered}
        onEnter={() => setHasEntered(true)}
      />
      {hasEntered && <Main />}
    </Layout>
  );
};

export default App;
