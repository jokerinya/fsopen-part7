import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBlog } from '../reducers/blogReducer';
import {
    setSuccessNotification,
    setErrorNotification,
} from '../reducers/notificationReducer';

const BlogForm = ({ changeVisiblity }) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [url, setUrl] = useState('');

    const handleCreateBlogFormSubmit = async (event) => {
        event.preventDefault();
        try {
            dispatch(createBlog({ title, author, url }));
            dispatch(
                setSuccessNotification(`a new blog ${title} by ${author} added`)
            );
            setTitle('');
            setAuthor('');
            setUrl('');
            changeVisiblity();
        } catch (exception) {
            console.log(exception);
            dispatch(setErrorNotification(exception.response.data.error));
        }
    };

    return (
        <form onSubmit={handleCreateBlogFormSubmit}>
            <h2>create new</h2>
            <div>
                title:
                <input
                    type='text'
                    name='title'
                    id='blog-title-input'
                    onChange={(event) => setTitle(event.target.value)}
                    value={title}
                />
            </div>
            <div>
                author:
                <input
                    type='text'
                    name='author'
                    id='blog-author-input'
                    onChange={(event) => setAuthor(event.target.value)}
                    value={author}
                />
            </div>
            <div>
                url:
                <input
                    type='text'
                    name='url'
                    id='blog-url-input'
                    onChange={(event) => setUrl(event.target.value)}
                    value={url}
                />
            </div>
            <div>
                <button id='blog-submit-button' type='submit'>
                    create
                </button>
            </div>
        </form>
    );
};

export default BlogForm;
