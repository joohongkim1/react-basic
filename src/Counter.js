import React, { useState } from 'react';

function Counter() {

    // number 라는 상태를 만드는데 파라미터에 기본값 전달
    // set~ 기능 : 상태를 업데이트 함수 로직을 통해 변경하거나, 단순히 다음값을 지정
    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        // 업데이트 함수, 지금은 큰 차이 없지만 나중에 최적화하는 단계에서 쓰임
        setNumber(prevNumber => prevNumber + 1);
        console.log("+1");
    }
    const onDecrease = () => {
        setNumber(number - 1);
        console.log("-1");
    }
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default Counter;