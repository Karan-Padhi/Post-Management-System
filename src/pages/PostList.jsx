import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import mockPosts from "../utils/mock-posts";
import { useLocalStorage } from "../hooks/useLocalStorage";

const PostList = () => {
  const [posts] = useLocalStorage("posts", mockPosts);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterAuthor, setFilterAuthor] = useState("");

  const uniqueAuthors = useMemo(() => {
    const authors = [...new Set(posts.map((post) => post.author))];
    return ["All Authors", ...authors];
  }, [posts]);

  const filteredPosts = useMemo(() => {
    let tempPosts = posts;

    if (filterAuthor && filterAuthor !== "All Authors") {
      tempPosts = tempPosts.filter((post) => post.author === filterAuthor);
    }

    if (searchTerm) {
      tempPosts = tempPosts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return tempPosts;
  }, [posts, searchTerm, filterAuthor]);

  return (
    <div className="post-list">
      <h2 className="mb-4">All Posts</h2>
      <div className="d-flex mb-4">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="form-select"
          value={filterAuthor}
          onChange={(e) => setFilterAuthor(e.target.value)}
        >
          {uniqueAuthors.map((author) => (
            <option key={author} value={author}>
              {author}
            </option>
          ))}
        </select>
      </div>
      {filteredPosts.length > 0 ? (
        <div className="row">
          {filteredPosts.map((post) => (
            <div key={post.id} className="col-md-6 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <span className="badge bg-secondary mb-2">{post.author}</span>
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">
                    {post.content.substring(0, 100)}...
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <Link
                      to={`/posts/${post.id}`}
                      className="btn btn-sm btn-primary"
                    >
                      Read More
                    </Link>
                    <small className="text-muted">
                      {new Date(post.createdAt).toLocaleDateString()}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center mt-5">
          <p>No posts found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default PostList;
