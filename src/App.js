import React from "react";
import Hello from "./Hello";
import Info from "./Info";
import InputSample from "./InputSample";
import UserList from "./UserList";

function App() {
    return (
        <div className="App">
            <UserList />
            <InputSample />
            <hr />
            <Info />
            <hr />
            <Hello />
            <Hello name="Jarang" color="pink" isSpecial />
            <Hello name="Steph" color="blue" isSpecial={true}>
                <div>This is Children</div>
            </Hello>
        </div>
    );
}

export default App;
