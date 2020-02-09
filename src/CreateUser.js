import React, { useRef, useContext } from 'react';
import { userDispatch } from './App';
import useInputs from './hooks/useInputs';

function CreateUser() {
    const [{ username, email }, onChange, onReset] = useInputs({
        username: '',
        email: ''
    });
    const nextId = useRef(4);
    const dispatch = useContext(userDispatch);
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

            <button
                onClick={() => {
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
                }}
            >
                ADD
            </button>
        </>
    );
}

export default React.memo(CreateUser);
