import { useState, useEffect } from 'react';

import styles from '@/styles/Comments.module.scss';

function Comments({ id }) {
  const [comments, setComments] = useState(() => {
    if (typeof window !== 'undefined') {
      const commentsFromStorage = localStorage.getItem(`commentsFor-${id}`);
      return commentsFromStorage ? JSON.parse(commentsFromStorage) : [];
    }
  });

  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  useEffect(() => {
    localStorage.setItem(`commentsFor-${id}`, JSON.stringify(comments));
  }, [comments]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && comment !== '') {
      const newComment = { name, comment };
      setComments([...comments, newComment]);
      setName('');
      setComment('');
    }
  };

  return (
    <div className={styles.commentSection}>
      <h3>Leave a Comment below</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="comment">Comment:</label>
          <textarea
            id="comment"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      {comments &&
        comments.map((comment) => {
          return (
            <div className={styles.comment}>
              <p>{comment.name}</p>
              <p>{comment.comment}</p>
            </div>
          );
        })}
    </div>
  );
}

export default Comments;
