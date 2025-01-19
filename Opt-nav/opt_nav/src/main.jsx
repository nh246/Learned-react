import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router";
import Blogs from './pages/Blogs.jsx';
import BlogDetail from './pages/BlogDetail.jsx';

createRoot(document.getElementById('root'))
.render(
  <BrowserRouter>
     <Routes>
      <Route path="/" element={<Blogs/>} />
      <Route path="/blogs/:id" 
      element={<BlogDetail/>} />
    </Routes>
  </BrowserRouter>,
)
