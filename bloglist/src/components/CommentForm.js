import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCommentToBlog } from '../reducers/blogReducer';

const CommentForm = ({ blog }) => {
    const [content, setContent] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = async (event) => {
        event.preventDefault();
        dispatch(addCommentToBlog(content, blog));
        setContent('');
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                name='content'
                id='comment-content-input'
                onChange={(event) => setContent(event.target.value)}
                value={content}
            />
            <button type='submit'>add comment</button>
        </form>
    );
};

export default CommentForm;
