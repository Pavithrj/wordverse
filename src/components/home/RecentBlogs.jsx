import BlogCard from "../BlogCard";

const sampleBlogs = [
    {
        title: "Why Writing is a Superpower",
        excerpt: "Discover how consistent writing can boost your clarity, creativity, and confidence...",
        author: "Jane Doe",
        date: "July 10, 2025"
    },
    {
        title: "10 Tips for Starting Your Own Blog",
        excerpt: "Don't overthink it — start small, stay real, and write like you talk...",
        author: "Alex Smith",
        date: "July 8, 2025"
    },
    {
        title: "Designing with Words: UI Copy Matters",
        excerpt: "Great UX is not just pixels — it’s the words that guide users...",
        author: "Emily Chan",
        date: "July 5, 2025"
    },
    {
        title: "Why Writing is a Superpower",
        excerpt: "Discover how consistent writing can boost your clarity, creativity, and confidence...",
        author: "Jane Doe",
        date: "July 10, 2025"
    },
    {
        title: "10 Tips for Starting Your Own Blog",
        excerpt: "Don't overthink it — start small, stay real, and write like you talk...",
        author: "Alex Smith",
        date: "July 8, 2025"
    },
    {
        title: "Designing with Words: UI Copy Matters",
        excerpt: "Great UX is not just pixels — it’s the words that guide users...",
        author: "Emily Chan",
        date: "July 5, 2025"
    }
];

const RecentBlogs = () => {
    return (
        <section className="px-6 py-12 bg-gray-100">
            <div className="mx-auto max-w-7xl">
                <h2 className="mb-10 text-3xl font-bold text-center text-black">Recent Blogs</h2>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
                    {sampleBlogs.map((blog, index) => (
                        <BlogCard key={index} {...blog} />
                    ))}
                </div>
            </div>
        </section>
    )
};

export default RecentBlogs;
