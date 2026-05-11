import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';

export function BackgroundOrchestrator() {
  const { scrollYProgress } = useScroll();
  
  // Mouse Interaction Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Dynamic motion for background elements
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#010406]">
      
      {/* 1. Dynamic Mouse Interactive Glow */}
      <motion.div 
        style={{
          left: springX,
          top: springY,
        }}
        className="absolute w-[600px] h-[600px] bg-[#00AEEF]/10 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 opacity-60 z-10"
      />

      {/* 2. Cinematic Mesh Gradient Layer */}
      <div className="absolute inset-0 opacity-40">
        <motion.div 
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[-10%] w-[100%] h-[100%] bg-[#00AEEF]/15 blur-[180px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.25, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-[-10%] right-[-10%] w-[80%] h-[80%] bg-[#00AEEF]/10 blur-[200px] rounded-full" 
        />
      </div>

      {/* 3. 3D Moving Perspective Grid with Parallax */}
      <motion.div 
        style={{ y: y1, rotate, scale }}
        className="absolute inset-0 opacity-[0.03]"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:100px_100px] [transform:perspective(1500px)_rotateX(70deg)]" />
      </motion.div>

      {/* 4. Floating 3D Particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ 
              y: [0, -100, 0],
              x: [0, Math.sin(i) * 50, 0],
              opacity: [0.05, 0.15, 0.05],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 10 + i * 2, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: i * 0.5
            }}
            className="absolute w-1 h-1 bg-[#00AEEF] rounded-full blur-[1px]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* 5. Vignette Shadowing for Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(1,4,6,1)_100%)] z-20" />
      
    </div>
  );
}
