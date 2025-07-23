import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BlogCard from '../BlogCard';

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
        <section className="px-6 py-12 bg-gray-100">
            <div className="flex flex-col items-center justify-center gap-8 mx-auto max-w-7xl">
                <h2 className="text-2xl font-bold text-center text-black sm:text-3xl">
                    Recent Blogs
                </h2>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {sampleBlogs.slice(0, visibleBlogs).map((blog, index) => (
                        <BlogCard key={index} {...blog} />
                    ))}
                </div>

                {showButton &&
                    <Link to="/wordverse/blogs" className="px-6 py-3 mx-auto text-white transition duration-300 bg-orange-500 shadow w-fit rounded-xl hover:bg-orange-600">
                        View All Blogs
                    </Link>
                }
            </div>
        </section>
    )
};

export default RecentBlogs;
