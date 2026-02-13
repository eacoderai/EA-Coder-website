import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import { PhoneMockup } from './PhoneMockup';
import { Check, Layout, Bot, FileText, Shield, Zap, TrendingUp, Code2, LineChart } from 'lucide-react';

export function FeaturesSection() {
  const [activeTab, setActiveTab] = useState<'manual' | 'algo'>('manual');

  return (
    <section id="features" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            One AI Engine. <span className="text-primary">Two Ways to Trade.</span>
          </motion.h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Whether you prefer the discipline of manual trading or the scale of automation, EACoder AI has you covered.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-card border border-border rounded-2xl">
            <button
              onClick={() => setActiveTab('manual')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all ${
                activeTab === 'manual'
                  ? 'bg-primary text-white shadow-lg'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Layout className="w-5 h-5" />
              <span className="font-semibold">For Manual Traders</span>
            </button>
            <button
              onClick={() => setActiveTab('algo')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all ${
                activeTab === 'algo'
                  ? 'bg-primary text-white shadow-lg'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Bot className="w-5 h-5" />
              <span className="font-semibold">For Algo Traders</span>
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'manual' ? (
            <motion.div
              key="manual"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
                  AI Trading Planner
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-6">
                  Turn Ideas into Actionable Plans
                </h3>
                <ul className="space-y-4 mb-8">
                  {[
                    { icon: <Check className="text-accent" />, text: 'Clear entry/exit rules with stop-loss & take-profit' },
                    { icon: <Shield className="text-accent" />, text: 'Risk management (1% rule, daily loss limit)' },
                    { icon: <Zap className="text-accent" />, text: 'Psychology checklist to avoid emotional trades' },
                    { icon: <FileText className="text-accent" />, text: 'Printable PDF for journaling' },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <div className="mt-1">{item.icon}</div>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-xl px-8 py-6 h-auto text-lg font-semibold">
                  Get My Trading Plan
                </Button>
              </div>
              <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                <div className="relative group">
                  <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full group-hover:scale-110 transition-transform" />
                  <PhoneMockup variant="strategy" className="w-[280px] sm:w-[320px] relative z-10" />
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="algo"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div className="order-1 flex justify-center lg:justify-start">
                <div className="relative group">
                  <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full group-hover:scale-110 transition-transform" />
                  <PhoneMockup variant="code" className="w-[280px] sm:w-[320px] relative z-10" />
                </div>
              </div>
              <div className="order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                  AI EA Generator
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-6">
                  Skip Coding. Deploy Bots Instantly.
                </h3>
                <ul className="space-y-4 mb-8">
                  {[
                    { icon: <Code2 className="text-primary" />, text: 'MQL4, MQL5, Pine Script v5 support' },
                    { icon: <TrendingUp className="text-primary" />, text: 'One-click download (.mq4, .mq5, .pine)' },
                    { icon: <LineChart className="text-primary" />, text: 'Backtesting preview (Elite only)' },
                    { icon: <Zap className="text-primary" />, text: 'Code converter (Elite only)' },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <div className="mt-1">{item.icon}</div>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-xl px-8 py-6 h-auto text-lg font-semibold">
                  Generate My EA
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
