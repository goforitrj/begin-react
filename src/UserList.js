import React, { useEffect } from 'react';
function User({ user, onRemove, onClickEdit, onToggle }) {
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
                    onToggle(user.id);
                }}
            >
                {user.username}
            </b>
            <span
                onClick={() => {
                    onToggle(user.id);
                }}
            >
                {user.email}
            </span>
            <button
                onClick={() => {
                    onClickEdit(user.id);
                }}
            >
                Edit
            </button>
            <button
                onClick={() => {
                    onRemove(user.id);
                }}
            >
                Delete
            </button>
        </div>
    );
}
function UserList({ users, onRemove, onClickEdit, onToggle }) {
    return (
        <>
            {users.map(user => (
                <User
                    key={user.id}
                    user={user}
                    onRemove={onRemove}
                    onClickEdit={onClickEdit}
                    onToggle={onToggle}
                />
            ))}
        </>
    );
}

export default React.memo(UserList);
