import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Zap, ArrowRight } from 'lucide-react';

const stats = [
  { label: 'Years Experience', value: 15, suffix: '+' },
  { label: 'Customer Satisfaction', value: 100, suffix: '%' },
  { label: 'Projects Completed', value: 50, suffix: '+' },
  { label: 'Global Presence', value: 20, suffix: '+' },
];

const reasons = [
  "15 years of hands-on experience in delivering effective IT solutions.",
  "Strong focus on building long-term, trust-based client relationships.",
  "Skilled professionals delivering specialized, effective solutions.",
  "Commitment to innovation that prepares your business for the future.",
  "Responsive and reliable support to keep your operations running smoothly.",
  "Our team responds quickly and solves issues effectively.",
  "Up-to-date with the latest technology and industry trends.",
  "We develop solutions that align perfectly with your business goals."
];

function Counter({ value, suffix }: { value: number, suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
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
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [value, isInView]);

  return (
    <span ref={ref} className="text-6xl md:text-8xl font-black text-white tracking-tighter drop-shadow-[0_0_30px_rgba(0,174,239,0.3)]">
      {count}{suffix}
    </span>
  );
}

const CharacterReveal = ({ text, className }: { text: string, className?: string }) => {
  const characters = text.split("");
  return (
    <h2 className={className}>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 50, rotateX: -90 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            type: "spring",
            damping: 12,
            stiffness: 100,
            delay: index * 0.03
          }}
          viewport={{ once: true }}
          className="inline-block transform-gpu origin-bottom"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </h2>
  );
};

export function Section3WhyChooseUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const yParallax = useSpring(useTransform(scrollYProgress, [0, 1], [150, -150]), springConfig);

  return (
    <section ref={containerRef} className="py-40 bg-transparent relative overflow-hidden z-10">
      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          
          {/* Left: Dynamic Metrics */}
          <div className="flex flex-col gap-16">
            <div className="max-w-xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-[#00AEEF]/30 bg-[#00AEEF]/5 mb-10"
              >
                <div className="w-2 h-2 rounded-full bg-[#00AEEF] shadow-[0_0_10px_#00AEEF]" />
                <span className="text-[10px] font-black text-[#00AEEF] tracking-[0.5em] uppercase font-mono">Performance Core</span>
              </motion.div>
              
              <h2 className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-none mb-10">
                PROVEN <br/> <span className="text-[#00AEEF]">STATISTICS.</span>
              </h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-slate-400 text-xl font-light leading-relaxed max-w-md border-l border-[#00AEEF]/30 pl-8"
              >
                Architecting resilient IT foundations for ambitious enterprises.
              </motion.p>
            </div>

            <div className="grid grid-cols-2 gap-x-12 gap-y-20">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="text-6xl md:text-8xl font-black text-white tracking-tighter group-hover:text-[#00AEEF] transition-colors duration-500">
                     {stat.value}{stat.suffix}
                  </div>
                  <div className="flex items-center gap-3 mt-4">
                    <div className="h-[2px] w-4 bg-[#00AEEF] group-hover:w-12 transition-all duration-700" />
                    <span className="text-[11px] font-black text-slate-500 uppercase tracking-[0.4em] group-hover:text-white transition-colors duration-500">
                      {stat.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Why Choose Us Cards */}
          <div className="relative">
             <div className="glass-card rounded-[4rem] p-12 md:p-20 shadow-[0_50px_100px_rgba(0,0,0,0.5)] relative overflow-hidden group">
                <div className="relative z-10">
                   <h3 className="text-4xl font-bold text-white mb-16 flex items-center gap-6 group-hover:text-[#00AEEF] transition-colors duration-500 uppercase tracking-widest">
                      Engineering Excellence
                      <div className="flex-grow h-[1px] bg-white/5 group-hover:bg-[#00AEEF]/20 transition-all duration-700" />
                   </h3>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                      {reasons.slice(0, 8).map((reason, index) => (
                        <motion.div 
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            type: "spring", 
                            stiffness: 100, 
                            damping: 20,
                            delay: index * 0.05 
                          }}
                          className="flex gap-6 group items-start"
                        >
                          <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00AEEF] group-hover:bg-[#00AEEF] group-hover:text-white transition-all duration-500 shadow-[0_0_15px_rgba(0,174,239,0.3)]">
                             <CheckCircle2 className="w-4 h-4" />
                          </div>
                          <p className="text-slate-400 text-sm md:text-base leading-relaxed font-light group-hover:text-white transition-colors duration-300">
                            {reason}
                          </p>
                        </motion.div>
                      ))}
                   </div>
                </div>

                {/* Status Badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-6 -right-6 p-10 glass-card rounded-[3.5rem] border border-white/10 shadow-2xl hidden xl:block z-20 group"
                >
                   <div className="flex items-center gap-6">
                      <div className="w-14 h-14 bg-[#00AEEF] rounded-2xl flex items-center justify-center text-white shadow-[0_0_30px_rgba(0,174,239,0.5)] group-hover:scale-110 transition-transform">
                         <Zap className="w-7 h-7" />
                      </div>
                      <div>
                         <div className="text-[10px] font-black text-[#00AEEF] tracking-[0.4em] uppercase mb-1">Status: Active</div>
                         <div className="text-sm font-bold text-white tracking-wide leading-tight">
                            24/7 Enterprise <br/>Support System
                         </div>
                      </div>
                   </div>
                </motion.div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
