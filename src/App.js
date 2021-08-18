import React from 'react';
import Counter from './Counter';
import EventPractice from './EventPractice';
import MyComponent from './MyComponent';
import Say from './Say';

const App = () => {
  return (
    <div>
      {/* <MyComponent favoriteNumber={1}>Children</MyComponent>
      <Counter />
      <Say /> */}
      <EventPractice />
    </div>
  );
};

export default App;
