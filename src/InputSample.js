import React, { useState } from 'react';


function InputSample() {
    const [text, setText] = useState('');
    
    // event 객체 -> 업데이트 발생 시 이벤트 내용이 객체에 들어감
    const onChange = (e) => {
        // target -> 변경이 발생한 dom 내용
        // console.log(e.target.value);

        setText(e.target.value);
    }
    
    const onReset = () => {
        setText('');
    }
    return (
        <div>
            <input onChange={onChange} value={text} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {text}
            </div>
        </div>
    )
}

export default InputSample;