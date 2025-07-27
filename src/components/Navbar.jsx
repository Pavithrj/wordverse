import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
    { path: "/wordverse", link: "Home" },
    { path: "/wordverse/about", link: "About" },
    { path: "/wordverse/blogs", link: "Blogs" },
    { path: "/wordverse/contact", link: "Contact" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null);
    const location = useLocation();

    const linkClasses = (isActive) => `transition duration-300 hover:text-orange-500 ${isActive ? "text-orange-500 underline underline-offset-4" : ""}`;

    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    return (
        <header className="fixed top-0 left-0 z-50 w-full text-white bg-black shadow-md">
            <nav className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl" aria-label="Primary Navigation">
                <NavLink to="/wordverse" className="text-2xl font-extrabold">
                    <span className="text-white">
                        Word
                    </span>

                    <span className="text-orange-500">
                        Verse
                    </span>
                </NavLink>

                <ul className="hidden gap-10 text-lg font-medium md:flex">
                    {navItems.map(({ path, link }) => (
                        <li key={path}>
                            <NavLink to={path} end={path === "/wordverse"} className={({ isActive }) => linkClasses(isActive)}>
                                {link}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <div className="md:hidden">
                    <button onClick={() => setIsOpen((prev) => !prev)} aria-label="Toggle Navigation Menu" aria-expanded={isOpen} aria-controls="mobile-menu">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </nav>

            <div ref={navRef} id="mobile-menu" className={`md:hidden fixed w-full overflow-hidden transition-all duration-500 ease-in-out bg-black ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                <ul className="flex flex-col gap-4 px-6 pb-4 text-lg font-medium">
                    {navItems.map(({ path, link }) => (
                        <li key={path}>
                            <NavLink to={path} end={path === "/wordverse"} className={({ isActive }) => linkClasses(isActive) + " block py-1"}>
                                {link}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    )
};

export default Navbar;
