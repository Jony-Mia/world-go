// src/pages/PostDetails.jsx

import { use } from "react";
import { useParams, useNavigate } from "react-router";
import { fetchPost } from "../api/post";

function PostDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = use(fetchPost(id)); // ✅ cached promise

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={() => navigate(-1)}>⬅ Back</button>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export default PostDetails;