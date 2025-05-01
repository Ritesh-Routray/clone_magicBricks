import HeroSection from '@/components/home/HeroSection';
import FeaturedProperties from '@/components/home/FeaturedProperties';
import PropertyTypes from '@/components/home/PropertyTypes';
import LocationHighlights from '@/components/home/LocationHighlights';
import HowItWorks from '@/components/home/HowItWorks';
import Testimonials from '@/components/home/Testimonials';
import AppDownload from '@/components/home/AppDownload';

export default function Home() {
  return (
    <div className="animate-fade-in">
      <HeroSection />
      <FeaturedProperties />
      <PropertyTypes />
      <LocationHighlights />
      <HowItWorks />
      <Testimonials />
      <AppDownload />
    </div>
  );
}