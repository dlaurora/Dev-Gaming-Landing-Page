import { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { GameInfo } from './components/GameInfo';
import { Characters } from './components/Characters';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';
import { FAQ } from './pages/FAQ';
import { SystemRequirements } from './pages/SystemRequirements';
import { Contact } from './pages/Contact';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { PreOrder } from './pages/PreOrder';
import { News } from './pages/News';
import { World } from './pages/World';

import { AudioPlayer } from './components/AudioPlayer';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

function AppContent() {
  const { hash } = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Handle hash scrolling with Lenis
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        setTimeout(() => {
          lenis.scrollTo(target as HTMLElement);
        }, 100);
      }
    }

    return () => {
      lenis.destroy();
    };
  }, [hash]);

  return (
    <div className="min-h-screen bg-dark text-white selection:bg-primary selection:text-black">
      <ScrollToTop />
      <Navbar />
      <AudioPlayer />
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <GameInfo />
              <Features />
              <Characters />
              <Gallery />
            </>
          } />
          <Route path="/preorder" element={<PreOrder />} />
          <Route path="/news" element={<News />} />
          <Route path="/world" element={<World />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/specs" element={<SystemRequirements />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
