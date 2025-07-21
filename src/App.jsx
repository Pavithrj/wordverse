import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/AboutUs';
import Blogs from './pages/Blogs';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/ContactUs';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <div className="fixed w-full">
                <Navbar />
            </div>

            <Routes>
                <Route path="/wordverse" element={<Home />} />
                <Route path="/wordverse/about" element={<About />} />
                <Route path="/wordverse/blogs" element={<Blogs />} />
                <Route path="/wordverse/blogs/:slug" element={<BlogDetail />} />
                <Route path="/wordverse/contact" element={<Contact />} />
            </Routes>

            <Footer />
        </Router>
    )
};

export default App;
