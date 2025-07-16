import BlogCard from "../components/BlogCard";

const sampleBlogs = [
    {
        title: "Why Writing is a Superpower",
        excerpt: "Discover how consistent writing can boost your clarity, creativity, and confidence... jgjujkyu",
        author: "Jane Doe",
        date: "July 10, 2025",
    },
    {
        title: "10 Tips for Starting Your Own Blog",
        excerpt: "Don't overthink it — start small, stay real, and write like you talk...",
        author: "Alex Smith",
        date: "July 8, 2025",
    },
    {
        title: "Designing with Words: UI Copy Matters",
        excerpt: "Great UX is not just pixels — it’s the words that guide users...",
        author: "Emily Chan",
        date: "July 5, 2025",
    },
    {
        title: "Why Writing is a Superpower",
        excerpt: "Discover how consistent writing can boost your clarity, creativity, and confidence...",
        author: "Jane Doe",
        date: "July 10, 2025",
    },
    {
        title: "10 Tips for Starting Your Own Blog",
        excerpt: "Don't overthink it — start small, stay real, and write like you talk...",
        author: "Alex Smith",
        date: "July 8, 2025",
    },
    {
        title: "Designing with Words: UI Copy Matters",
        excerpt: "Great UX is not just pixels — it’s the words that guide users...",
        author: "Emily Chan",
        date: "July 5, 2025",
    },
];

const Home = () => {
    return (
        <>
            <section className="flex flex-col items-center gap-4 px-6 py-8 mx-auto text-center max-w-7xl">
                <h1 className="text-2xl font-bold leading-tight sm:text-4xl md:text-6xl">
                    Welcome to Word<span className="text-orange-500">Verse</span>
                </h1>

                <p className="max-w-2xl mx-auto text-sm text-gray-700 md:text-lg">
                    Dive into thoughts, ideas, and stories crafted by curious minds like yours. Explore, express, and experience the world of blogging.
                </p>

                <button className="px-6 py-3 text-white transition duration-300 bg-orange-500 shadow w-fit rounded-xl hover:bg-orange-600">
                    Explore Blogs
                </button>
            </section>

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
        </>
    );
};

export default Home;
