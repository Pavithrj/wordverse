import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null);

    const navItems = [
        { path: "/wordverse", link: "Home" },
        { path: "/wordverse/about", link: "About" },
        { path: "/wordverse/blogs", link: "Blogs" },
        { path: "/wordverse/contact", link: "Contact" }
    ];

    const linkClasses = (isActive) => `transition duration-300 hover:text-orange-500 ${isActive ? "text-orange-500 underline underline-offset-4" : ""}`;

    useEffect(() => {
        if (isOpen && navRef.current) {
            navRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [isOpen]);

    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-black text-white shadow-md">
            <nav className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
                <NavLink to="/wordverse" className="text-2xl font-extrabold">
                    <span className="text-white">
                        Word
                    </span>

                    <span className="text-orange-500">
                        Verse
                    </span>
                </NavLink>

                <ul className="hidden gap-10 text-lg font-medium md:flex">
                    {navItems.map(({ path = "/", link = "Link" }) => (
                        <li key={path}>
                            <NavLink to={path} end={path === "/wordverse"} className={({ isActive }) => linkClasses(isActive)}
                                onClick={() => {
                                    setIsOpen(false);
                                    window.scrollTo({ top: 0, behavior: "smooth" });
                                }}
                            >
                                {link}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <div className="md:hidden">
                    <button onClick={() => setIsOpen((prev) => !prev)}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </nav>

            <div ref={navRef} className={`md:hidden fixed w-full overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                <ul className="flex flex-col gap-4 px-6 pb-4 text-lg font-medium bg-black">
                    {navItems.map(({ path = "/", link = "Link" }) => (
                        <li key={path}>
                            <NavLink to={path} end={path === "/wordverse"} className={({ isActive }) => linkClasses(isActive) + " block py-1"}
                                onClick={() => {
                                    setIsOpen(false);
                                    window.scrollTo({ top: 0, behavior: "smooth" });
                                }}
                            >
                                {link}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
};

export default Navbar;
