import { useParams, Link } from 'react-router-dom';
import blogsData from '../data/blogsData';

const BlogDetail = () => {
    const { slug } = useParams();
    const blog = blogsData.find((b) => b.slug === slug);

    if (!blog) {
        return (
            <div className="mt-20 text-center">
                <h2 className="text-2xl font-bold">Blog not found</h2>
                <Link to="/wordverse/blogs" className="inline-block mt-4 text-indigo-600 underline">← Back to Blogs</Link>
            </div>
        )
    };

    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-3xl px-4 py-10 mx-auto">
                <h1 className="mb-4 text-4xl font-bold">{blog.title}</h1>
                <p className="mb-2 text-sm text-gray-600">By {blog.author} | {blog.date} | {blog.category}</p>
                <img src={blog.image} alt={blog.title} className="object-cover w-full h-64 my-6 rounded-lg" />
                <p className="text-lg leading-relaxed text-gray-800 whitespace-pre-line">{blog.content}</p>
                <div className="mt-8">
                    <Link to="/wordverse/blogs" className="text-indigo-600 underline">← Back to Blogs</Link>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;
