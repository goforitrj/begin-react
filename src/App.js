import React, { useRef, useState } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
    const [inputs, setInputs] = useState({
        username: '',
        email: ''
    });
    const { username, email } = inputs;
    const [users, setUsers] = useState([
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com'
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com'
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com'
        }
    ]);
    const nextId = useRef(4);
    const onCreate = () => {
        setUsers(users.concat({ ...inputs, id: nextId.current++ }));
        setInputs({ username: '', email: '' });
    };
    const onChange = e => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };
    const onEdit = id => {
        const selectedUser = users.find(user => user.id === id);
        setInputs({
            username: selectedUser.username,
            email: selectedUser.email
        });
    };
    const onRemove = id => {
        setUsers(users.filter(user => user.id !== id));
    };
    return (
        <div className="App">
            <CreateUser
                username={username}
                email={email}
                onCreate={onCreate}
                onChange={onChange}
            />
            <UserList users={users} onRemove={onRemove} onEdit={onEdit} />
        </div>
    );
}

export default App;
