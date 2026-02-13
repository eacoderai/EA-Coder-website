import { motion } from 'motion/react';
import { Layout, Bot, CheckCircle2, Shield, Zap, Code2, LineChart, FileText, Download } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';
import { PhoneMockup } from '../components/PhoneMockup';

export default function FeaturesPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-background min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl font-bold text-foreground mb-6"
          >
            Everything you need with <span className="text-primary">EACoder AI</span>
          </motion.h1>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
            EACoder AI combines advanced AI with proven trading frameworks to help you trade like a professional, whether you're clicking buttons or running bots.
          </p>
        </div>

        {/* AI Trading Planner Section */}
        <div id="planner" className="mb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <Layout className="w-4 h-4" />
                AI Trading Planner
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Turn Vague Ideas into <span className="text-primary">Actionable Rules</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Most traders fail because they lack a clear plan. EACoder AI takes your strategy description and builds a professional-grade trading document in seconds.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-bold mb-1">Clear Entry/Exit Logic</h4>
                    <p className="text-muted-foreground">Stop guessing. Get exact price levels and conditions for every trade.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-bold mb-1">Dynamic Risk Management</h4>
                    <p className="text-muted-foreground">Calculated position sizing and daily loss limits based on your capital.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-bold mb-1">Psychology Checklist</h4>
                    <p className="text-muted-foreground">A pre-trade ritual to ensure you're in the right mindset before executing.</p>
                  </div>
                </div>
              </div>

              <div className="mb-10 p-6 rounded-2xl bg-card border border-primary/20">
                <h4 className="text-primary font-bold mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Why it beats vague journaling
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Most journals are just a history of mistakes. The AI Trading Planner turns your journal into a feedback loop. By comparing your executed trades against your AI-generated rules, you identify exactly where you deviated from your edge.
                </p>
              </div>

              <Button size="lg" className="bg-primary hover:bg-primary/90 rounded-xl" onClick={() => navigate('/waitlist')}>
                Get My Trading Plan
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-3xl p-8 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4">
                <div className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-bold">SAMPLE OUTPUT</div>
              </div>
              <div className="space-y-6 font-mono text-sm">
                <div className="pb-4 border-b border-border">
                  <h4 className="text-primary font-bold mb-2"># STRATEGY: Trend-Following Breakout</h4>
                  <p className="text-muted-foreground">Market: EURUSD | Timeframe: 1H</p>
                </div>
                <div className="space-y-3">
                  <p className="text-foreground"><span className="text-primary">ENTRY:</span> Price closes above 20-day High AND RSI(14) {'>'} 60.</p>
                  <p className="text-foreground"><span className="text-primary">STOP LOSS:</span> 1.5x ATR from entry price.</p>
                  <p className="text-foreground"><span className="text-primary">TAKE PROFIT:</span> 3x Risk (1:3 RR Ratio).</p>
                </div>
                <div className="p-4 bg-background rounded-xl border border-border">
                  <p className="text-accent font-bold mb-2">RISK RULES:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Risk 1% of balance per trade</li>
                    <li>Max 3 open trades simultaneously</li>
                    <li>Stop trading if daily loss {'>'} 2%</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* AI EA Generator Section */}
        <div id="generator">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, order: 2 }}
              whileInView={{ opacity: 1, order: 1 }}
              viewport={{ once: true }}
              className="lg:order-2"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
                <Bot className="w-4 h-4" />
                AI EA Generator
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Skip Coding. <span className="text-accent">Deploy Bots Instantly.</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Generate production-ready code for MetaTrader 4, MetaTrader 5, and TradingView. No more waiting weeks for expensive developers.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <Code2 className="w-8 h-8 text-accent mb-4" />
                  <h4 className="text-foreground font-bold mb-2">Clean Syntax</h4>
                  <p className="text-muted-foreground text-sm">Optimized, commented code following industry best practices.</p>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <Zap className="w-8 h-8 text-accent mb-4" />
                  <h4 className="text-foreground font-bold mb-2">One-Click Export</h4>
                  <p className="text-muted-foreground text-sm">Download .mq4, .mq5, or .pine files ready for immediate use.</p>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <LineChart className="w-8 h-8 text-accent mb-4" />
                  <h4 className="text-foreground font-bold mb-2">Backtest Ready</h4>
                  <p className="text-muted-foreground text-sm">Every EA is built to be compatible with built-in strategy testers.</p>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <Download className="w-8 h-8 text-accent mb-4" />
                  <h4 className="text-foreground font-bold mb-2">Cross-Platform</h4>
                  <p className="text-muted-foreground text-sm">Convert logic between MT4, MT5, and Pine Script seamlessly.</p>
                </div>
              </div>

              <div className="mb-10 flex flex-wrap gap-4 items-center">
                <span className="text-sm text-muted-foreground font-medium">Supported Platforms:</span>
                <div className="flex gap-4">
                  <span className="px-3 py-1 rounded-md bg-accent/10 border border-accent/20 text-accent text-xs font-bold">MetaTrader 4</span>
                  <span className="px-3 py-1 rounded-md bg-accent/10 border border-accent/20 text-accent text-xs font-bold">MetaTrader 5</span>
                  <span className="px-3 py-1 rounded-md bg-accent/10 border border-accent/20 text-accent text-xs font-bold">TradingView</span>
                </div>
              </div>

              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white rounded-xl" onClick={() => navigate('/waitlist')}>
                Generate My EA
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30, order: 1 }}
              whileInView={{ opacity: 1, x: 0, order: 2 }}
              viewport={{ once: true }}
              className="lg:order-1 flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-accent/20 blur-[120px] rounded-full" />
                <PhoneMockup variant="code" className="w-[300px] sm:w-[340px] relative z-10" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Guaranteed Quality Section */}
        <div className="mt-32 p-12 rounded-[3rem] bg-gradient-to-br from-card to-background border border-border text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Professional Code Quality</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            Our AI engine is trained on thousands of successful strategies and adheres to strict coding standards to ensure your EAs run smoothly on live accounts.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
              </div>
              <p className="text-foreground font-semibold">Error-Free Compilation</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
              </div>
              <p className="text-foreground font-semibold">Latency Optimized</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
              </div>
              <p className="text-foreground font-semibold">Standard Library Usage</p>
            </div>
          </div>
        </div>

        {/* Demo Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">See EACoder AI in Action</h2>
            <p className="text-muted-foreground">Watch how easily you can go from an idea to a trade-ready strategy.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="aspect-video rounded-3xl bg-card border border-border flex flex-col items-center justify-center p-8 group cursor-pointer hover:border-primary/50 transition-colors">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-foreground font-bold mb-2">Manual Planner Demo</h4>
              <p className="text-muted-foreground text-sm text-center">Watch how to generate a 5-page trading plan in 15 seconds.</p>
            </div>
            <div className="aspect-video rounded-3xl bg-card border border-border flex flex-col items-center justify-center p-8 group cursor-pointer hover:border-accent/50 transition-colors">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Code2 className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-foreground font-bold mb-2">EA Generator Demo</h4>
              <p className="text-muted-foreground text-sm text-center">See a plain-English strategy become a working MQL5 bot.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
