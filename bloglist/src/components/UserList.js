import React from 'react';
import { useSelector } from 'react-redux';
import User from './User';

const UserList = () => {
    const users = useSelector((state) => state.allUsers);
    return (
        <>
            <h2>Users</h2>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>blogs created</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <User key={user.id} user={user} />
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default UserList;
