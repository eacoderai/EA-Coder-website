import { motion } from 'motion/react';
import { Button } from './ui/button';
import { BadgeInfo, BarChart3, Percent, Brain, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';

export default function JournalAnalyzerSection() {
  const navigate = useNavigate();
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold">
                Elite Feature
              </div>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="text-xs text-muted-foreground underline decoration-dotted cursor-help">
                    What is this?
                  </span>
                </TooltipTrigger>
                <TooltipContent>Available on Elite plan</TooltipContent>
              </Tooltip>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">For Elite Traders: AI Trade Journaling</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Upload your trades. Get AI insights on your edge, leaks, and optimizations.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Win rate, profit factor, max drawdown',
                'Pattern detection (“You win 78% on EMA bounces”)',
                'Actionable tips (“Avoid GBP during London close”)',
                'Compare actual trades vs. your Trading Plan',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Brain className="w-5 h-5 text-accent mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white rounded-xl"
              onClick={() => navigate('/features#journal-analyzer')}
            >
              See How It Works →
            </Button>
            <p className="text-[11px] text-muted-foreground mt-3">Not financial advice. Test strategies on demo accounts.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-3xl p-8 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4">
              <div className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-bold">AI REPORT</div>
            </div>
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              <div className="rounded-xl bg-background border border-border p-4">
                <div className="flex items-center gap-2 text-muted-foreground text-xs mb-1">
                  <Percent className="w-4 h-4" />
                  Win Rate
                </div>
                <div className="text-2xl font-bold text-foreground">61%</div>
              </div>
              <div className="rounded-xl bg-background border border-border p-4">
                <div className="flex items-center gap-2 text-muted-foreground text-xs mb-1">
                  <BarChart3 className="w-4 h-4" />
                  Profit Factor
                </div>
                <div className="text-2xl font-bold text-foreground">1.73</div>
              </div>
              <div className="rounded-xl bg-background border border-border p-4">
                <div className="flex items-center gap-2 text-muted-foreground text-xs mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  Max DD
                </div>
                <div className="text-2xl font-bold text-foreground">-6.4%</div>
              </div>
            </div>
            <div className="p-4 bg-background rounded-xl border border-border mb-4">
              <p className="text-accent font-bold mb-2">Pattern Detection</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>You win 78% on EMA bounces after NY open</li>
                <li>Losses cluster on GBP pairs during London close</li>
              </ul>
            </div>
            <div className="p-4 bg-background rounded-xl border border-border">
              <p className="text-primary font-bold mb-2">Plan Deviations</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>34% of losers ignored stop policy</li>
                <li>17% of trades were outside plan hours</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

