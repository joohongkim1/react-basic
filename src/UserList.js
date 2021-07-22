import React from 'react';

function User({ user }) {
    return (
        <div>
            <b>{user.username}</b>
            <span>({ user.email })</span>
        </div>
    )
}

function UserList({ users }) {   

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