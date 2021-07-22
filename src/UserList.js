import React from 'react';

function User({ user }) {
    return (
        <div>
            <b>{user.username}</b>
            <span>({ user.email })</span>
        </div>
    )
}

function UserList() {
    const users = [
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
    ]

    return (
        <div>
            {
                users.map(
                    // key 로 사용할 고유값이 없는 경우, key 에 index 입력
                    user => (<User key={user.id} user={user} />) 
                )
            }
        </div>
    )
}

export default UserList;