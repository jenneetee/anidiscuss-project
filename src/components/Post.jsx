import React from 'react';

const Post = ({ post }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p> {/* Add this line to display content */}
      <p>{post.createdAt}</p>
      <p>Upvotes: {post.upvotes}</p>
    </div>
  );
};

export default Post;

