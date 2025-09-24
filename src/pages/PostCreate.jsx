import React from "react";
import { useNavigate } from "react-router-dom";
import PostForm from "../components/PostForm";
import { useLocalStorage } from "../hooks/useLocalStorage";
import mockPosts from "../utils/mock-posts";

const PostCreate = ({ showToast }) => {
  // Add showToast prop
  const navigate = useNavigate();
  const [posts, setPosts] = useLocalStorage("posts", mockPosts);

  const handleCreatePost = (newPostData) => {
    const newPost = {
      ...newPostData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setPosts([newPost, ...posts]);
    showToast("Post created successfully!"); // Show success toast
    navigate("/");
  };

  return (
    <div className="post-create">
      <h2 className="mb-4">Create New Post</h2>
      <PostForm onSubmit={handleCreatePost} />
    </div>
  );
};

export default PostCreate;
