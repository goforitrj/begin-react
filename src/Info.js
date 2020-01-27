import React, { useState } from "react";

function Info() {
    const [inputs, setInputs] = useState({
        name: "",
        nickName: ""
    });
    const onChange = e => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };
    const { name, nickName } = inputs;
    return (
        <div>
            <input
                type="text"
                name="name"
                onChange={onChange}
                placeholder="name"
                value={name}
            />
            <input
                type="text"
                name="nickName"
                onChange={onChange}
                placeholder="nickName"
                value={nickName}
            />
        </div>
    );
}

export default Info;
