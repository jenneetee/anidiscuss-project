import React, { useState } from 'react';
import CommentForm from './CommentForm';
import './PostPage.css';

const PostPage = ({ post, onBackToFeed }) => {
  const [comments, setComments] = useState([]);

  const handleCommentSubmit = (newComment) => {
    setComments([...comments, newComment]);
  };

  return (
    <div className='post-details'>
      <h2>{post.title}</h2>
      {post.imageUrl && <img src={post.imageUrl} alt="Post Image" />}
      <p>{post.content}</p>
      <p>{post.createdAt}</p>
      <p>Upvotes: {post.upvotes}</p>
      <CommentForm onSubmit={handleCommentSubmit} />
      <div className="comments">
        <h3>Comments</h3>
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            <p>{comment}</p>
          </div>
        ))}
      </div>
      <button onClick={onBackToFeed}>Back to Feed</button>
    </div>
  );
};

export default PostPage;
