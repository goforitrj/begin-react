import React, { useRef } from "react";
import Hello from "./Hello";
import Info from "./Info";
import InputSample from "./InputSample";
import UserList from "./UserList";

function App() {
    const users = [
        {
            id: 1,
            username: "velopert",
            email: "public.velopert@gmail.com"
        },
        {
            id: 2,
            username: "tester",
            email: "tester@example.com"
        },
        {
            id: 3,
            username: "liz",
            email: "liz@example.com"
        }
    ];
    const nextId = useRef(4);
    const onCreate = () => {
        nextId.current += 1;
    };
    return (
        <div className="App">
            <UserList users={users} />
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
