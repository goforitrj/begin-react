import React from 'react';

function CreateUser({ username, email, onCreate, onChange }) {
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
            <button onClick={onCreate}>ADD</button>
        </>
    );
}

export default CreateUser;
