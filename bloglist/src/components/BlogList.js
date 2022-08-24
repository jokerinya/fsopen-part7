import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initializeBlogs } from '../reducers/blogReducer';
import Notification from './Notification';
import Togglable from './Togglable';
import BlogForm from './BlogForm';
import Blog from './Blog';

const BlogList = () => {
    /* store */
    const dispatch = useDispatch();
    const blogs = useSelector((state) => state.blogs);
    const user = useSelector((state) => state.user);
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

    return (
        <div>
            <Notification />
            <Togglable buttonLabel='new blog' ref={createFormRef}>
                <BlogForm changeVisiblity={handleVisibilty} />
            </Togglable>
            {blogs.map((blog) => (
                <Blog key={blog.id} blog={blog} user={user} />
            ))}
        </div>
    );
};

export default BlogList;
