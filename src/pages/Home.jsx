// src/pages/Home.jsx

import { use } from "react";
import { useNavigate } from "react-router";
import { fetchPosts } from "../api/post";
import PostCard from "../components/PostCard";

function Home() {
  const posts = use(fetchPosts());
  const navigate = useNavigate();

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
      {posts.slice(0, 12).map(post => (
        <PostCard
          key={post.id}
          post={post}
          onClick={() => navigate(`/post/${post.id}`)}
        />
      ))}
    </div>
  );
}

export default Home;