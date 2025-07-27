import { Link } from 'react-router-dom';

const truncateText = (text = "", limit = 100) => {
    return text.length > limit ? text.slice(0, limit).trim() + "..." : text;
};

const BlogCard = ({ title, excerpt, author, date, slug }) => {
    return (
        <div className="p-6 text-black transition duration-300 bg-white shadow rounded-xl hover:shadow-lg">
            <h2 className="text-lg font-semibold sm:text-xl">
                {truncateText(title, 50)}
            </h2>

            <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                By {author || "Unknown"} • {date || "Unknown date"}
            </p>

            <p className="mt-3 text-gray-700">
                {truncateText(excerpt || "No excerpt available.", 80)}
            </p>

            <Link to={`/wordverse/blogs/${slug}`} className="inline-block mt-4 font-medium text-orange-500 hover:underline">
                Read More →
            </Link>
        </div>
    )
};

export default BlogCard;
