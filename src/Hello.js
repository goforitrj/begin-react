import React from "react";

function Hello({ name, color, children }) {
    const style = {
        backgroundColor: "tomato",
        color: color,
        fontSize: 23,
        border: "1px dotted yellow"
    };
    return (
        <div>
            {/* Style object */}
            <div style={{ color }}>Hello, {name}</div>
            {children}
        </div>
    );
}

Hello.defaultProps = {
    name: "none",
    color: "purple"
};

export default Hello;
