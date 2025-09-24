import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";
import mockPosts from "../utils/mock-posts";

const PostView = ({ showToast }) => {
  // Add showToast prop
  const { id } = useParams();
  const navigate = useNavigate();
  const [posts, setPosts] = useLocalStorage("posts", mockPosts);

  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="text-center mt-5">
        <h2>Post Not Found</h2>
        <p>The post you are looking for does not exist.</p>
        <Link to="/" className="btn btn-primary mt-3">
          Back to All Posts
        </Link>
      </div>
    );
  }

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      const updatedPosts = posts.filter((p) => p.id !== id);
      setPosts(updatedPosts);
      showToast("Post deleted successfully!", "danger"); // Show danger toast
      navigate("/");
    }
  };

  return (
    <div className="post-view">
      <h1 className="mb-3">{post.title}</h1>
      <div className="d-flex justify-content-between align-items-center mb-3 text-muted">
        <small>By {post.author}</small>
        <small>
          Published on {new Date(post.createdAt).toLocaleDateString()}
        </small>
      </div>
      <div className="tags mb-4">
        {post.tags.map((tag) => (
          <span key={tag} className="badge bg-info text-dark me-2">
            {tag}
          </span>
        ))}
      </div>
      <p>{post.content}</p>
      <div className="d-flex justify-content-between mt-4">
        <div>
          <Link to="/" className="btn btn-primary me-2">
            Back to All Posts
          </Link>
          <Link to={`/posts/${post.id}/edit`} className="btn btn-warning">
            Edit Post
          </Link>
        </div>
        <button onClick={handleDelete} className="btn btn-danger">
          Delete Post
        </button>
      </div>
    </div>
  );
};

export default PostView;
