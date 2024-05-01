import React, { useState } from 'react';

const CreatePostForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [genre, setGenre] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if required fields are filled
    if (!title.trim() || !content.trim() || !genre.trim()) {
      alert('Please fill in all required fields: Title, Content, and Genre.');
      return;
    }
    onSubmit({ title, content, imageUrl, genre }); // Include genre in the submitted data
    setTitle('');
    setContent('');
    setImageUrl('');
    setGenre(''); // Reset genre after submission
  };

  return (
    <form className="create-post-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} required />
      <input type="text" placeholder="Image URL" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
      <label htmlFor="genre">Choose a genre:</label>
      <select id="genre" name="genre" value={genre} onChange={(e) => setGenre(e.target.value)} required>
        <option value="">Select a genre</option>
        <option value="Horror">Horror</option>
        <option value="Romance">Romance</option>
        <option value="Action">Action</option>
        <option value="Comedy">Comedy</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Slice of Life">Slice of Life</option>
      </select>
      <button type="submit">Create Post</button>
    </form>
  );
};

export default CreatePostForm;
