import BlogCard from './BlogCard';

const BlogList = ({ blogs }) => {
    if (blogs.length === 0) {
        return <p className="mt-8 text-center text-gray-600">No blogs found.</p>;
    }

    return (
        <div className="grid grid-cols-1 gap-6 my-8 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog, index) => (
                <BlogCard key={index} blog={blog} />
            ))}
        </div>
    );
};

export default BlogList;
