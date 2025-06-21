import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { AuthProvider } from './contexts/AuthContext';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import ThemesPage from './pages/ThemesPage';
import PricingPage from './pages/PricingPage';
import BlogPage from './pages/BlogPage';
import SupportPage from './pages/SupportPage';
import AboutPage from './pages/AboutPage';
import AuthPage from './pages/AuthPage';
import DashboardPage from './pages/DashboardPage';
import Footer from './components/Footer';

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
};

// Page transition wrapper
const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ 
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {children}
    </motion.div>
  );
};

// Animated routes component
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition>
            <HomePage />
          </PageTransition>
        } />
        <Route path="/features" element={
          <PageTransition>
            <FeaturesPage />
          </PageTransition>
        } />
        <Route path="/themes" element={
          <PageTransition>
            <ThemesPage />
          </PageTransition>
        } />
        <Route path="/pricing" element={
          <PageTransition>
            <PricingPage />
          </PageTransition>
        } />
        <Route path="/blog" element={
          <PageTransition>
            <BlogPage />
          </PageTransition>
        } />
        <Route path="/support" element={
          <PageTransition>
            <SupportPage />
          </PageTransition>
        } />
        <Route path="/about" element={
          <PageTransition>
            <AboutPage />
          </PageTransition>
        } />
        <Route path="/auth" element={
          <PageTransition>
            <AuthPage />
          </PageTransition>
        } />
        <Route path="/dashboard" element={
          <PageTransition>
            <DashboardPage />
          </PageTransition>
        } />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
          <ScrollToTop />
          <Navigation />
          <main className="pt-32">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;