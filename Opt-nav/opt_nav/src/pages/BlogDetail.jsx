import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'

const BlogDetail = () => {
  const { id } = useParams();

  // console.log(" Id: ", id)

  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => {
        setBlog(data)
      })
  }, [])

  console.log(blog)

  if(!blog) return <p className='container mx-auto p-5'>Loading...</p>


  return (
    <div className='container mx-auto p-5'>
      <h1 className='text-3xl font-bold my-8 border-b border-blue-500 inline-block'>Blog Details Page</h1>

      <div className='bg-white shadow-md max-w-sm rounded-md p-6'>
        <h2 className='text-2xl font-bold mb-4'>{blog?.title}</h2>
        <p className='text-gray-700'>{blog?.body}</p>

        <Link to="/"><button className='text-blue-500 mt-4'> ← Go Back</button></Link>
      </div>
    </div>
  )
}

export default BlogDetail