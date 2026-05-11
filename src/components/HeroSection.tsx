import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(1);
  
  // ELITE PERFORMANCE CONFIG
  const TOTAL_FRAMES = 241;
  const fps = 24;

  // DRAW LOGIC
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas || imagesRef.current.length === 0) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const img = imagesRef.current[Math.max(0, Math.min(TOTAL_FRAMES - 1, frameIndex - 1))];
    if (!img || !img.complete) return;

    const cw = canvas.width;
    const ch = canvas.height;
    
    const scale = Math.max(cw / img.naturalWidth, ch / img.naturalHeight);
    const sw = img.naturalWidth * scale;
    const sh = img.naturalHeight * scale;
    
    const sx = (cw - sw) / 2;
    const sy = ch - sh; 

    ctx.fillStyle = '#010406';
    ctx.fillRect(0, 0, cw, ch);
    
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(img, sx, sy, sw, sh);
  }, [TOTAL_FRAMES]);

  // ASSET LOADER - FULL LOCKDOWN UNTIL COMPLETE
  useEffect(() => {
    let loaded = 0;
    const images: HTMLImageElement[] = [];

    const checkCompletion = () => {
      loaded++;
      setImagesLoaded(loaded);
      if (loaded === TOTAL_FRAMES) {
        // Artificial delay for cinematic feel if it loads too fast
        setTimeout(() => setIsReady(true), 800);
      }
    };

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const padded = String(i).padStart(3, '0');
      img.src = `/images/herosection/ezgif-frame-${padded}.png`;
      img.onload = checkCompletion;
      img.onerror = checkCompletion;
      images.push(img);
    }
    imagesRef.current = images;

    const updateSize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        const dpr = Math.min(window.devicePixelRatio || 2, 2);
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        if (imagesRef.current[0]) drawFrame(1);
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [TOTAL_FRAMES, drawFrame]);

  // AUTO-PLAY ENGINE
  useEffect(() => {
    if (!isReady) return;

    let frameId: number;
    let startTime = performance.now();
    const interval = 1000 / fps;

    const animate = (time: number) => {
      const elapsed = time - startTime;
      if (elapsed > interval) {
        startTime = time - (elapsed % interval);
        setCurrentFrame(prev => (prev + 1 > TOTAL_FRAMES ? 1 : prev + 1));
      }
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [isReady, TOTAL_FRAMES, fps]);

  // RENDER CURRENT FRAME
  useEffect(() => {
    drawFrame(currentFrame);
  }, [currentFrame, drawFrame]);

  return (
    <section className="relative w-full h-screen bg-[#010406] overflow-hidden">
      
      {/* LOADING OVERLAY - FULL SITE LOCKDOWN */}
      <AnimatePresence>
        {!isReady && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="fixed inset-0 z-[5000] bg-[#010406] flex items-center justify-center p-6"
          >
             <div className="flex flex-col items-center gap-10 max-w-md w-full">
                {/* Spinning Core */}
                <div className="relative w-24 h-24">
                   <div className="absolute inset-0 border-4 border-white/5 border-t-[#00AEEF] rounded-full animate-spin shadow-[0_0_30px_rgba(0,174,239,0.4)]" />
                   <div className="absolute inset-4 border-2 border-white/5 border-b-[#00AEEF] rounded-full animate-[spin_1.5s_linear_infinite_reverse]" />
                </div>

                <div className="flex flex-col items-center w-full">
                   <div className="flex justify-between w-full mb-3 px-1">
                      <span className="text-[10px] font-black text-[#00AEEF] tracking-[0.4em] uppercase">Visual Engine</span>
                      <span className="text-[10px] font-mono text-white/40">{Math.round((imagesLoaded / TOTAL_FRAMES) * 100)}%</span>
                   </div>
                   
                   {/* Progress Bar */}
                   <div className="w-full h-[3px] bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${(imagesLoaded / TOTAL_FRAMES) * 100}%` }}
                        className="h-full bg-gradient-to-r from-[#00AEEF] to-blue-400 shadow-[0_0_15px_#00AEEF]"
                      />
                   </div>
                   
                   <span className="mt-8 text-[9px] font-black text-white/30 tracking-[0.5em] uppercase animate-pulse">
                      Initializing Cinematic Core
                   </span>
                </div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* THE MACHINE */}
      <div 
        className="absolute inset-0 w-full h-full z-10"
        style={{ 
          filter: 'contrast(1.1) brightness(0.9) saturate(1.05)', 
        }}
      >
        <canvas 
          ref={canvasRef} 
          className="w-full h-full block object-cover" 
          style={{ 
            width: '100vw', 
            height: '100vh',
          }} 
        />
      </div>

      <div className="absolute inset-0 z-15 opacity-[0.02] pointer-events-none mix-blend-screen bg-[url('https://grainy-gradients.vercel.app/noise.svg')] animate-pulse" />
      <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-b from-black/60 via-transparent to-[#010406]" />
      <div className="absolute inset-0 z-21 pointer-events-none bg-[radial-gradient(circle_at_50%_70%,rgba(0,174,239,0.08)_0%,transparent_70%)]" />

      {/* TEXT LAYER */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-40">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isReady ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
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

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#00AEEF]/20 z-30 shadow-[0_0_20px_#00AEEF] animate-pulse" />

    </section>
  );
}
