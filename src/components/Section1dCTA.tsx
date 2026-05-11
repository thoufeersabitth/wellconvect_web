import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Sparkles, Cpu, Cloud, ShieldCheck, Database, Network } from 'lucide-react';

export function Section1dCTA() {
  return (
    <section className="py-24 relative z-10 overflow-visible">
      <div className="max-w-[1400px] mx-auto px-6 relative">
        
        {/* Main Tech Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-gradient-to-r from-[#00AEEF] to-[#007BB5] rounded-[2.5rem] w-full min-h-[600px] md:min-h-[260px] shadow-[0_30px_70px_rgba(0,174,239,0.25)] overflow-hidden group"
        >
          {/* Inner Dashed Border - Premium detailing */}
          <div className="absolute inset-4 border-[1.5px] border-dashed border-white/30 rounded-[1.8rem] pointer-events-none z-10" />

          {/* Abstract Tech Centerpiece Background */}
          <div className="absolute inset-0 z-0 overflow-hidden rounded-[2.5rem] pointer-events-none">
             {/* Diagonal Tech Slice */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-full md:skew-x-[-35deg] bg-gradient-to-r from-[#003865] to-[#002244] shadow-2xl overflow-hidden">
                {/* Circuit lines pattern */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]" />
                
                {/* Animated Rings inside slice - HIDDEN ON MOBILE TO CLEAN UP UI */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border-[1px] border-white/10 rounded-full hidden md:block" 
                />
             </div>
          </div>

          {/* Content Container */}
          <div className="relative z-20 flex flex-col md:flex-row items-center justify-between w-full h-full px-6 md:px-16 py-12 md:py-14 text-center md:text-left">
             
             {/* Left Text Content */}
             <div className="w-full md:w-[42%] z-20 mb-32 md:mb-0">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6"
                >
                   <Sparkles className="w-4 h-4 text-white" />
                   <span className="text-[10px] font-bold text-white tracking-[0.2em] uppercase">Future Ready</span>
                </motion.div>
                
                <h2 className="text-3xl md:text-5xl lg:text-[46px] font-black text-white leading-[1.1] tracking-tight mb-4 drop-shadow-md">
                  Stay connected. <br/>Stay ahead.
                </h2>
                <p className="text-white/80 text-xs md:text-base font-medium leading-relaxed max-w-sm mx-auto md:mx-0">
                  For over a decade, Well Connect IT Solutions has been empowering businesses with innovative IT services.
                </p>
             </div>

             {/* 3D Centerpiece - REPOSITIONED FOR MOBILE CLARITY */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] md:w-[380px] pointer-events-none z-30 flex justify-center items-center mt-10 md:mt-0">
                <motion.div
                   initial={{ opacity: 0, scale: 0.5 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   className="relative flex items-center justify-center w-full h-full"
                >
                   {/* Central Data Core */}
                   <div className="w-28 h-28 md:w-44 md:h-44 rounded-full bg-gradient-to-tr from-[#00AEEF]/30 to-[#004a7c]/80 backdrop-blur-xl border border-[#00AEEF]/50 shadow-[0_0_60px_rgba(0,174,239,0.6)] flex items-center justify-center relative z-20">
                      <Cpu className="w-12 h-12 md:w-20 md:h-20 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]" strokeWidth={1.5} />
                   </div>
                   
                   {/* Orbit Rings - SIMPLIFIED FOR MOBILE */}
                   <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute w-[180px] h-[180px] md:w-[260px] md:h-[260px] border border-dashed border-[#00AEEF]/40 rounded-full z-10"
                   />
                   <motion.div 
                      animate={{ rotate: -360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                      className="absolute w-[240px] h-[240px] md:w-[360px] md:h-[360px] border-[0.5px] border-white/10 rounded-full hidden md:block"
                   />
                </motion.div>
             </div>

             {/* Right Pill Content */}
             <div className="w-full md:w-[35%] flex justify-center md:justify-end mt-20 md:mt-0 z-40">
                <motion.div
                   whileHover={{ scale: 1.05, y: -5 }}
                   whileTap={{ scale: 0.95 }}
                   className="glass-card px-6 md:px-10 py-4 md:py-6 rounded-[2rem] md:rounded-[2.5rem] flex items-center gap-4 md:gap-6 cursor-pointer relative overflow-hidden group border-white/20 shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
                >
                   <div className="w-12 h-12 md:w-16 md:h-16 bg-[#00AEEF] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,174,239,0.5)] shrink-0">
                      <Phone className="w-6 h-6 md:w-7 md:h-7 text-white fill-white" />
                   </div>
                   <div className="flex flex-col pr-2 md:pr-4 relative z-10 text-left">
                      <span className="text-[9px] md:text-[10px] font-black text-[#00AEEF] uppercase tracking-[0.3em] leading-none mb-1 md:mb-2">Direct Line</span>
                      <span className="text-xl md:text-4xl font-black text-white tracking-tighter leading-none">0500965196</span>
                   </div>
                </motion.div>
             </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
