import React, { useMemo, useReducer } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';
import produce from 'immer';

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
            return produce(state, draft => {
                draft.users.push(action.user);
            });
        case 'TOGGLE_USER':
            return produce(state, draft => {
                const user = draft.users.find(user => user.id === action.id);
                user.active = !user.active;
            });
        case 'REMOVE_USER':
            return produce(state, draft => {
                const index = draft.users.findIndex(
                    user => user.id === action.id
                );
                draft.users.splice(index, 1);
            });
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

function App_Immer() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { users } = state;
    const count = useMemo(() => countActiveUsers(users), [users]);

    return (
        <userDispatch.Provider value={dispatch}>
            <CreateUser />
            <UserList users={users} />
            <div>현재 활성자 수 : {count}</div>
        </userDispatch.Provider>
    );
}

export default App_Immer;
