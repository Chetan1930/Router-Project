import React from "react";
import { useParams, Link } from "react-router-dom";

function PostDetails({posts}) {
  const { postId } = useParams();
  const post = posts.find((p) => p.id === postId);

  if (!post) return <p>Post not found</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default PostDetails;
