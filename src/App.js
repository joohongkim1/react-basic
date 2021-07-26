import React, { useRef, useState, useMemo, useCallback } from 'react';
import Counter from './Counter';
import CreateUser from './CreateUser';
import InputMulti from './InputMulti';
import InputSample from './InputSample';
import UserList from './UserList';

// useMemo Hook - 특정 값이 변경된 경우에만 특정 함수 실행하여 연산 처리
// 원하는 값이 바뀌지 않았다면 리렌더링시 이전의 값을 재사용할 수 있게 해줌
function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active === true).length;
  
}

function App() {
  
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });
  const {username, email} = inputs;

  // useCallback -> 해당 함수는 deps 가 변경될 때만 함수가 새로 생성
  // 그렇지 않으면 기존에 만든 함수 재사용
  const onChange = useCallback(e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  // 해당 함수가 관리하고 있는 값을 deps 에 넣어준다.
  }, [inputs]);

  const [users, setUsers] = useState([
    {
        id: 1,
        username: 'kim',
        email: "test@test.com",
        active: true,
    },
    {
        id: 2,
        username: 'lee',
        email: "test@test2.com",
        active: false, 
    },
    {
        id: 3,
        username: 'park',
        email: "test@test3.com",
        active: false,
    }
  ]);
  
  // useRef 는 특정 DOM 을 지정하는 것에도 사용되지만
  // 리렌더링이 되어도 기억할 값을 지정하는 것에도 사용된다.
  // 해당 값 업데이트 시 컴포넌트가 리렌더링되지 않는다.
  const nextId = useRef(4);

  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email,
    }
    // 기존 배열 복사 후 새 배열을 만들고 user 를 추가
    // 배열의 불변성 유지
    // 배열 항목 추가 2가지 방법
    // setUsers([...users, user]);
    setUsers(users => users.concat(user));

    // 유저 생성 시 input 초기화
    setInputs({
      username: '',
      email: '',
    });
    nextId.current += 1;
  }, [username, email]);

  const onRemove = useCallback(id => {
    // 유저 삭제
    setUsers(users => users.filter(user => user.id !== id))
  }, []);

  const onToggle = useCallback(id => {
    // 클릭 시 상태 업데이트
    // 불변성 유지 필수
    // 함수형 업데이트
    setUsers(users => users.map(
      user => user.id === id
      ? { ...user, active: !user.active }
      : user
    ))
  }, []);

  // 첫번째 파라미터는 함수 형태
  // 두번째 파라미터는 deps
  // users 가 바뀔 때에만 호출이 되고, 그렇지 않을 경우 이전의 값 재사용
  const count = useMemo(() => countActiveUsers(users), [users]);

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
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
      <div>활성 사용자 수: {count}</div>
    </>
  );
}

export default App;
