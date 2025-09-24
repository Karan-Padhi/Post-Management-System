import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import PostForm from "../components/PostForm";
import { useLocalStorage } from "../hooks/useLocalStorage";

const PostEdit = ({ showToast }) => {
  // Add showToast prop
  const { id } = useParams();
  const navigate = useNavigate();
  const [posts, setPosts] = useLocalStorage("posts");
  const postToEdit = posts.find((p) => p.id === id);

  if (!postToEdit) {
    return (
      <div className="text-center mt-5">
        <h2>Post Not Found</h2>
        <p>The post you are trying to edit does not exist.</p>
      </div>
    );
  }

  const handleUpdatePost = (updatedData) => {
    const updatedPosts = posts.map((post) =>
      post.id === id
        ? { ...post, ...updatedData, updatedAt: new Date().toISOString() }
        : post
    );
    setPosts(updatedPosts);
    showToast("Post updated successfully!"); // Show success toast
    navigate(`/posts/${id}`);
  };

  return (
    <div className="post-edit">
      <h2 className="mb-4">Edit Post</h2>
      <PostForm
        initialData={postToEdit}
        onSubmit={handleUpdatePost}
        isEditing={true}
      />
    </div>
  );
};

export default PostEdit;
