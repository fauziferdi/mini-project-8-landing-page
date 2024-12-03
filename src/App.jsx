import "./App.css";
import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BlogListPage from "./pages/BlogListPage";
const BlogDetailPage = lazy(() => import("./pages/BlogDetailPage"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<BlogListPage />} />
          <Route path="/blog/:id" element={<BlogDetailPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
