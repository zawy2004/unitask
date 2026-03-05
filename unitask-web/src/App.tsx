import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useFadeUpObserver } from './hooks/useScroll';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import Partners from './components/Partners';
import Categories from './components/Categories';
import SearchSection from './components/SearchSection';
import JobsSection from './components/JobsSection';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import StatsSection from './components/StatsSection';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import BlogSection from './components/BlogSection';
import FAQ from './components/FAQ';
import Newsletter from './components/Newsletter';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AllJobsPage from './pages/AllJobsPage';
import JobDetailPage from './pages/JobDetailPage';
import BusinessPage from './pages/BusinessPage';
import BlogListPage from './pages/BlogListPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import ProfilePage from './pages/ProfilePage';
import GuidePage from './pages/GuidePage';

function HomePage() {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    console.log('Search:', searchValue);
  };

  const handleQuickSearch = (tag: string) => {
    setSearchValue(tag);
  };

  return (
    <>
      <Hero />
      <TrustStrip />
      <Partners />
      <Categories />
      <SearchSection
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        onSearch={handleSearch}
        onQuickSearch={handleQuickSearch}
      />
      <JobsSection />
      <HowItWorks />
      <Features />
      <StatsSection />
      <Testimonials />
      <Pricing />
      <BlogSection />
      <FAQ />
      <Newsletter />
      <CTABanner />
    </>
  );
}

export default function App() {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  // scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // activate fade-up animations (re-run when route changes)
  useFadeUpObserver([location.pathname]);

  return (
    <>
      <div className="noise" />
      {!isAuthPage && <Navbar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/jobs" element={<AllJobsPage />} />
        <Route path="/jobs/:id" element={<JobDetailPage />} />
        <Route path="/business" element={<BusinessPage />} />
        <Route path="/blog" element={<BlogListPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/guide" element={<GuidePage />} />
      </Routes>

      {!isAuthPage && <Footer />}
      <ScrollToTop />
    </>
  );
}
