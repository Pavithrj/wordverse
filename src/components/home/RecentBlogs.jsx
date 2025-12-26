import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
    const [visibleBlogs, setVisibleBlogs] = useState(6);
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const updateVisibleBlogs = () => {
            const width = window.innerWidth;

            if (width < 640) {
                setVisibleBlogs(2);
                setShowButton(sampleBlogs.length > 2);
            } else if (width < 1024) {
                setVisibleBlogs(4);
                setShowButton(sampleBlogs.length > 4);
            } else {
                setVisibleBlogs(6);
                setShowButton(sampleBlogs.length > 6);
            }
        };

        updateVisibleBlogs();
        window.addEventListener("resize", updateVisibleBlogs);

        return () => window.removeEventListener("resize", updateVisibleBlogs);
    }, []);

    return (
        <section id="recent-blogs" className="px-6 py-12 bg-gray-100">
            <div className="flex flex-col items-center justify-center gap-8 mx-auto max-w-7xl">
                <h2 className="text-2xl font-bold text-center text-black sm:text-3xl">
                    Recent Blogs
                </h2>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {sampleBlogs.slice(0, visibleBlogs).map((blog, index) => (
                        <article key={index} className="p-6 text-black transition duration-300 bg-white shadow rounded-xl hover:shadow-lg">
                            <h2 className="text-lg font-semibold sm:text-xl">
                                {blog.title}
                            </h2>

                            <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                                By {blog.author} • {blog.date}
                            </p>

                            <p className="mt-3 text-gray-700">
                                {blog.excerpt}
                            </p>

                            <a className="inline-block mt-4 font-medium text-orange-500 hover:underline" href="/wordverse/blogs/undefined" data-discover="true">
                                Read More →
                            </a>
                        </article>
                    ))}
                </div>

                {showButton &&
                    <Link to="/wordverse/blogs" aria-label="View all blog posts" className="px-6 py-3 mx-auto text-white transition duration-300 bg-orange-500 shadow w-fit rounded-xl hover:bg-orange-600">
                        View All Blogs
                    </Link>
                }
            </div>
        </section>
    )
};

export default RecentBlogs;
