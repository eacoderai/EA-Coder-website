import { motion } from 'motion/react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import { Layout, Bot } from 'lucide-react';

export function FinalCTA() {
  const navigate = useNavigate();

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-primary/5 -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8"
        >
          Stop Guessing. <span className="text-primary">Start Trading with Confidence.</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto"
        >
          Join 10,000+ traders using AI to automate their edge and trade with professional discipline.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white rounded-xl h-14 px-8 text-lg font-bold shadow-lg shadow-primary/20 flex items-center gap-2"
            onClick={() => navigate('/waitlist?type=manual')}
          >
            <Layout className="w-5 h-5" />
            I Trade Manually → Get My Plan
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary/50 hover:bg-primary/10 text-primary rounded-xl h-14 px-8 text-lg font-bold flex items-center gap-2 bg-background/50 backdrop-blur-sm"
            onClick={() => navigate('/waitlist?type=algo')}
          >
            <Bot className="w-5 h-5" />
            I Use Bots → Generate My EA
          </Button>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-sm text-muted-foreground"
        >
          No credit card required to start your first strategy.
        </motion.p>
      </div>
    </section>
  );
}
