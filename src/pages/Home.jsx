import HeroSection from '../components/home/HeroSection';
import RecentBlogs from '../components/home/RecentBlogs';
import TestimonialsSection from '../components/home/TestimonialsSection';
import SubscribeSection from '../components/home/SubscribeSection';
import WhyWordVerse from '../components/home/WhyWordVerse';
import CallToAction from '../components/home/CallToAction';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <main>
            <HeroSection />

            <RecentBlogs />

            <TestimonialsSection />

            <SubscribeSection />

            <WhyWordVerse />

            <CallToAction />

            <Footer />
        </main>
    )
};

export default Home;
