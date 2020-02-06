import React, { useEffect } from 'react';
function User({ user, onRemove, onClickEdit, onToggle }) {
    useEffect(() => {
        console.log('When Component is showing up');
        return () => {
            console.log('When Component is gone');
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
