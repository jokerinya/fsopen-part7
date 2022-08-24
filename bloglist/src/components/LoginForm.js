import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { loginUser } from '../reducers/authReducer';

const LoginForm = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(loginUser({ username, password }));
        setUsername('');
        setPassword('');
    };
    return (
        <form onSubmit={handleSubmit}>
            <div>
                username:
                <input
                    type='text'
                    name='username'
                    id='username'
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
            </div>
            <div>
                password:
                <input
                    type='password'
                    name='password'
                    id='password'
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div>
            <button id='login-submit-button' type='submit'>
                login
            </button>
        </form>
    );
};

export default LoginForm;
