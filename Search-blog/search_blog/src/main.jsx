import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, Route, Routes } from 'react-router'
import BlogSearch from './pages/BlogSearch'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
     <Routes>
      <Route path='/' element={<BlogSearch/>}/>
    </Routes>
  </BrowserRouter>,
)
