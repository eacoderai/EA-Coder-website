import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { PhoneMockup } from './PhoneMockup';
import AppDownloadCTA from './AppDownloadCTA';
import { Code2, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen pt-24 pb-20 overflow-hidden">
      {/* Background Gradient Blob */}
      <motion.div
        className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full opacity-90"
        style={{
          background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
        }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.9 }}
        transition={{ duration: 1 }}
      />

      {/* Floating Code Snippets */}
      <motion.div
        className="absolute top-40 left-10 bg-gray-900 text-green-400 px-4 py-2 rounded-lg shadow-lg font-mono text-sm"
        animate={{
          y: [0, -20, 0],
          rotate: [-2, 2, -2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {'if (RSI < 30)'}
      </motion.div>
      <motion.div
        className="absolute bottom-40 left-20 bg-purple-600 text-white px-3 py-2 rounded-full text-xs shadow-lg"
        animate={{
          y: [0, 20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        MQL5
      </motion.div>
      <motion.div
        className="absolute top-1/2 right-1/4 bg-indigo-600 text-white px-3 py-2 rounded-full text-xs shadow-lg"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        AI
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm">Powered by EACoder AI</span>
            </motion.div>

            <motion.h1
              className="text-gray-800 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Generate Expert Advisors with AI in Seconds
            </motion.h1>
            
            <motion.p
              className="text-gray-600 mb-8 max-w-md"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Turn your trading ideas into production-ready MQL4, MQL5, and Pine Script code. No programming skills required. Just describe your strategy and let AI do the rest.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-full px-8 flex items-center gap-2">
                <Code2 className="w-5 h-5" />
                Start Creating
              </Button>
              <Link to="/examples" className="rounded-full px-8 border-2 hover:bg-gray-50">
                View Examples
              </Link>
            </motion.div>

            {/* Mobile app download placeholders */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mb-8"
            >
              <AppDownloadCTA />
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="flex flex-wrap gap-6 items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-800">No Code Required</p>
                  <p className="text-xs text-gray-500">100% AI-Generated</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-800">100% Secure</p>
                  <p className="text-xs text-gray-500">Your data is safe</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - 3D Phone */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: -30 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <PhoneMockup variant="strategy" className="w-[350px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
