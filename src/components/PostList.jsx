import React from 'react';
import './PostList.css';

const PostList = ({ posts, onPostClick, onUpvote, onDelete, onEdit }) => {
  const getGenreColor = (genre) => {
    switch (genre.toLowerCase()) {
      case 'horror':
        return 'red';
      case 'romance':
        return 'pink';
      case 'action':
        return 'blue';
      case 'comedy':
        return 'green';
      case 'fantasy':
        return 'purple';
      case 'slice of life':
        return 'orange';
      default:
        return 'black'; // Default color
    }
  };

  return (
    <div>
      {posts.map(post => (
        <div key={post.id} className="post">
          <h3>{post.title}</h3>
          <i>Created on {post.createdAt}</i>
          <h4 style={{ color: getGenreColor(post.genre) }}>Genre: {post.genre}</h4>
          <h4>{post.upvotes} upvotes</h4>
          <div className='button-container'>
            <button onClick={() => onUpvote(post.id)}>Upvote ⬆️</button>
            <button onClick={() => onPostClick(post.id)}>View Details</button>
            <button onClick={() => onDelete(post.id)}>Delete</button>
            <button onClick={() => onEdit(post.id)}>Edit</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
