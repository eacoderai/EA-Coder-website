import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle, Crown, Zap } from 'lucide-react';

const basicFeatures = [
  'UP to 4 EA Generations',
  'AI-powered strategy generation',
  'MQL4, MQL5 & Pine Script support',
  'Code conversion between languages',
  'AI chat for code refinement',
  'Strategy backtesting analysis',
];

// Corrected typo: "Unlinited" → "Unlimited" per requirements
const premiumFeatures = [
  'Unlimited EA Generations',
  'AI-powered strategy generation',
  'MQL4, MQL5 & Pine Script support',
  'Code conversion between languages',
  'AI chat for code refinement',
  'Strategy backtesting analysis',
  'Weekly AI strategy re-analysis',
  'Automatic performance updates',
  'Smart improvement suggestions',
  'Priority notifications',
  'Advanced optimization tips',
  'Performance trend tracking',
];

function FeatureLine({ text, accent }: { text: string; accent?: boolean }) {
  return (
    <p className="flex items-start gap-3 text-gray-700">
      <CheckCircle className={`w-5 h-5 mt-0.5 ${accent ? 'text-purple-600' : 'text-gray-500'}`} />
      <span>{text}</span>
    </p>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-gray-800 mb-4">Choose Your Plan</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Compare features at a glance and pick the plan that fits your strategy workflow.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Basic Plan */}
          <motion.div
            className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8 flex flex-col"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-6 h-6 text-gray-600" />
              <h3 className="text-gray-800">Basic</h3>
            </div>

            <div className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-3 py-1 text-sm">
                <b>Price:</b>
                <span className="font-medium">$29.9 one time</span>
              </span>
            </div>

            <div className="space-y-3">
              {basicFeatures.map((f) => (
                <FeatureLine key={f} text={f} accent={f.includes('Generations')} />
              ))}
            </div>

            <div className="mt-8">
              <Link to="/download" className="inline-flex items-center justify-center w-full rounded-full px-4 py-2 bg-gray-900 hover:bg-black text-white">
                Choose Basic
              </Link>
            </div>
          </motion.div>

          {/* Premium Plan */}
          <motion.div
            className="rounded-3xl border border-purple-200 bg-gradient-to-br from-purple-50 to-indigo-50 p-8 shadow-sm flex flex-col"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Crown className="w-6 h-6 text-purple-600" />
              <h3 className="text-gray-800">Premium</h3>
            </div>

            <div className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-3 py-1 text-sm">
                <b>Price:</b>
                <span className="font-medium">$29.9 + $3/ WEEK</span>
              </span>
            </div>

            <div className="space-y-3">
              {premiumFeatures.map((f) => (
                <FeatureLine key={f} text={f} accent={f.includes('Unlimited') || f.includes('Generations')} />
              ))}
            </div>

            <div className="mt-8">
              <Link to="/download" className="inline-flex items-center justify-center w-full rounded-full px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white">
                Choose Premium
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;