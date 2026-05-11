import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight, ArrowUp, Globe, Users, Share2, MessageSquare } from 'lucide-react';

// SELF-CONTAINED TILT CARD COMPONENT TO AVOID CRASHES
const TiltContactCard = ({ children }: { children: React.ReactNode }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative w-full"
    >
      {children}
    </motion.div>
  );
};

export function Section5NewsFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    "Time Attendance / Access Control",
    "Automation System",
    "Structured Cabling",
    "CCTV",
    "Burglar Alarm System",
    "Digital Signage Solutions",
    "Software / Web / Application Development"
  ];

  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Blog", href: "#blog" },
    { name: "Contact Us", href: "#contact" }
  ];

  return (
    <footer id="contact" className="bg-[#010406] pt-32 pb-16 px-6 border-t border-white/5 relative z-10 overflow-hidden">
      
      {/* CINEMATIC BACKGROUND GLOWS */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#00AEEF]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* MAIN FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
          
          {/* LOGO & BRANDING */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="space-y-10">
            <div className="flex flex-col">
              <span className="text-3xl font-black text-white tracking-tighter leading-none uppercase">Well Connect</span>
              <span className="text-[10px] font-black text-[#00AEEF] tracking-[0.5em] uppercase mt-2">IT & SECURITY SOLUTIONS</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 font-medium border-l-2 border-[#00AEEF]/30 pl-6">
              Since 2010, Well Connect IT Solutions has been at the forefront of delivering smart, dependable IT solutions that help businesses stay connected.
            </p>
            <div className="flex gap-5">
              {[Globe, Users, Share2, MessageSquare].map((Icon, i) => (
                <a key={i} href="#" className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#00AEEF] transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* OUR SERVICES */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <h4 className="text-white font-black mb-10 uppercase tracking-[0.3em] text-[11px] flex items-center gap-3">
              <div className="w-2 h-2 bg-[#00AEEF] rounded-full" /> Our Services
            </h4>
            <ul className="space-y-5">
              {services.map((service, i) => (
                <li key={i} className="flex items-center gap-4 group cursor-pointer text-slate-400 hover:text-white transition-all">
                  <ArrowRight className="w-4 h-4 text-[#00AEEF] group-hover:translate-x-2 transition-transform" />
                  <span className="text-sm font-bold">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* QUICK LINKS */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <h4 className="text-white font-black mb-10 uppercase tracking-[0.3em] text-[11px] flex items-center gap-3">
              <div className="w-2 h-2 bg-[#00AEEF] rounded-full" /> Quick Links
            </h4>
            <ul className="space-y-5">
              {quickLinks.map((link, i) => (
                <li key={i} className="flex items-center gap-4 group cursor-pointer text-slate-400 hover:text-white transition-all">
                  <ArrowRight className="w-4 h-4 text-[#00AEEF] group-hover:translate-x-2 transition-transform" />
                  <span className="text-sm font-bold">{link.name}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* MAP */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <h4 className="text-white font-black mb-10 uppercase tracking-[0.3em] text-[11px] flex items-center gap-3">
              <div className="w-2 h-2 bg-[#00AEEF] rounded-full" /> Location
            </h4>
            <div className="rounded-[2.5rem] overflow-hidden border border-white/10 h-52 group relative shadow-2xl bg-slate-900">
              {/* STABLE STYLIZED MAP BACKGROUND */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-40 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#010406] via-transparent to-transparent opacity-80" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-[#00AEEF]/20 flex items-center justify-center mb-3 border border-[#00AEEF]/30 shadow-[0_0_20px_rgba(0,174,239,0.3)]">
                  <MapPin className="w-6 h-6 text-[#00AEEF]" />
                </div>
                <h5 className="text-white font-black text-sm uppercase tracking-widest mb-1">Elite Business Center</h5>
                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-4">Jeddah, Saudi Arabia</p>
                
                <a 
                  href="https://www.google.com/maps?q=Elite+Business+Center+%7C+%D9%85%D8%B1%D9%83%D8%B2+%D8%A7%D9%84%D9%86%D8%AE%D8%A8%D8%A9+%D9%84%D9%84%D8%A3%D8%B9%D9%85%D8%A7%D9%84+Jeddah" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#00AEEF] px-6 py-2 rounded-xl text-[10px] font-black text-white shadow-[0_10px_30px_rgba(0,174,239,0.4)] uppercase tracking-widest hover:scale-110 transition-all flex items-center gap-2"
                >
                  View on Map <Globe className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 3D TILT CONTACT HUB */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            
            <TiltContactCard>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-10 group hover:border-[#00AEEF]/50 transition-all duration-500">
                 <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-[#00AEEF]/10 border border-[#00AEEF]/20 flex items-center justify-center text-[#00AEEF] group-hover:bg-[#00AEEF] group-hover:text-white transition-all">
                       <Mail className="w-7 h-7" />
                    </div>
                    <div>
                       <div className="text-[10px] font-black text-[#00AEEF] tracking-[0.2em] mb-1 uppercase">E-mail Us</div>
                       <div className="text-white font-black text-lg">info@wellconnectit.com</div>
                    </div>
                 </div>
              </div>
            </TiltContactCard>

            <TiltContactCard>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-10 group hover:border-emerald-500/50 transition-all duration-500">
                 <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                       <Phone className="w-7 h-7" />
                    </div>
                    <div>
                       <div className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.2em] mb-1">Support 24/7</div>
                       <div className="text-white font-black text-lg">0500965196</div>
                    </div>
                 </div>
              </div>
            </TiltContactCard>

            <TiltContactCard>
              <a 
                href="https://www.google.com/maps/search/Elite+Business+Center+%7C+%D9%85%D8%B1%D9%83%D8%B2+%D8%A7%D9%84%D9%86%D8%AE%D8%A8%D8%A9+%D9%84%D9%84%D8%A3%D8%B9%D9%85%D8%A7%D9%84+Jeddah" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-10 group hover:border-orange-500/50 transition-all duration-500 block"
              >
                 <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-all">
                       <MapPin className="w-7 h-7" />
                    </div>
                    <div>
                       <div className="text-[10px] font-black text-orange-400 uppercase tracking-[0.2em] mb-1">Location</div>
                       <div className="text-white font-black text-sm leading-tight">
                          Elite Business Center <br/>
                          <span className="text-slate-500 text-[10px] font-bold">Jeddah, KSA</span>
                       </div>
                    </div>
                 </div>
              </a>
            </TiltContactCard>

        </div>

        {/* CENTERED COPYRIGHT */}
        <div className="pt-16 border-t border-white/5 flex flex-col items-center gap-10 text-center">
           <motion.button 
             onClick={scrollToTop}
             whileHover={{ y: -10 }}
             className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#00AEEF] transition-all"
           >
              <ArrowUp className="w-6 h-6" />
           </motion.button>

           <div className="space-y-4">
              <p className="text-[11px] font-black text-slate-500 uppercase tracking-[0.5em]">
                © 2026 <span className="text-white">Well Connect IT Solutions</span> / All rights reserved
              </p>
           </div>
        </div>

      </div>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/966500965196"
        target="_blank"
        className="fixed bottom-10 left-10 z-[100] w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform"
      >
        <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 0 5.414 0 12.05c0 2.123.553 4.197 1.605 6.027L0 24l6.155-1.615a12.004 12.004 0 005.895 1.551h.005c6.636 0 12.05-5.414 12.05-12.05a11.815 11.815 0 00-3.492-8.413z" />
        </svg>
      </a>

    </footer>
  );
}
