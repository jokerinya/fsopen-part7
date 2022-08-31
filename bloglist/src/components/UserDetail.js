import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const UserDetail = () => {
    const { id } = useParams();
    const user = useSelector((state) =>
        state.allUsers.find((u) => u.id === id)
    );
    return (
        <div>
            <h2>{user.name}</h2>
            <h4>added blogs</h4>
            <ul>
                {user.blogs.map((blog) => (
                    <li key={blog.id}>{blog.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserDetail;
