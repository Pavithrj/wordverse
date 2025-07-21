const BlogFilter = ({ categories, selectedCategory, onSelect }) => {
    return (
        <div className="flex flex-wrap gap-4 my-4">
            {['All', ...categories].map((category, index) => (
                <button
                    key={index}
                    onClick={() => onSelect(category)}
                    className={`px-4 py-2 rounded-full text-sm border ${selectedCategory === category
                        ? 'bg-indigo-600 text-white'
                        : 'text-gray-700 border-gray-300 hover:bg-gray-100'
                        }`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default BlogFilter;
