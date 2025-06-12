
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import PopularBatches from '@/components/PopularBatches';
import About from '@/components/About';
import PopularBrokers from '@/components/PopularBrokers';
import YouTubeSection from '@/components/YouTubeSection';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <PopularBatches />
      <About />
      <PopularBrokers />
      <YouTubeSection />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
