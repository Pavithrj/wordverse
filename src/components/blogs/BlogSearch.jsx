import { useState } from 'react';

const BlogSearch = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        onSearch(query);
    };

    return (
        <div className="flex gap-2 my-6">
            <input
                type="text"
                placeholder="Search blogs..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
            />
            <button
                onClick={handleSearch}
                className="px-4 py-2 text-white transition bg-indigo-600 rounded-md hover:bg-indigo-700"
            >
                Search
            </button>
        </div>
    );
};

export default BlogSearch;
