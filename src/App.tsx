import { BrowserRouter, Routes, Route } from 'react-router';
import ScrollToTop from '@/components/shared/ScrollToTop';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import CareersPage from '@/pages/CareersPage';
import ContactPage from '@/pages/ContactPage';
import ServiceDetailPage from '@/pages/ServiceDetailPage';
import TNElectionPage from '@/pages/TNElectionPage';

function App() {
  return (
    
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />

        <Route path="/careers" element={<CareersPage />} />
        <Route path="/tnresult2026" element={<TNElectionPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
