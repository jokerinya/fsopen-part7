import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../reducers/authReducer';

const User = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    return (
        <p>
            {user.name} logged in
            <button onClick={() => dispatch(logoutUser())}>logout</button>
        </p>
    );
};

export default User;
