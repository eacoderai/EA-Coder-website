import { motion } from 'motion/react';
import { Code2, MessageSquare, RefreshCw, BarChart3, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const features = [
  {
    icon: Code2,
    title: 'AI Code Generation',
    description: 'Transform plain English descriptions into production-ready MQL4, MQL5, or Pine Script code in seconds using advanced AI.',
  },
  {
    icon: MessageSquare,
    title: 'AI Chat Assistant',
    description: 'Refine and tweak your strategies through natural conversation. Just ask the AI to add features or modify logic.',
  },
  {
    icon: RefreshCw,
    title: 'Cross-Platform Conversion',
    description: 'Convert existing code between MQL4, MQL5, and Pine Script while preserving core trading logic.',
  },
  {
    icon: BarChart3,
    title: 'Strategy Analysis',
    description: 'Get instant simulated backtest metrics including win rate, profit factor, and drawdown analysis.',
  },
];

export function FeaturesSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-gray-800 mb-4">Powerful Features for Traders</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Everything you need to create, refine, and deploy algorithmic trading strategies without writing a single line of code.
          </p>
        </motion.div>

        <div className="relative">
          <div className="flex items-center justify-center gap-8">
            {/* Previous Button */}
            <motion.button
              onClick={() => setActiveIndex((prev: number) => (prev > 0 ? prev - 1 : features.length - 1))}
              className="hidden md:flex w-12 h-12 rounded-full bg-white shadow-lg items-center justify-center hover:bg-gray-50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </motion.button>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 flex-1 max-w-6xl">
              {features.map((feature, index) => (
                <FeatureCard
                  key={feature.title}
                  feature={feature}
                  index={index}
                  isActive={index === activeIndex}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>

            {/* Next Button */}
            <motion.button
              onClick={() => setActiveIndex((prev: number) => (prev < features.length - 1 ? prev + 1 : 0))}
              className="hidden md:flex w-12 h-12 rounded-full bg-white shadow-lg items-center justify-center hover:bg-gray-50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </motion.button>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {features.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-1 rounded-full ${
                  index === activeIndex ? 'w-12 bg-gradient-to-r from-purple-600 to-indigo-600' : 'w-8 bg-gray-300'
                }`}
                animate={{ width: index === activeIndex ? 48 : 32 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, index, isActive, onClick }: { 
  feature: typeof features[0]; 
  index: number; 
  isActive: boolean;
  onClick: () => void;
}) {
  const Icon = feature.icon;

  return (
    <motion.div
      onClick={onClick}
      className="bg-white rounded-3xl p-8 shadow-lg text-center cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
        scale: 1.05,
        boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
      }}
      animate={{
        scale: isActive ? 1.05 : 1,
        y: isActive ? -10 : 0,
        borderColor: isActive ? '#8b5cf6' : 'transparent',
      }}
      style={{
        borderWidth: 2,
        borderStyle: 'solid',
      }}
    >
      <motion.div
        className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        <Icon className="w-10 h-10 text-purple-600" />
      </motion.div>
      
      <h3 className="text-gray-800 mb-4">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </motion.div>
  );
}
