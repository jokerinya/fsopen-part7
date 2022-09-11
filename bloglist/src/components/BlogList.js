import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { initializeBlogs } from '../reducers/blogReducer';
import Notification from './Notification';
import Togglable from './Togglable';
import BlogForm from './BlogForm';

const BlogList = () => {
    /* store */
    const dispatch = useDispatch();
    const blogs = useSelector((state) => state.blogs);
    /* Refs */
    const createFormRef = useRef();
    /* Effects */
    useEffect(() => {
        dispatch(initializeBlogs());
    }, []);

    /* To be able activate child components event in the parent component */
    const handleVisibilty = () => {
        createFormRef.current.toggleVisibility();
    };

    const blogStyle = {
        margin: '1rem 0 0',
        border: '1px saddlebrown solid',
        borderRadius: 5,
        padding: '0.5rem',
    };

    return (
        <div>
            <Notification />
            <Togglable buttonLabel='new blog' ref={createFormRef}>
                <BlogForm changeVisiblity={handleVisibilty} />
            </Togglable>
            {blogs.map((blog) => (
                <div key={blog.id} style={blogStyle} className='blog-container'>
                    <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
                </div>
            ))}
        </div>
    );
};

export default BlogList;
