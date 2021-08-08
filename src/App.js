import React from 'react';
import Counter from './Counter';
import MyComponent from './MyComponent';
import Say from './Say';

const App = () => {
  return (
    <div>
      <MyComponent favoriteNumber={1}>Children</MyComponent>
      <Counter />
      <Say />
    </div>
  );
};

export default App;
