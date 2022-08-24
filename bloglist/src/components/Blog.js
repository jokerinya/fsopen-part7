import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteBlog, likeBlog } from '../reducers/blogReducer';
import {
    setSuccessNotification,
    setErrorNotification,
} from '../reducers/notificationReducer';

const Blog = ({ blog, user }) => {
    const dispatch = useDispatch();
    const [viewDetails, setViewDetails] = useState(false);

    const createdByUser = blog.user.id === user.id;

    const blogStyle = {
        paddingTop: 10,
        paddingLeft: 2,
        border: 'solid',
        borderWidth: 1,
        marginBottom: 5,
    };

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
        }
    };

    const details = () => (
        <div className='blog-details'>
            <div>{blog.url}</div>
            <div>
                likes {blog.likes}{' '}
                <button className='blog-like-button' onClick={handleLikeClick}>
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
    );

    return (
        <div style={blogStyle} className='blog-container'>
            <div>
                {blog.title} {blog.author}
                <button onClick={() => setViewDetails(!viewDetails)}>
                    {viewDetails ? 'hide' : 'view'}
                </button>
            </div>
            {viewDetails && details()}
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    onBlogLike: PropTypes.func,
};

export default Blog;
