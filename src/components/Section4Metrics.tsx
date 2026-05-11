import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Successful Projects', value: 2450, suffix: '+' },
  { label: 'Global Clients', value: 850, suffix: '+' },
  { label: 'Security Nodes', value: 12400, suffix: '+' },
  { label: 'Uptime Reliability', value: 99.9, suffix: '%' },
];

function Counter({ value, suffix }: { value: number, suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start * 10) / 10);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span className="text-6xl md:text-7xl font-black tracking-tighter text-white">
      {count}{suffix}
    </span>
  );
}

export function Section4Metrics() {
  return (
    <section className="py-32 bg-transparent relative overflow-hidden z-10">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#00AEEF]/10 blur-[150px] rounded-full translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 w-full">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col gap-6 group"
              >
                <div className="flex flex-col">
                   <div className="text-6xl md:text-8xl font-black tracking-tighter text-white group-hover:text-[#00AEEF] transition-colors duration-500">
                      <Counter value={stat.value} suffix={stat.suffix} />
                   </div>
                   <div className="w-12 h-1 bg-[#00AEEF] mt-4 rounded-full shadow-[0_0_15px_#00AEEF] group-hover:w-24 transition-all duration-700" />
                </div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em] group-hover:text-white transition-colors duration-500">
                   {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
