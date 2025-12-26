import { useState } from 'react';
import blogsData from '../data/blogsData';
import BlogCard from '../components/blogs/BlogCard';

const Blogs = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [query, setQuery] = useState("");

    const categories = [...new Set(blogsData.map((b) => b.category))];

    const filteredBlogs = blogsData.filter((blog) => {
        const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    if (filteredBlogs.length === 0) {
        return <p className="mt-8 text-center text-gray-600">No blogs found.</p>;
    }

    return (
        <main className="min-h-screen bg-gray-50">
            <section className="py-10 text-center">
                <h1 className="mb-2 text-4xl font-bold">
                    Explore Blogs
                </h1>

                <p className="text-gray-600">
                    Discover articles, guides, and insights from WordVerse creators.
                </p>
            </section>

            <div className="max-w-6xl px-4 mx-auto">
                <div className="flex gap-2 my-6">
                    <input type="text" id="blog-search" name="search" placeholder="Search blogs..." value={query} onChange={(e) => setQuery(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md" autoComplete="on" />

                    <button onClick={() => setSearchQuery(query)} className="px-4 py-2 text-white transition bg-indigo-600 rounded-md hover:bg-indigo-700">
                        Search
                    </button>
                </div>

                <div className="flex flex-wrap gap-4 my-4">
                    {["All", ...categories].map((category, index) => (
                        <button key={index} onClick={() => setSelectedCategory(category)} className={`px-4 py-2 rounded-full text-sm border ${selectedCategory === category ? "bg-indigo-600 text-white" : "text-gray-700 border-gray-300 hover:bg-gray-100"}`}>
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 gap-6 my-8 md:grid-cols-2 lg:grid-cols-3">
                    {filteredBlogs.map((blog, index) => (
                        <BlogCard key={index} blog={blog} />
                    ))}
                </div>
            </div>
        </main>
    )
};

export default Blogs;
