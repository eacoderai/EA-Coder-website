import { motion } from 'motion/react';
import { Star, ShieldCheck, Zap, Users } from 'lucide-react';

const testimonials = [
  {
    quote: "Finally, an AI that understands my discretionary setups!",
    author: "Sarah K.",
    role: "Swing Trader",
    stars: 5,
  },
  {
    quote: "Replaced my $300 developer. Generated 12 EAs in a week.",
    author: "Mark T.",
    role: "Algo Trader",
    stars: 5,
  },
];

const badges = [
  { icon: <ShieldCheck className="w-5 h-5" />, text: "Secure" },
  { icon: <Zap className="w-5 h-5" />, text: "No Coding Needed" },
  { icon: <Users className="w-5 h-5" />, text: "Used by 10,000+ Traders" },
];

export function SocialProof() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-8 mb-20">
          {badges.map((badge, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-2 text-muted-foreground font-medium"
            >
              <div className="text-primary">{badge.icon}</div>
              <span>{badge.text}</span>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-8 rounded-3xl bg-card border border-border relative group hover:border-primary/50 transition-colors"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-xl text-foreground mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-bold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
              
              {/* Decorative quote icon */}
              <div className="absolute top-8 right-8 text-primary/10 group-hover:text-primary/20 transition-colors">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
                  <path d="M10 20H5V15H10V20ZM20 20H15V15H20V20ZM10 25H5V22H10V25ZM20 25H15V22H20V25Z" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
