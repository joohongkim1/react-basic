import React, { useEffect } from 'react';

const User = React.memo(function User({ user, onRemove, onToggle }) {
    const { username, email, id, active } = user;
    // useEffect(() => {
    //     // UI 가 렌더링 된 후
    //     console.log('컴포넌트 마운트');
    //     // props 로 받은 값을 컴포넌트의 state 로 설정
    //     // 외부 API 요청 시 컴포넌트 마운트 시 호출
    //     // setInterval, setTimeout 등을 처리
    //     return () => {
    //         // clearInterval, clearTimeout 같은 작업을 언마운트 시 실행
    //         // 라이브러리 인스턴스 제거 작업 등등
    //         console.log('컴포넌트 언마운트');
    //     }
    //    // deps : 의존되는 값을 배열 안에 넣어주면 됨.
    //    // 의존값이 비어있으면 컴포넌트 처음 나타날 때만 실행 됨<div className=""></div>
    // }, []);
    useEffect(() => {
        console.log('user 값 설정');
        // 특정 값이 업데이트 되거나 처음 나타나는 경우 실행
        console.log(user);
        return () => {
            console.log('user 값 수정 전');
            console.log(user);
        }
    }, [user]);

    return (
        <div>
            <b style={{
                color: active ? 'green' : 'black',
                cursor: 'pointer',
            }}
            onClick={() => onToggle(id)}>
                {username}
            </b>
            <span>({email})</span>
            {/* 함수 호출이 아닌 함수를 넣어줘야 함. */}
            <button onClick={() => onRemove(id)}>삭제</button>
        </div>
    )
});

function UserList({ users, onRemove, onToggle }) {   

    return (
        <div>
            {
                users.map(
                    // key 로 사용할 고유값이 없는 경우, key 에 index 입력
                    user => (
                    <User 
                        key={user.id} 
                        user={user} 
                        onRemove={onRemove}
                        onToggle={onToggle}
                        />
                    ) 
                )
            }
        </div>
    )
}

export default React.memo(
    UserList, 
    (prevProps, nextProps) => nextProps.users === prevProps.users
);