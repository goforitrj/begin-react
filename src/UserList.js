import React from 'react';
function User({ user, onRemove, onEdit }) {
    return (
        <div>
            <b>{user.username}</b>
            <span>{user.email}</span>
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
function UserList({ users, onRemove, onEdit }) {
    return (
        <>
            {users.map(user => (
                <User
                    key={user.id}
                    user={user}
                    onRemove={onRemove}
                    onEdit={onEdit}
                />
            ))}
        </>
    );
}

export default UserList;
