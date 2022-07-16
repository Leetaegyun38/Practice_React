import React, {useState, useRef} from 'react';

//1-9, 1-10
function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });
    const nameInput = useRef();

    const {name, nickname} = inputs;

    const onChange = (e) => {
        const {value, name} = e.target; //target에서 value와 name 추출
        setInputs({
            ...inputs, // 기존 input 객체 복사
            [name]: value // name 키를 가진 값을 value로 설정
        });
    };
    const onReset = () => {
        setInputs({
            name: '',
            nickname: '',
        })
        nameInput.current.focus();
    };

    return(
        <div>
            <input
              name="name"
              placeholder="이름"
              onChange={onChange}
              value={name}
              ref={nameInput} //focus를 name input 창으로
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
                {name} ({nickname})
            </div>
        </div>
    );
}

//1-8
/* 
function InputSample() {
    const [text, setText] = useState('');
    //e: event 객체
    const onChange = (e) => {
        setText(e.target.value)
    };
    const onReset = () => {
        setText('');
    };
    return(
        <div>
            <input onChange={onChange} value={text} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: {text}</b>
            </div>
        </div>
    );
}
*/

export default InputSample;