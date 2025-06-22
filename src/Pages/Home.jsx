import React from 'react';
import { Link } from 'react-router-dom';

function Home({posts}) {
  return (
    <div>
      <h1>Blog Home</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <Link to={`/posts/${post.id}`}>Read More</Link>
          </li>
        ))}
      </ul>
      <Link to="/create">Create New Post</Link>
    </div>
  );
}

export default Home;
