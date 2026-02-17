import { motion } from 'motion/react';
import { Button } from './ui/button';
import { CheckCircle2, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function TradingPlannerSection() {
  const navigate = useNavigate();
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-4">
              For Manual Traders
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">For Manual Traders: AI-Powered Trading Plans</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Turn vague ideas into disciplined, rule-based strategies — no coding needed.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Clear entry/exit rules with stop-loss & take-profit',
                'Risk management (1% rule, daily loss limit)',
                'Psychology checklist to avoid emotional trades',
                'Printable PDF for journaling',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white rounded-xl"
              onClick={() => navigate('/download?strategyType=manual')}
            >
              Get My Free Plan →
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
              <div className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-bold">PLAN PREVIEW</div>
            </div>
            <div className="space-y-5 font-mono text-sm">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                <span className="text-primary font-bold">Trend-Following Plan</span>
              </div>
              <div className="space-y-2">
                <p className="text-foreground"><span className="text-primary">ENTRY</span>: 20EMA&gt;50EMA and RSI(14)&gt;55; Break of structure high.</p>
                <p className="text-foreground"><span className="text-primary">EXIT</span>: TP at 2R or trailing stop below 20EMA.</p>
                <p className="text-foreground"><span className="text-primary">SL</span>: 1.5x ATR below swing.</p>
              </div>
              <div className="p-4 bg-background rounded-xl border border-border">
                <p className="text-accent font-bold mb-2">RISK</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Risk 1% per trade</li>
                  <li>Max 2 losing trades per day</li>
                  <li>Pause after 3 rule breaks</li>
                </ul>
              </div>
              <div className="p-4 bg-background rounded-xl border border-border">
                <p className="text-primary font-bold mb-2">PSYCHOLOGY</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Wait for candle close</li>
                  <li>Take planned trades only</li>
                  <li>Review plan before session</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
