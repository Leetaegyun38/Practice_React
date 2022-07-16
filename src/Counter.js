import React, {useState} from 'react';

function Counter() {
    const [number, setnumber] = useState(0);

    const onIncrease = () => {
        //setnumber(number+1);
        //함수형 업데이트: 최적화
        setnumber(prevNumber=>prevNumber +1);
    }
    const onDecrease = () => {
        //setnumber(number-1);
        setnumber(prevNumber=>prevNumber -1);
    }
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default Counter;