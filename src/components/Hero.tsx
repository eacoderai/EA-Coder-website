import { motion } from 'motion/react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import { PhoneMockup } from './PhoneMockup';
import { Check, Sparkles, Zap, Bot, Layout } from 'lucide-react';
import Seo from './docs/Seo';

export function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      <Seo
        title="EACoder AI: AI Trading Plans & Automated EAs | Free Trial"
        description="Turn trading ideas into action. Get a manual plan or automated bot. Free to start."
        keywords="EACoder AI, trading plan generator, AI trade journal, MQL5 AI generator, no-code trading bot"
      />
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-[-10%] right-[-5%] w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[800px] lg:h-[800px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-[-10%] left-[-5%] w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        {/* Subtle Grid */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Trusted by 10,000+ Traders
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6 tracking-tight">
            Your AI Trading Assistant: <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Automate Strategies</span> or Trade Smarter — Instantly.
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
            Describe your idea in plain English. Get a ready-to-trade plan or a fully automated bot. Free to start.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white rounded-xl h-14 px-8 text-lg font-semibold group flex items-center gap-2"
              onClick={() => navigate('/waitlist?type=manual')}
            >
              <Layout className="w-5 h-5" />
              I Trade Manually → Get My Plan
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-border hover:bg-white/5 text-foreground rounded-xl h-14 px-8 text-lg font-semibold flex items-center gap-2"
              onClick={() => navigate('/waitlist?type=algo')}
            >
              <Bot className="w-5 h-5" />
              I Use Bots → Generate My EA
            </Button>
          </div>
          
          <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                <Check className="w-3 h-3 text-accent" />
              </div>
              No Coding Needed
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                <Check className="w-3 h-3 text-accent" />
              </div>
              Secure & Private
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Glow effect behind phone */}
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full scale-150 animate-pulse" />
            <PhoneMockup variant="strategy" className="w-[280px] sm:w-[320px] lg:w-[350px] relative z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
