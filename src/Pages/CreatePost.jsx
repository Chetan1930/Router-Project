import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreatePost({ posts, setPosts, id, setId }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost=({ id: id.toString(), title, content });
    setPosts([...posts,newPost]);
    setId(id + 1);
    console.log(posts); // simulate saving post

    navigate("/");
  };

  return (
    <div>
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <br />
        <textarea
          placeholder="Post Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreatePost;
