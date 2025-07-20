
const truncateText = (text = "", limit = 100) => {
    return text.length > limit ? text.slice(0, limit).trim() + "..." : text;
};

const BlogCard = ({ title, excerpt, author, date }) => {
    return (
        <div className="p-6 text-black transition duration-300 bg-white shadow rounded-xl hover:shadow-lg">
            <h2 className="text-xl font-semibold">
                {truncateText(title, 50)}
            </h2>

            <p className="mt-1 text-sm text-gray-500">
                By {author} • {date}
            </p>

            <p className="mt-3 text-gray-700">
                {truncateText(excerpt, 80)}
            </p>

            <button className="mt-4 font-medium text-orange-500 hover:underline">
                Read More →
            </button>
        </div>
    )
};

export default BlogCard;
