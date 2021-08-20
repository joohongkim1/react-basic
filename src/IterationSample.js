import React, { useState } from 'react';

const IterationSample = () => {
  // const names = ['a', 'b', 'c', 'd', 'e'];
  // 고유 값이 없는 경우에만 index 사용, 배열 변경 시 효율적이지 못함.
  // const nameList = names.map((name, index) => <li key={index}>{name}</li>);

  const [names, setNames] = useState([
    { id: 1, text: 'a' },
    { id: 2, text: 'b' },
    { id: 3, text: 'c' },
  ]);

  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(4);

  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    // concat 을 사용하여 불변성 유지.
    // push 는 기존 배열 변경, concat 은 새 배열 생성
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNames(nextNames);
    setNextId(nextId + 1);
    setInputText('');
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  return (
    <div>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </div>
  );
};

export default IterationSample;
