import React, { useReducer } from 'react';

function Counter() {
    function reducer(state, action) {
        switch (action.type) {
            case 'INCREASE':
                return state + 1;
            case 'DECREASE':
                return state - 1;
            default:
                return state;
        }
    }

    const [number, dispatch] = useReducer(reducer, 0);

    const onIncrease = () => {
        dispatch({ type: 'INCREASE' });
    };

    const onDecrease = () => {
        dispatch({ type: 'DECREASE' });
    };

    return (
        <>
            <div>{number}</div>
            <div>
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
            </div>
        </>
    );
}

export default Counter;
