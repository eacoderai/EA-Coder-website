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

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
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
              <section id="documentation" className="py-20 bg-gradient-to-b from-white to-purple-50">
                <div className="max-w-7xl mx-auto px-6 text-center">
                  <h2 className="text-gray-800 mb-4">Documentation</h2>
                  <p className="text-gray-600">Explore how to use EACoder and best practices. More content will be added.</p>
                </div>
              </section>
            </>
          }
        />
        <Route path="/examples" element={<Examples />} />
        <Route path="/builder" element={<StrategyBuilder />} />
        <Route path="/signup" element={<AccountSignup />} />
        <Route path="/download" element={<AppDownloadCTA />} />
      </Routes>
      <Footer />
    </div>
  );
}
