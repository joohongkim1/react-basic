import React, { useState, useReducer } from 'react';

// 상태 업데이트 로직이 컴포넌트 밖에 있음.
function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      throw new Error('Unhandled action');
  }
}

function Counter() {
  // 첫 파라미터 reducer 함수, 두 번째 파라미터 초기값
  const [number, dispatch] = useReducer(reducer, 0);

  // number 라는 상태를 만드는데 파라미터에 기본값 전달
  // set~ 기능 : 상태를 업데이트 함수 로직을 통해 변경하거나, 단순히 다음값을 지정
  // const [number, setNumber] = useState(0);

  const onIncrease = () => {
    // 업데이트 함수, 지금은 큰 차이 없지만 나중에 최적화하는 단계에서 쓰임
    // setNumber(prevNumber => prevNumber + 1);
    dispatch({
      type: 'INCREMENT',
    });
  };
  const onDecrease = () => {
    dispatch({
      type: 'DECREMENT',
    });
  };
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
