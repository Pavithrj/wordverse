import { lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import NotFound from './pages/NotFound';

const Home = lazy(() => import('./pages/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Blogs = lazy(() => import('./pages/Blogs'));
const BlogDetail = lazy(() => import('./pages/BlogDetail'));
const ContactUs = lazy(() => import('./pages/ContactUs'));

const routes = [
    { path: "/wordverse", element: <Home /> },
    { path: "/wordverse/about", element: <AboutUs /> },
    { path: "/wordverse/blogs", element: <Blogs /> },
    { path: "/wordverse/blogs/:slug", element: <BlogDetail /> },
    { path: "/wordverse/contact", element: <ContactUs /> }
];

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Navbar />

                <main className="flex-grow">
                    <Routes>
                        {routes.map(({ index, path, element }) => (
                            <Route key={index} path={path} element={element} />
                        ))}

                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </Router>
    )
};

export default App;
