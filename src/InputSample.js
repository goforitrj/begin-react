import React, { useState, useRef } from "react";

function InputSample() {
    const [inputs, setInputs] = useState({
        name: "",
        email: ""
    });
    const { name, email } = inputs;
    const nameInput = useRef();
    const changeInput = e => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };
    const resetValue = () => {
        setInputs({
            name: "",
            email: ""
        });
        nameInput.current.focus();
    };
    return (
        <>
            <input
                type="text"
                name="name"
                value={name}
                onChange={changeInput}
                placeholder="please type your name"
                ref={nameInput}
            />
            <input
                type="text"
                name="email"
                value={email}
                onChange={changeInput}
                placeholder="enter you email address"
            />
            <button onClick={resetValue}>reset values</button>
        </>
    );
}

export default InputSample;
