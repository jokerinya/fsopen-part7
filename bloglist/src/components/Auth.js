import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../reducers/authReducer';

const Auth = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    return (
        <>
            {user.name} logged in{' '}
            <button onClick={() => dispatch(logoutUser())}>logout</button>
        </>
    );
};

export default Auth;
