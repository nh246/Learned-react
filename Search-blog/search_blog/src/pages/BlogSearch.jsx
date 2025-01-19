import React, { useState } from 'react'
import { useSearchParams } from 'react-router'

const blogs = [
    { id: 1, title: "Understanding React", content: "React is a JavaScript library..." },
    { id: 2, title: "Getting Started with Tailwind CSS", content: "Tailwind CSS is a utility-first..." },
    { id: 3, title: "JavaScript Basics", content: "JavaScript is a versatile language..." },
    { id: 4, title: "Learn TypeScript", content: "TypeScript is a versatile language..." },
]

const BlogSearch = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const searchQuery = searchParams.get("q") || "";
    const [searchTerm, setSearchTerm] = useState(searchQuery)
    // console.log(searchQuery)

    const filterBlogs = blogs.filter(blog => blog.title.toLowerCase().includes(searchQuery.toLowerCase()));
    console.log(filterBlogs)

    const handleSearch = (event) => {
        event.preventDefault();
        setSearchParams({q:searchTerm })
    }
    return (
        <div className='max-w-4xl mx-auto p-6'>
            <h1 className='text-3xl font-bold text-center mb-6'>Blog Search Functionality using URL Search Params</h1>

            {/* search input and button */}
            <form onSubmit={handleSearch} className='flex items-center gap-4 my-6'>
                <input 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                type="text" name="search" id="search" placeholder='Search blogs...' 
                className='flex-1  px-4 py-2 border border-gray-200 rounded-lg shadow-sm focus:outline-none'
                />
                <button type='submit' className='px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition'>Search</button>
            </form>

            <div className='space-y-4'>
                {
                    filterBlogs.length > 0 ? filterBlogs.map(blog => (
                        <div key={blog.id} className='p-4 bg-white rounded-lg shadow-md border border-gray-200'>
                            <h2 className='text-xl font-semibold text-gray-800'>{blog.title}</h2>
                            <p className='text-gray-600'>{blog.content}</p>
                        </div>
                       )) : <p className='text-center text-gray-500'>No blogs found!</p>
                }
                
            </div>
        </div>
    )
}

export default BlogSearch