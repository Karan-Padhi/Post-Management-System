import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import PostList from "./pages/PostList";
import Header from "./components/Header";
import PostView from "./pages/PostView";
import PostCreate from "./pages/PostCreate";
import PostEdit from "./pages/PostEdit";
import Toast from "./components/Toast";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [toast, setToast] = useState({ show: false, message: "", variant: "" });

  const showToast = (message, variant = "success") => {
    setToast({ show: true, message, variant });
  };

  const hideToast = () => {
    setToast({ ...toast, show: false });
  };

  return (
    <Router>
      <Header />
      <main className="container mt-4">
        <Routes>
          <Route path="/" element={<PostList showToast={showToast} />} />
          <Route
            path="/posts/new"
            element={<PostCreate showToast={showToast} />}
          />
          <Route
            path="/posts/:id"
            element={<PostView showToast={showToast} />}
          />
          <Route
            path="/posts/:id/edit"
            element={<PostEdit showToast={showToast} />}
          />
        </Routes>
      </main>
      <Toast
        show={toast.show}
        onClose={hideToast}
        title="Success"
        message={toast.message}
        variant={toast.variant}
      />
    </Router>
  );
}

export default App;
