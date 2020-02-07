import React, { useRef, useMemo, useCallback, useReducer } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';
import useInputs from './hooks/useInputs';

function countActiveUsers(users) {
    console.log('counting');
    return users.filter(user => user.active).length;
}

const initialState = {
    users: [
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
    ]
};

function reducer(state, action) {
    switch (action.type) {
        case 'CREATE_USER':
            return {
                ...state,
                users: state.users.concat(action.user)
            };
        case 'TOGGLE_USER':
            return {
                ...state,
                users: state.users.map(user =>
                    user.id === action.id
                        ? { ...user, active: !user.active }
                        : user
                )
            };
        case 'REMOVE_USER':
            return {
                users: state.users.filter(user => user.id !== action.id)
            };
        case 'SAVE_EDIT':
            const { id, username, email } = action;
            return {
                users: state.users.map(user =>
                    user.id === id ? { ...user, username, email } : user
                )
            };
        default:
            return state;
    }
}

export const userDispatch = React.createContext(null);

function App() {
    const [{ username, email }, onChange, onSelect, onReset] = useInputs({
        username: '',
        email: ''
    });
    const [state, dispatch] = useReducer(reducer, initialState);
    const nextId = useRef(4);
    const selectedId = useRef(-1);

    const { users } = state;

    const onCreate = useCallback(() => {
        dispatch({
            type: 'CREATE_USER',
            user: {
                username,
                email,
                id: nextId.current
            }
        });
        onReset();
        nextId.current += 1;
    }, [username, email, onReset]);

    const onClickEdit = useCallback(
        id => {
            selectedId.current = id;
            const { username, email } = users.find(user => user.id === id);
            onSelect({ username, email });
        },
        [users, onSelect]
    );

    const onSaveEdit = useCallback(() => {
        dispatch({
            type: 'SAVE_EDIT',
            id: selectedId.current,
            username,
            email
        });
        selectedId.current = -1;
        onReset();
    }, [username, email, onReset]);

    const count = useMemo(() => countActiveUsers(users), [users]);

    return (
        <userDispatch.Provider value={dispatch}>
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
                onClickEdit={onClickEdit}
            />
            <div>현재 활성자 수 : {count}</div>
        </userDispatch.Provider>
    );
}

export default App;
