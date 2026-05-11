import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Target } from 'lucide-react';

export function Section1About() {
  return (
    <section id="about" className="py-32 px-6 bg-transparent relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          {/* Visual Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[4rem] overflow-hidden border border-white/10 glass-card aspect-square md:aspect-auto h-[300px] md:h-[450px] shadow-2xl">
              <img 
                src="/images/about/about.png" 
                alt="Well Connect IT Solutions" 
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#010406] via-transparent to-transparent" />
            </div>
            
            {/* Floating Stats Badge */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -right-10 z-20 glass-card p-10 rounded-[3rem] hidden md:block"
            >
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-[#00AEEF] rounded-[1.5rem] flex items-center justify-center text-white shadow-[0_0_40px_rgba(0,174,239,0.5)]">
                   <Target className="w-10 h-10" />
                </div>
                <div>
                  <div className="text-5xl font-black text-white leading-none mb-1">15</div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Years of Experience</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <div className="flex flex-col gap-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-3 px-6 py-2 bg-[#00AEEF]/10 border border-[#00AEEF]/30 rounded-full text-[#00AEEF] font-black text-[10px] uppercase tracking-[0.4em] mb-10">
                <div className="w-2 h-2 rounded-full bg-[#00AEEF] animate-pulse" />
                About Us
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-tight uppercase">
                Your Future is <br/> <span className="text-[#00AEEF]">Well Connected</span>
              </h2>
              
              <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed mb-10 border-l-4 border-[#00AEEF] pl-10">
                Since 2010, Well Connect IT Solutions has been at the forefront of delivering smart, dependable IT solutions that help businesses stay connected and perform at their best. We offer a wide range of services designed to simplify operations, enhance efficiency, and support long-term growth. From smart infrastructure and automation to seamless connectivity and support systems.
              </p>
            </motion.div>

            {/* Vision & Mission Bento Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="glass-card p-12 rounded-[3rem] hover:border-[#00AEEF]/50 transition-all group relative overflow-hidden"
              >
                <div className="mb-8 text-[#00AEEF] group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                   <Eye className="w-14 h-14" />
                </div>
                <h4 className="text-2xl font-black text-white mb-6 uppercase tracking-widest">Vision</h4>
                <p className="text-slate-400 text-base leading-relaxed font-medium">
                  To shape a smarter, more connected future by delivering innovative IT solutions.
                </p>
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#00AEEF]/5 blur-[40px] rounded-full" />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glass-card p-12 rounded-[3rem] hover:border-[#00AEEF]/50 transition-all group relative overflow-hidden"
              >
                <div className="mb-8 text-[#00AEEF] group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                   <Target className="w-14 h-14" />
                </div>
                <h4 className="text-2xl font-black text-white mb-6 uppercase tracking-widest">Mission</h4>
                <p className="text-slate-400 text-base leading-relaxed font-medium">
                  At Well Connect IT Solutions, our mission is to make technology simple, reliable.
                </p>
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#00AEEF]/5 blur-[40px] rounded-full" />
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
