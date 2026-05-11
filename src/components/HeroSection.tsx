import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function HeroSection() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // ELITE 3-SECOND FAST LOADING
    const timer = setTimeout(() => {
       setIsReady(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-screen bg-[#010406] overflow-hidden">
      
      {/* CINEMATIC PRELOADER - 3 SECONDS MAX */}
      <AnimatePresence>
        {!isReady && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[6000] bg-[#010406] flex items-center justify-center p-6"
          >
             <div className="flex flex-col items-center gap-10 max-w-md w-full text-center">
                <div className="relative w-24 h-24">
                   <div className="absolute inset-0 border-4 border-white/5 border-t-[#00AEEF] rounded-full animate-spin shadow-[0_0_30px_rgba(0,174,239,0.4)]" />
                   <div className="absolute inset-4 border-2 border-white/5 border-b-[#00AEEF] rounded-full animate-[spin_1.5s_linear_infinite_reverse]" />
                </div>
                <div>
                   <span className="text-[10px] font-black text-[#00AEEF] tracking-[0.6em] uppercase animate-pulse block mb-2">Initializing System</span>
                   <span className="text-[9px] font-mono text-white/30 uppercase tracking-[0.3em]">Preparing Visual Engine...</span>
                </div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* THE CORE: MP4 VIDEO BACKGROUND */}
      <div className="absolute inset-0 w-full h-full z-10 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          style={{ 
            filter: 'contrast(1.1) brightness(0.85) saturate(1.05)', 
          }}
        >
          <source src="/images/herosection/hero-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* CINEMATIC OVERLAYS */}
      <div className="absolute inset-0 z-15 opacity-[0.02] pointer-events-none mix-blend-screen bg-[url('https://grainy-gradients.vercel.app/noise.svg')] animate-pulse" />
      <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-b from-black/60 via-transparent to-[#010406]" />
      <div className="absolute inset-0 z-21 pointer-events-none bg-[radial-gradient(circle_at_50%_70%,rgba(0,174,239,0.08)_0%,transparent_70%)]" />

      {/* TEXT LAYER */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-40">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isReady ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        >
          <h1 className="text-[12vw] md:text-[10rem] font-black text-white tracking-[0.05em] leading-none mb-4 uppercase drop-shadow-[0_0_60px_rgba(0,174,239,0.4)] whitespace-nowrap">
            Well Connect
          </h1>
          <div className="flex items-center justify-center gap-8">
             <div className="h-[1px] w-12 md:w-24 bg-[#00AEEF]/50" />
             <span className="text-[10px] md:text-sm font-black text-[#00AEEF] tracking-[0.6em] md:tracking-[0.8em] uppercase drop-shadow-[0_0_10px_#00AEEF]">IT Solutions & Services</span>
             <div className="h-[1px] w-12 md:w-24 bg-[#00AEEF]/50" />
          </div>
        </motion.div>
      </div>

      {/* BOTTOM SCANLINE EFFECT */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#00AEEF]/20 z-30 shadow-[0_0_20px_#00AEEF] animate-pulse" />

    </section>
  );
}
