import React from 'react'
import { Link } from 'react-router'

const BlogCard = ({blog}) => {
  return (
    <div className='bg-white shadow-md rounded-md p-8 cursor-pointer hover:-translate-y-3 transition-all duration-300'>
        <h2 className='text-xl font-semibold mb-2'>{blog.title}</h2>
        <p className='text-gray-600 truncate'>{blog.body}</p>
        <Link to={`/blogs/${blog.id}`} className='inline-block p-1 rounded text-blue-500 mt-4 hover:text-black'>Read More ➡</Link>
    </div>
  )
}

export default BlogCard