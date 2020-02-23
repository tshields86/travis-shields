import React, { useState } from 'react';
import { Hero, Main } from '~elements';

const App = () => {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <>
      <Hero
        hasEntered={hasEntered}
        onEnter={() => setHasEntered(true)}
      />
      {hasEntered && <Main />}
    </>
  );
};

export default App;
