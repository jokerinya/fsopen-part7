import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import { deleteBlog, likeBlog } from '../reducers/blogReducer';

const Blog = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const navigate = useNavigate();
    const blog = useSelector(({ blogs }) => blogs.find((u) => u.id === id));
    const user = useSelector(({ user }) => user);

    if (!user || !blog) return null;

    const createdByUser = blog.user.id === user.id;

    const handleLikeClick = () => {
        const updatedBlogObj = {
            ...blog,
            user: blog.user.id,
            likes: blog.likes + 1,
        };
        dispatch(likeBlog(updatedBlogObj));
    };

    const handleRemoveClick = () => {
        if (window.confirm(`Remove blog ${blog.title} by ${blog.author}`)) {
            dispatch(deleteBlog(blog.id));
            navigate('/');
        }
    };

    return (
        <div>
            <h2>{blog.title}</h2>
            <div className='blog-details'>
                <a href={blog.url}>{blog.url}</a>
                <div>
                    likes {blog.likes}{' '}
                    <button
                        className='blog-like-button'
                        onClick={handleLikeClick}
                    >
                        like
                    </button>
                </div>
                <div>{blog.user.name}</div>
                {createdByUser && (
                    <button
                        className='blog-remove-button'
                        onClick={handleRemoveClick}
                    >
                        remove
                    </button>
                )}
            </div>
        </div>
    );
};

export default Blog;
