import React from 'react';

function CreateUser({
    username,
    email,
    onCreate,
    onChange,
    onSaveEdit,
    selectedId
}) {
    return (
        <>
            <input
                type="text"
                name="username"
                value={username}
                onChange={onChange}
                placeholder="input username please"
            />
            <input
                type="text"
                name="email"
                value={email}
                onChange={onChange}
                placeholder="input email please"
            />
            {selectedId.current === -1 ? (
                <button onClick={onCreate}>ADD</button>
            ) : (
                <button onClick={onSaveEdit}>Save Edit</button>
            )}
        </>
    );
}

export default CreateUser;
