import React from 'react';
import { Link } from 'react-router-dom';

const User = ({ user }) => {
    return (
        <tr>
            <td>
                <Link to={`/users/${user.id}`}>{user.name}</Link>
            </td>
            <td>{user.blogs.length}</td>
        </tr>
    );
};

export default User;
