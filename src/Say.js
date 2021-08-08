import React, { useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState('대기중');
  const onClickEnter = () => setMessage('HI');
  const onClickLeave = () => setMessage('Bye');

  const [color, setColor] = useState('black');

  return (
    <div>
      <h1 style={{ color }}>{message}</h1>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <br />
      <button style={{ color: 'red' }} onClick={() => setColor('red')}>
        red
      </button>
      <button style={{ color: 'green' }} onClick={() => setColor('green')}>
        green
      </button>
    </div>
  );
};

export default Say;
