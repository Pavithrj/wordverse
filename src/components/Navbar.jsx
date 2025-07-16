import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { path: "/wordverse", link: "Home" },
        { path: "/wordverse/services", link: "Services" },
        { path: "/wordverse/about", link: "About" },
        { path: "/wordverse/blogs", link: "Blogs" },
        { path: "/wordverse/contact", link: "Contact" }
    ];

    const linkClasses = (isActive) => `transition duration-300 hover:text-orange-500 ${isActive ? "text-orange-500 underline underline-offset-4" : ""}`;

    return (
        <header className="sticky top-0 z-50 text-white bg-black shadow-md">
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
                            <NavLink to={path} end={path === "/wordverse"} className={({ isActive }) => linkClasses(isActive)}>
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

            {isOpen &&
                <ul className="flex flex-col gap-4 px-6 pb-4 text-lg font-medium bg-black md:hidden animate-slideDown">
                    {navItems.map(({ path = "/", link = "Link" }) => (
                        <li key={path}>
                            <NavLink to={path} end={path === "/wordverse"} onClick={() => setIsOpen(false)} className={({ isActive }) => linkClasses(isActive) + " block py-1"}>
                                {link}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            }
        </header>
    );
};

export default Navbar;
