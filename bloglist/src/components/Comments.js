import React from 'react';

const Comments = ({ comments }) => {
    return (
        <>
            {comments.length > 0 ? (
                <ul>
                    {comments.map((comment) => (
                        <li key={comment.id}>{comment.content}</li>
                    ))}
                </ul>
            ) : (
                <p>there is no comment for this blog</p>
            )}
        </>
    );
};

export default Comments;
