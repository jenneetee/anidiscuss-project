import React, { useState } from 'react';
import CreatePostForm from './components/CreatePostForm';
import PostList from './components/PostList';
import PostPage from './components/PostPage';
import "./App.css";

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: '"Death Note" 18th episode discussion', content: 'Feel free to leave comments below about what you think of this episode!', genre: 'Horror', createdAt: 'April 25, 2024', upvotes: 10 },
    { id: 2, title: 'Where do I watch "SPY x FAMILY: Season 2"???', content: 'PLS HELP!!!', genre: 'Action', createdAt: 'April 26, 2024', upvotes: 15 },
    { id: 3, title: 'Just finished "Attack on Titan"!', content: 'What a wild ride! What are your thoughts on the ending?', genre: 'Action', createdAt: 'April 27, 2024', upvotes: 20 },
    { id: 4, title: 'Looking for a good "Romance" anime', content: 'Any recommendations?', genre: 'Romance', createdAt: 'April 28, 2024', upvotes: 5 },
    { id: 5, title: 'New "One Piece" movie coming out soon!', content: 'Who else is excited?', genre: 'Action', createdAt: 'February 29, 2024', upvotes: 25 },
    { id: 6, title: 'Just watched "Naruto" for the first time', content: 'What a classic anime!', genre: 'Action', createdAt: 'January 1, 2024', upvotes: 30 },
    { id: 7, title: 'Best "Comedy" anime recommendations', content: 'Looking for a good laugh!', genre: 'Comedy', createdAt: 'December 2, 2020', upvotes: 8 },
    { id: 8, title: 'Is "My Hero Academia" worth watching?', content: 'I heard mixed reviews about it.', genre: 'Action', createdAt: 'March 3, 2024', upvotes: 12 },
    { id: 9, title: 'Just finished "Jujutsu Kaisen"!', content: 'What a great anime! Can\'t wait for the next season.', genre: 'Action', createdAt: 'March 4, 2024', upvotes: 18 },
    { id: 10, title: 'Looking for a good "Fantasy" anime', content: 'Any recommendations?', genre: 'Fantasy', createdAt: 'March 5, 2024', upvotes: 7 },
    // Other posts
  ]);

  const [selectedPostId, setSelectedPostId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [sortBy, setSortBy] = useState('createdAt'); // Default sort by createdAt

  const handleCreatePost = (newPost) => {
    setPosts([...posts, { id: posts.length + 1, ...newPost, createdAt: new Date().toLocaleString(), upvotes: 0 }]);
  };

  const handlePostClick = (postId) => {
    setSelectedPostId(postId);
  };

  const handleBackToFeed = () => {
    setSelectedPostId(null);
  };

  const handleDeletePost = (postId) => {
    setPosts(posts.filter(post => post.id !== postId));
  };

  const handleEditPost = (postId) => {
    // Implement edit functionality
  };

  const findPostById = (postId) => {
    return posts.find(post => post.id === postId);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleGenreFilter = (event) => {
    setSelectedGenre(event.target.value);
  };

  const handleSortBy = (event) => {
    setSortBy(event.target.value);
  };

  const handleUpvote = (postId) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return { ...post, upvotes: post.upvotes + 1 };
      }
      return post;
    }));
  };

  const sortPosts = (a, b) => {
    if (sortBy === 'upvotes') {
      return b.upvotes - a.upvotes; // Sort by upvotes in descending order
    } else {
      // Sort by createdAt (default)
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return dateB - dateA; // Sort by createdAt in descending order
    }
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (!selectedGenre || post.genre === selectedGenre)
  ).sort(sortPosts);

  return (
    <div>
      <nav className="navbar">
        <h1><a href="">AniDiscuss.net</a></h1>
        <input className='search-bar'
          type="text"
          placeholder="🔎Search by title..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <select value={selectedGenre} onChange={handleGenreFilter}>
          <option value="">All Genres</option>
          <option value="Horror">Horror</option>
          <option value="Romance">Romance</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Slice of Life">Slice of Life</option>
        </select>
        <select value={sortBy} onChange={handleSortBy}>
          <option value="createdAt">Sort by Created Time</option>
          <option value="upvotes">Sort by Upvotes</option>
        </select>
      </nav>
      <div className="main-content">
        <div className='.create-post-form'>
          <CreatePostForm onSubmit={handleCreatePost} />
        </div>
        <h2>Posts</h2>
        {selectedPostId ? (
          <PostPage post={findPostById(selectedPostId)} onBackToFeed={handleBackToFeed} onDelete={handleDeletePost} onEdit={handleEditPost} />
        ) : (
          <PostList posts={filteredPosts} onPostClick={handlePostClick} onUpvote={handleUpvote} onDelete={handleDeletePost} onEdit={handleEditPost} />
        )}
      </div>
    </div>
  );
};

export default App;
