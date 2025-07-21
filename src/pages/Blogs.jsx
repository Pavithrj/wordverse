import { useState } from 'react';
import BlogList from '../components/blogs/BlogList';
import BlogSearch from '../components/blogs/BlogSearch';
import BlogFilter from '../components/blogs/BlogFilter';
import blogsData from '../data/blogsData';

const Blogs = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [category, setCategory] = useState('All');

    const categories = [...new Set(blogsData.map((b) => b.category))];

    const filteredBlogs = blogsData.filter((blog) => {
        const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = category === 'All' || blog.category === category;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-gray-50">
            <section className="py-10 text-center">
                <h1 className="mb-2 text-4xl font-bold">Explore Blogs</h1>
                <p className="text-gray-600">Discover articles, guides, and insights from WordVerse creators.</p>
            </section>

            <div className="max-w-6xl px-4 mx-auto">
                <BlogSearch onSearch={setSearchQuery} />
                <BlogFilter
                    categories={categories}
                    selectedCategory={category}
                    onSelect={setCategory}
                />
                <BlogList blogs={filteredBlogs} />
            </div>
        </div>
    );
};

export default Blogs;
