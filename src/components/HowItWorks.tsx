import { motion } from 'motion/react';
import { PhoneMockup } from './PhoneMockup';
import { FileText, Zap, Download, Apple } from 'lucide-react';
import { Button } from './ui/button';

const steps = [
  {
    icon: FileText,
    title: 'Describe Your Strategy',
    description: 'Simply explain your trading idea in plain English. Define entry/exit rules, risk management, and instruments.',
  },
  {
    icon: Zap,
    title: 'AI Generates Code',
    description: 'Our advanced EACoder AI converts your strategy into clean, production-ready code in under 15 seconds.',
  },
  {
    icon: Download,
    title: 'Deploy & Trade',
    description: 'Download your Expert Advisor, test on demo, and deploy to MetaTrader or TradingView when ready.',
  },
  {icon: FileText,
    title: 'Weekly strategy anaylsis update',
    description: 'Get weekly updates and improvement suggestions on your trading strategy and advance your trading style.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-gray-800 mb-4">How EA Coder Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From idea to execution in three simple steps. No programming knowledge required.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-start"
          >
            {/* Decorative Circle Pattern */}
            <div className="absolute inset-0 flex items-center justify-center">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full border border-purple-200"
                  style={{
                    width: `${300 + i * 100}px`,
                    height: `${300 + i * 100}px`,
                  }}
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.1, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </div>
            
            <PhoneMockup variant="code" className="w-[320px] relative z-10" />
          </motion.div>

          {/* Right - Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="flex gap-6"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                {/* Icon */}
                <motion.div
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center shadow-lg relative">
                    <step.icon className="w-8 h-8 text-white" />
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md">
                      <span className="text-xs text-purple-600">{index + 1}</span>
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>

                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 mt-20 w-0.5 h-12 bg-gradient-to-b from-purple-300 to-transparent" />
                )}
              </motion.div>
            ))}

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 pt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-full px-6 flex items-center gap-2">
                <Apple className="w-5 h-5" />
                <a href="http://localhost:3001">Download for iOS</a>
              </Button>
              <Button variant="outline" className="rounded-full px-6 border-2 hover:bg-gray-50 flex items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>

                <a href="http://localhost:3001/">Download for Android</a>             
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
