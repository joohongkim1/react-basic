import React, { useRef, useState } from 'react';
import Counter from './Counter';
import CreateUser from './CreateUser';
import InputMulti from './InputMulti';
import InputSample from './InputSample';
import UserList from './UserList';

function App() {
  
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });
  const {username, email} = inputs;

  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  const [users, setUsers] = useState([
    {
        id: 1,
        username: 'kim',
        email: "test@test.com"
    },
    {
        id: 2,
        username: 'lee',
        email: "test@test2.com" 
    },
    {
        id: 3,
        username: 'park',
        email: "test@test3.com"
    }
  ]);
  
  // useRef 는 특정 DOM 을 지정하는 것에도 사용되지만
  // 리렌더링이 되어도 기억할 값을 지정하는 것에도 사용된다.
  // 해당 값 업데이트 시 컴포넌트가 리렌더링되지 않는다.
  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    }
    // 기존 배열 복사 후 새 배열을 만들고 user 를 추가
    // 배열의 불변성 유지
    // 배열 항목 추가 2가지 방법
    // setUsers([...users, user]);
    setUsers(users.concat(user));

    // 유저 생성 시 input 초기화
    setInputs({
      username: '',
      email: '',
    });
    nextId.current += 1;
  }

  return (
    <>
      <Counter />
      <br />
      <InputSample />
      <br />
      <InputMulti />
      <br />
      <CreateUser 
        username={username} 
        email={email} 
        onChange={onChange} 
        onCreate={onCreate} 
      />
      <UserList users={users}/>
    </>
  );
}

export default App;
