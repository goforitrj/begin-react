import React, { useEffect } from 'react';
function User({ user, onRemove, onEdit, onToggle }) {
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
                    onEdit(user.id);
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
function UserList({ users, onRemove, onEdit, onToggle }) {
    return (
        <>
            {users.map(user => (
                <User
                    key={user.id}
                    user={user}
                    onRemove={onRemove}
                    onEdit={onEdit}
                    onToggle={onToggle}
                />
            ))}
        </>
    );
}

export default UserList;
