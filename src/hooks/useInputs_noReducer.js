import { useState, useCallback } from 'react';

function UseInputs(initialForm) {
    const [form, setForm] = useState(initialForm);

    const onChange = useCallback(
        e => {
            console.log('ho?');
            const { name, value } = e.target;
            setForm({
                ...form,
                [name]: value
            });
        },
        [form]
    );

    const onSelect = useCallback(({ username, email }) => {
        setForm({
            username,
            email
        });
    }, []);

    const onReset = useCallback(() => {
        setForm(initialForm);
    }, [initialForm]);

    return [form, onChange, onSelect, onReset];
}

export default UseInputs;
