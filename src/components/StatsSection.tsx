import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface Stat {
  value: string;
  label: string;
  target: number;
  suffix?: string;
}

const stats: Stat[] = [
  { value: '5,000', label: 'Strategies Generated', target: 5000, suffix: '+' },
  { value: '15', label: 'Avg. Generation Time', target: 15, suffix: 's' },
  { value: '98', label: 'Success Rate', target: 98, suffix: '%' },
  { value: '3', label: 'Supported Languages', target: 3, suffix: '' },
];

export function StatsSection() {
  return (
    <section className="py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatItem({ stat, index }: { stat: Stat; index: number }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = stat.target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= stat.target) {
        setCount(stat.target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, stat.target]);

  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      onViewportEnter={() => setIsVisible(true)}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-2"
        whileHover={{ scale: 1.1 }}
      >
        {count.toLocaleString()}{stat.suffix}
      </motion.div>
      <p className="text-gray-500">{stat.label}</p>
    </motion.div>
  );
}
