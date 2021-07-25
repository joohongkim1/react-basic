import React from 'react';

function User({ user, onRemove, onToggle }) {
    const { username, email, id, active } = user;
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
}

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

export default UserList;