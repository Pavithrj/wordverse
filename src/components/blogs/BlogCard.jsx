import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
    return (
        <Link to={`/wordverse/blogs/${blog.slug}`} className="block">
            <div className="overflow-hidden transition bg-white rounded-lg shadow hover:shadow-md">
                <img src={blog.image} alt={blog.title} className="object-cover w-full h-48" />
                <div className="p-4">
                    <h2 className="text-xl font-semibold">{blog.title}</h2>
                    <p className="mt-1 text-sm text-gray-500">{blog.author} • {blog.date}</p>
                    <p className="mt-3 text-gray-700">{blog.excerpt}</p>
                </div>
            </div>
        </Link>
    );
};

export default BlogCard;
