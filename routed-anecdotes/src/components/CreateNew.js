import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useField } from '../hooks';

const CreateNew = (props) => {
    const navigate = useNavigate();

    const { clear: clearContent, ...content } = useField('text');
    const { clear: clearAuthor, ...author } = useField('text');
    const { clear: clearInfo, ...info } = useField('text');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addNew({
            content: content.value,
            author: author.value,
            info: info.value,
            votes: 0,
        });
        props.notificate(content.value);
        navigate('/');
    };

    const clearAreas = (e) => {
        e.preventDefault();
        clearContent();
        clearAuthor();
        clearInfo();
    };

    return (
        <div>
            <h2>create a new anecdote</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    content
                    <input
                        name='content'
                        // value={content}
                        // onChange={(e) => setContent(e.target.value)}
                        {...content}
                    />
                </div>
                <div>
                    author
                    <input name='author' {...author} />
                </div>
                <div>
                    url for more info
                    <input name='info' {...info} />
                </div>
                <button type='submit'>create</button>
                <button onClick={clearAreas}>reset</button>
            </form>
        </div>
    );
};

export default CreateNew;
