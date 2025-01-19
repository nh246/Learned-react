import React, { useEffect, useState } from 'react'
import BlogCard from '../components/BlogCard';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect( () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => {
            setBlogs(data)
        })
    } , [])

    // console.log(blogs)
  return (
    <div className='container mx-auto p-5'>
        <h1 className='text-3xl font-bold my-8 border-l-4 border-blue-600 pl-4'>All Blog Posts</h1>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {
              blogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog}/>
              ))  
            }
        </div>
    </div>
  )
}

export default Blogs