    import React, { useState } from 'react';

    const PostComments = () => {
    const [comments, setComments] = useState<string[]>([]);
    const [comment, setComment] = useState<string>('');

    const handleSubmit = () => {
        setComments([...comments, comment]);
        setComment('');
    };

    return (
        <div>
        <input
            data-testid="comment-input"
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
        <ul>
            {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
            ))}
        </ul>
        </div>
    );
    };

    export default PostComments;
