import React from 'react';
import Counter from './Counter';
import EventPractice from './EventPractice';
import IterationSample from './IterationSample';
import MyComponent from './MyComponent';
import Say from './Say';
import ScrollBox from './ScrollBox';
import ValidationSample from './ValidationSample';

const App = () => {
  return (
    <div>
      {/* <MyComponent favoriteNumber={1}>Children</MyComponent>
      <Counter />
      <Say /> */}
      <EventPractice />
      <ValidationSample />
      <IterationSample />
    </div>
  );
};

export default App;
