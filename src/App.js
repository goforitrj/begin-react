import React from "react";
import Hello from "./Hello";

function App() {
    return (
        <div className="App">
            <Hello />
            <Hello name="Jarang" color="pink" />
            <Hello name="Steph" color="blue">
                <div>This is Children</div>
            </Hello>
        </div>
    );
}

export default App;
