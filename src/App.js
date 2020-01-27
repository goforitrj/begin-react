import React from "react";
import Hello from "./Hello";
import Info from "./Info";

function App() {
    return (
        <div className="App">
            <Info />
            <hr></hr>
            <Hello />
            <Hello name="Jarang" color="pink" isSpecial />
            <Hello name="Steph" color="blue" isSpecial={true}>
                <div>This is Children</div>
            </Hello>
        </div>
    );
}

export default App;
