// src/components/PostCard.jsx

function PostCard({ post, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        cursor: "pointer",
        borderRadius: "10px"
      }}
    >
      <h3>{post.title}</h3>
      <p>{post.body.slice(0, 80)}...</p>
    </div>
  );
}

export default PostCard;