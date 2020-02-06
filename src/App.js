import React, { useRef, useState, useMemo, useCallback } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
    console.log('counting');
    return users.filter(user => user.active).length;
}

function App() {
    const selectedId = useRef(-1);
    const [inputs, setInputs] = useState({
        username: '',
        email: ''
    });
    const { username, email } = inputs;
    const [users, setUsers] = useState([
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com',
            active: true
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com',
            active: false
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com',
            active: false
        }
    ]);
    const nextId = useRef(4);

    const onCreate = useCallback(() => {
        setUsers(
            users.concat({ ...inputs, id: nextId.current++, active: true })
        );
        setInputs({ username: '', email: '' });
    }, [users, inputs]);

    const onRemove = useCallback(
        id => {
            setUsers(users.filter(user => user.id !== id));
        },
        [users]
    );

    const onToggle = useCallback(
        id => {
            setUsers(
                users.map(user =>
                    user.id === id ? { ...user, active: !user.active } : user
                )
            );
        },
        [users]
    );

    const onClickEdit = useCallback(
        id => {
            const selectedUser = users.find(user => user.id === id);
            selectedId.current = id;
            setInputs({
                username: selectedUser.username,
                email: selectedUser.email
            });
        },
        [users, selectedId]
    );

    const onSaveEdit = useCallback(() => {
        setUsers(
            users.map(user =>
                user.id === selectedId.current ? { ...user, ...inputs } : user
            )
        );
        selectedId.current = -1;
        setInputs({ username: '', email: '' });
    }, [users, selectedId, inputs]);

    // const count = countActiveUsers(users);
    const count = useMemo(() => countActiveUsers(users), [users]);
    // only when users are changed countActiveUsers is Called
    // without useMemo, countActiveUsers is called not only when users are changed but also when inputs are changed

    const onChange = e => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    return (
        <div className="App">
            <CreateUser
                username={username}
                email={email}
                onCreate={onCreate}
                onChange={onChange}
                onSaveEdit={onSaveEdit}
                selectedId={selectedId}
            />
            <UserList
                users={users}
                onRemove={onRemove}
                onClickEdit={onClickEdit}
                onToggle={onToggle}
            />
            <div>현재 활성자 수 : {count}</div>
        </div>
    );
}

export default App;
