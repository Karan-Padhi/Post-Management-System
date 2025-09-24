import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-dark text-white p-3 shadow-sm">
      <div className="container d-flex justify-content-between align-items-center">
        <Link to="/" className="text-white text-decoration-none h4 m-0">
          Post Management System
        </Link>
        <nav>
          <Link to="/" className="btn btn-outline-light me-2">
            All Posts
          </Link>
          <Link to="/posts/new" className="btn btn-success">
            Create Post
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
