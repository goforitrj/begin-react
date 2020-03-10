import React, { useEffect, useContext } from 'react';
import { userDispatch } from '../App';

function User({ user }) {
    const dispatch = useContext(userDispatch);

    useEffect(() => {
        console.log('user 값이 설정됨');
        console.log(user);
        return () => {
            console.log('user가 바뀌기 전');
            console.log(user);
        };
    }, [user]);
    return (
        <div>
            <b
                style={{
                    cursor: 'pointer',
                    color: user.active ? 'green' : 'blue'
                }}
                onClick={() => {
                    dispatch({ type: 'TOGGLE_USER', id: user.id });
                }}
            >
                {user.username}
            </b>
            <span
                onClick={() => {
                    dispatch({ type: 'TOGGLE_USER', id: user.id });
                }}
            >
                {user.email}
            </span>
            <button
                onClick={() => {
                    dispatch({ type: 'REMOVE_USER', id: user.id });
                }}
            >
                Delete
            </button>
        </div>
    );
}
function UserList({ users, onClickEdit }) {
    return (
        <>
            {users.map(user => (
                <User key={user.id} user={user} onClickEdit={onClickEdit} />
            ))}
        </>
    );
}

export default React.memo(UserList);
