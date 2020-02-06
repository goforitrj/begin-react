import React, { useState, useRef } from 'react';

function Counter() {
    const [number, setNumber] = useState(0);
    const refNum = useRef(0);

    const onIncrease = () => {
        setNumber(prevNum => prevNum + 1);
        refNum.current++;
    };

    const onDecrease = () => {
        setNumber(prevNum => prevNum - 1);
    };

    return (
        <>
            <div>{number}</div>
            <div>{refNum.current}</div>
            <div>
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
            </div>
        </>
    );
}

export default Counter;
