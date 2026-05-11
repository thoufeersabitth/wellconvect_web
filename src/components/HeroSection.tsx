import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TOTAL_FRAMES = 241;

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(1);
  
  // DRAW LOGIC - ENHANCED FOR REALISM
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas || imagesRef.current.length === 0) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const img = imagesRef.current[Math.max(0, Math.min(TOTAL_FRAMES - 1, frameIndex - 1))];
    if (!img || !img.complete) return;

    const cw = canvas.width;
    const ch = canvas.height;
    
    const scale = Math.max(cw / img.naturalWidth, ch / img.naturalHeight) * 1.1;
    const sw = img.naturalWidth * scale;
    const sh = img.naturalHeight * scale;
    
    const sx = (cw - sw) / 2;
    const sy = ch - sh; // Bottom align

    // Apply Cinematic Base Clear
    ctx.fillStyle = '#010406';
    ctx.fillRect(0, 0, cw, ch);
    
    // Draw image with better rendering quality
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(img, sx, sy, sw, sh);
  }, []);

  // ASSET LOADER
  useEffect(() => {
    let loaded = 0;
    const images: HTMLImageElement[] = [];

    const checkCompletion = () => {
      loaded++;
      setImagesLoaded(loaded);
      if (loaded === TOTAL_FRAMES) {
        setIsReady(true);
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
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // AUTO-PLAY "VIDEO" ENGINE - STABLE FPS
  useEffect(() => {
    if (!isReady) return;

    let frameId: number;
    let startTime = performance.now();
    const fps = 24; // Cinematic 24fps feels more realistic
    const interval = 1000 / fps;

    const animate = (time: number) => {
      const elapsed = time - startTime;
      if (elapsed > interval) {
        startTime = time - (elapsed % interval);
        setCurrentFrame(prev => {
          const next = prev + 1;
          return next > TOTAL_FRAMES ? 1 : next;
        });
      }
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [isReady]);

  // RENDER CURRENT FRAME
  useEffect(() => {
    drawFrame(currentFrame);
  }, [currentFrame, drawFrame]);

  return (
    <section className="relative w-full h-screen bg-[#010406] overflow-hidden">
      
      {/* THE MACHINE - ENHANCED FOR REALISM */}
      <div 
        className="absolute inset-0 w-full h-full z-10"
        style={{ 
          filter: 'contrast(1.15) brightness(0.95) saturate(1.1) contrast(1.1)', // Cinematic Grade
        }}
      >
        <canvas 
          ref={canvasRef} 
          className="w-full h-full block object-cover" 
          style={{ 
            width: '100vw', 
            height: '100vh',
            imageRendering: 'auto'
          }} 
        />
      </div>

      {/* FILM GRAIN OVERLAY */}
      <div className="absolute inset-0 z-15 opacity-[0.03] pointer-events-none mix-blend-screen bg-[url('https://grainy-gradients.vercel.app/noise.svg')] animate-pulse" />

      {/* BLOOM / RADIANT GLOW */}
      <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-b from-black/80 via-transparent to-[#010406]" />
      <div className="absolute inset-0 z-21 pointer-events-none bg-[radial-gradient(circle_at_50%_70%,rgba(0,174,239,0.1)_0%,transparent_70%)]" />

      {/* CINEMATIC TEXT */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-40">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h1 className="text-[12vw] md:text-[10rem] font-black text-white tracking-[0.05em] leading-none mb-4 uppercase drop-shadow-[0_0_60px_rgba(0,174,239,0.4)] whitespace-nowrap">
            Well Connect
          </h1>
          <div className="flex items-center justify-center gap-8">
             <motion.div 
               initial={{ width: 0, opacity: 0 }}
               animate={{ width: 100, opacity: 1 }}
               transition={{ duration: 1.2, delay: 0.8 }}
               className="h-[1px] bg-[#00AEEF]/50" 
             />
             <span className="text-xs md:text-sm font-black text-[#00AEEF] tracking-[0.8em] uppercase drop-shadow-[0_0_10px_#00AEEF]">IT Solutions & Services</span>
             <motion.div 
               initial={{ width: 0, opacity: 0 }}
               animate={{ width: 100, opacity: 1 }}
               transition={{ duration: 1.2, delay: 0.8 }}
               className="h-[1px] bg-[#00AEEF]/50" 
             />
          </div>
        </motion.div>
      </div>

      {/* LOADING HUD */}
      <AnimatePresence>
        {!isReady && (
          <motion.div 
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-[100] bg-[#010406] flex items-center justify-center"
          >
             <div className="flex flex-col items-center gap-6">
                <div className="w-20 h-20 border-2 border-white/5 border-t-[#00AEEF] rounded-full animate-spin shadow-[0_0_20px_rgba(0,174,239,0.4)]" />
                <div className="flex flex-col items-center">
                  <span className="text-[10px] font-mono text-[#00AEEF] tracking-[0.5em] uppercase mb-4 animate-pulse">Initializing 1080p Visual Engine</span>
                  <div className="w-64 h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${(imagesLoaded / TOTAL_FRAMES) * 100}%` }}
                      className="h-full bg-[#00AEEF] shadow-[0_0_15px_#00AEEF]"
                    />
                  </div>
                </div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* BOTTOM SCANLINE EFFECT */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#00AEEF]/20 z-30 shadow-[0_0_20px_#00AEEF] animate-pulse" />

    </section>
  );
}
