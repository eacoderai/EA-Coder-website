import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { StatsSection } from './components/StatsSection';
import { FeaturesSection } from './components/FeaturesSection';
import { HowItWorks } from './components/HowItWorks';
import { DataManagement } from './components/DataManagement';
import { Footer } from './components/Footer';
import Pricing from './components/Pricing';
import Examples from './components/Examples';
import StrategyBuilder from './components/StrategyBuilder';
import AccountSignup from './components/AccountSignup';
import AppDownloadCTA from './components/AppDownloadCTA';
import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import ProductLanding from './pages/ProductLanding';
import ResourcesLanding from './pages/ResourcesLanding';
import LegalLanding from './pages/LegalLanding';
import ProductListDocs from './pages/ProductListDocs';
import ResourcesListDocs from './pages/ResourcesListDocs';
import LegalListDocs from './pages/LegalListDocs';
import Faq from './pages/Faq';
import Roadmap from './pages/Roadmap';
import Documentation from './pages/Documentation';
import ApiReference from './pages/ApiReference';
import Tutorials from './pages/Tutorials';
import Community from './pages/Community';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Cookies from './pages/Cookies';
import Disclaimer from './pages/Disclaimer';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main id="main">
      <Suspense fallback={<div className="px-6 py-10">Loading…</div>}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <StatsSection />
              <FeaturesSection />
              <HowItWorks />
              <DataManagement />
              <Pricing />
              <section id="documentation" className="py-20 bg-gradient-to-b from-white to-purple-50"></section>
            </>
          }
        />
        <Route path="/examples" element={<Examples />} />
        <Route path="/builder" element={<StrategyBuilder />} />
        <Route path="/signup" element={<AccountSignup />} />
        <Route path="/download" element={<AppDownloadCTA />} />
        <Route path="/product" element={<ProductLanding />} />
        <Route path="/resources" element={<ResourcesLanding />} />
        <Route path="/legal" element={<LegalLanding />} />
        <Route path="/docs/product-list" element={<ProductListDocs />} />
        <Route path="/docs/resources-list" element={<ResourcesListDocs />} />
        <Route path="/docs/legal-list" element={<LegalListDocs />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/docs" element={<Documentation />} />
        <Route path="/api" element={<ApiReference />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/community" element={<Community />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </Suspense>
      </main>
      <Footer />
    </div>
  );
}
