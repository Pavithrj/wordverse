import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
    const truncateText = (text = "", limit = 100) => {
        return text.length > limit ? text.slice(0, limit).trim() + "..." : text;
    };

    return (
        <Link to={`/wordverse/blogs/${blog?.slug}`} className="block">
            <div className="overflow-hidden transition bg-white rounded-lg shadow hover:shadow-md">
                <img src={blog?.image} alt={blog?.title} className="object-cover w-full h-48" />

                <div className="p-4">
                    <h2 className="text-lg font-semibold sm:text-xl">
                        {truncateText(blog?.title, 50)}
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                        {blog?.author} • {blog?.date}
                    </p>

                    <p className="mt-3 text-gray-700">
                        {blog?.excerpt}
                    </p>
                </div>
            </div>
        </Link>
    )
};

export default BlogCard;
