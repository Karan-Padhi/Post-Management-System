import React, { useState } from "react";

const PostForm = ({ initialData = {}, onSubmit, isEditing = false }) => {
  const [formData, setFormData] = useState({
    title: initialData.title || "",
    author: initialData.author || "",
    content: initialData.content || "",
    tags: initialData.tags ? initialData.tags.join(", ") : "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.title) newErrors.title = "Title is required.";
    if (!formData.author) newErrors.author = "Author is required.";
    if (!formData.content) newErrors.content = "Content is required.";
    else if (formData.content.length < 50)
      newErrors.content = "Content must be at least 50 characters.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      const tagsArray = formData.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag);
      onSubmit({
        ...formData,
        tags: tagsArray,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title *
        </label>
        <input
          type="text"
          className={`form-control ${errors.title ? "is-invalid" : ""}`}
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        {errors.title && <div className="invalid-feedback">{errors.title}</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="author" className="form-label">
          Author *
        </label>
        <input
          type="text"
          className={`form-control ${errors.author ? "is-invalid" : ""}`}
          id="author"
          name="author"
          value={formData.author}
          onChange={handleChange}
        />
        {errors.author && (
          <div className="invalid-feedback">{errors.author}</div>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="content" className="form-label">
          Content *
        </label>
        <textarea
          className={`form-control ${errors.content ? "is-invalid" : ""}`}
          id="content"
          name="content"
          rows="10"
          value={formData.content}
          onChange={handleChange}
        ></textarea>
        {errors.content && (
          <div className="invalid-feedback">{errors.content}</div>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Tags (comma-separated)
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          name="tags"
          value={formData.tags}
          onChange={handleChange}
          placeholder="e.g., react, javascript, coding"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        {isEditing ? "Update Post" : "Create Post"}
      </button>
    </form>
  );
};

export default PostForm;
