import React, { useState } from "react";

function Hello({ name, color, children }) {
    const style = {
        backgroundColor: "tomato",
        color: color,
        fontSize: 23,
        border: "1px dotted yellow"
    };
    const [text, setText] = useState("");
    const onChange = e => {
        setText(e.target.value);
    };

    return (
        <div>
            {/* Style object */}
            <div style={{ color }}>Hello, {name}</div>
            <input onChange={onChange} value={text} />
            <b>값: {text}</b>
            {children}
        </div>
    );
}

Hello.defaultProps = {
    name: "none",
    color: "purple"
};

export default Hello;
