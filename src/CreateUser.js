import React from 'react';

function CreateUser({ username, email, onChange, onCreate }) {
    // React.memo 테스트, react devtools 가 이상함.
    console.log('createUser');
    return (
        <div>
            <input 
                name="username" 
                onChange={onChange} 
                value={username}
            />
            <input 
                name="email" 
                onChange={onChange}
                value={email}
            />
            <button onClick={onCreate}>등록</button>
        </div>
    )

}

// React.memo -> props 가 변경될 때만 리렌더링
// 근데 지금 안되고 있음. 해결필요 -> devtools 가 이상한듯.
export default React.memo(CreateUser);