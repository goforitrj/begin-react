import { useReducer, useCallback } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                [action.name]: action.value
            };
        case 'RESET':
            return Object.keys(state).reduce((acc, current) => {
                acc[current] = '';
                return acc;
            }, {});
        case 'SELECT':
            return {
                ...action.selectedUser
            };
        default:
            return state;
    }
}

function useInputs(initialForm) {
    const [state, dispatch] = useReducer(reducer, initialForm);

    const onChange = useCallback(e => {
        const { name, value } = e.target;
        dispatch({ type: 'CHANGE', name, value });
    }, []);

    const onSelect = useCallback(({ username, email }) => {
        dispatch({ type: 'SELECT', selectedUser: { username, email } });
    }, []);

    const onReset = useCallback(() => {
        dispatch({ type: 'RESET' });
    }, []);

    return [state, onChange, onSelect, onReset];
}

export default useInputs;
