import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail, MapPin, Phone } from 'lucide-react';

export function Header() {
  const [showTopBar, setShowTopBar] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      if (currentScrollY > 10) {
        setShowTopBar(false);
      } else {
        setShowTopBar(true);
      }

      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        setShowTopBar(true);
      }, 600); 

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <>
      <motion.div 
        initial={{ y: 0 }}
        animate={{ 
          y: showTopBar ? 0 : -60,
          opacity: showTopBar ? 1 : 0
        }}
        transition={{ duration: 0.4, ease: "circOut" }}
        className="fixed top-0 left-0 right-0 z-[2005] bg-black/40 backdrop-blur-md border-b border-white/5 text-white/40 py-2 px-10"
      >
         <div className="max-w-7xl mx-auto flex justify-between items-center text-[9px] font-black uppercase tracking-[0.3em]">
            <div className="flex gap-8 items-center">
               <div className="flex items-center gap-2 hover:text-[#00AEEF] transition-colors cursor-pointer">
                  <Mail className="w-3 h-3 text-[#00AEEF]" />
                  <span>info@wellconnectit.com</span>
               </div>
               <div className="hidden lg:flex items-center gap-3 border-l border-white/10 pl-8">
                  <MapPin className="w-3 h-3 text-[#00AEEF]" />
                  <span>Jeddah, Saudi Arabia</span>
               </div>
            </div>
            <div className="flex items-center gap-5 text-[#00AEEF]">
               <div className="flex items-center gap-2 text-xs">
                  <Phone className="w-3 h-3" />
                  0500965196
               </div>
            </div>
         </div>
      </motion.div>

      <motion.header
        animate={{ 
          top: showTopBar ? 48 : 12,
        }}
        transition={{ duration: 0.5, ease: "circOut" }}
        className="fixed left-0 right-0 z-[2000] px-6"
      >
        <div className={`
          max-w-7xl mx-auto flex items-center justify-between px-8 transition-all duration-700 border border-white/10
          ${isScrolled 
            ? 'py-3 bg-black/60 backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-2xl' 
            : 'py-5 bg-white/5 backdrop-blur-2xl rounded-3xl'}
        `}>
          
          <div className="flex items-center gap-4 cursor-pointer group">
            <svg width="35" height="28" viewBox="0 0 45 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="23" width="8.5" height="12" rx="1.5" fill="#00AEEF" />
              <rect x="12" y="15" width="8.5" height="20" rx="1.5" fill="#00AEEF" />
              <rect x="24" y="7.5" width="8.5" height="27.5" rx="1.5" fill="#00AEEF" />
              <rect x="36" width="8.5" height="35" rx="1.5" fill="#00AEEF" />
            </svg>
            <div className="flex flex-col text-white">
              <span className="text-xl md:text-2xl font-black tracking-tighter leading-[0.8]">
                WELL<br/>CONNECT
              </span>
              <span className="text-[8px] font-bold tracking-[0.3em] uppercase mt-1 text-[#00AEEF]">
                IT SOLUTIONS
              </span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[9px] font-black uppercase tracking-[0.4em] text-white/50 hover:text-[#00AEEF] transition-all relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[1.5px] bg-[#00AEEF] transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden p-2 text-white">
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            className="fixed inset-y-0 right-0 z-[3000] w-full max-w-sm bg-slate-950 p-10 flex flex-col justify-center gap-10 shadow-2xl"
          >
            <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-10 right-10 p-4 bg-white/5 rounded-2xl text-white">
              <X className="w-8 h-8" />
            </button>
            <div className="flex flex-col gap-10">
               {navLinks.map((link) => (
                 <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-black text-white hover:text-[#00AEEF] transition-colors">{link.name}</a>
               ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
