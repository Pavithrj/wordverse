import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/AboutUs';
import Blogs from './pages/Blogs';
import Contact from './pages/ContactUs';

function App() {
    return (
        <Router>
            <Navbar />

            <Routes>
                <Route path="/wordverse" element={<Home />} />
                <Route path="/wordverse/services" element={<Services />} />
                <Route path="/wordverse/about" element={<About />} />
                <Route path="/wordverse/blogs" element={<Blogs />} />
                <Route path="/wordverse/contact" element={<Contact />} />
            </Routes>
        </Router>
    )
};

export default App;
