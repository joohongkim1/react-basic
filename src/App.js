import React, { Component } from 'react';
import Counter from './Counter';
import ErrorBoundary from './ErrorBoundary';
import EventPractice from './EventPractice';
import IterationSample from './IterationSample';
import LifeCycleSample from './LifeCycleSample';
import MyComponent from './MyComponent';
import Say from './Say';
import ScrollBox from './ScrollBox';
import ValidationSample from './ValidationSample';

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

// const App = () => {
//   return (
//     <div>
//       {/* <MyComponent favoriteNumber={1}>Children</MyComponent>
//       <Counter />
//       <Say /> */}
//       {/* <EventPractice />
//       <ValidationSample />
//       <IterationSample /> */}
//       <button></button>
//     </div>
//   );
// };

class App extends Component {
  state = {
    color: '#000000',
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
