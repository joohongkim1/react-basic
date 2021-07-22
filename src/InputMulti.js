import React, { useState, useRef } from 'react';

// 여러 개의 Input 값 관리
function InputMulti() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
    });
    const nameInput = useRef();
    const { name, nickname } = inputs;

    const onChange = (e) => {
        const { name, value } = e.target;
        // 객체 업데이트
        // 기존 상태를 한 번 복사 후 특정 값을 덮어씌우고, 새로운 상태로 변경
        // 불변성을 지켜주는 것.
        setInputs({
            // spread 문법, 객체 값 복사
            ...inputs,
            // 대괄호로 감싸지 않으면 문자열
            // name 은 name 일수도 nickname 일수도 있다. 변경되는 값
            [name]: value,
        })       
    }
    
    const onReset = () => {
        setInputs({
            name: '',
            nickname: '',
        });
        // current -> 해당 DOM 을 가리킴
        nameInput.current.focus();
    }

    return (
        <div>
            <input 
                name="name" 
                placeholder="이름" 
                onChange={onChange} 
                value={name}
                ref={nameInput}
            />
            <input 
                name="nickname" 
                placeholder="닉네임" 
                onChange={onChange} 
                value={nickname} 
            />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} {nickname}
            </div>
        </div>
    )
}

export default InputMulti;