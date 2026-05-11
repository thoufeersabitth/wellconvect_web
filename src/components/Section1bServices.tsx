import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Monitor, Fingerprint, Network, Code, ArrowUpRight, Terminal, Video, Smartphone, Cpu, Lock, Activity, Server, Zap } from 'lucide-react';
import { TiltCard } from './ui/TiltCard';

/* ── Floating tech particles for each card type ──────────── */
const SOFTWARE_PARTICLES = ['<div/>', 'async', '=>', 'npm', '{...}', 'API', '0x', 'SQL', '.tsx'];
const CCTV_PARTICLES = ['LIVE', '1080p', 'SECURE', 'REC', '70%', '4K'];
const ACCESS_PARTICLES = ['BIO', 'USER_AUTH', 'GRANTED', 'SCAN', 'LOCK'];
const NETWORK_PARTICLES = ['Gbps', 'FIBER', 'CAT6', '10G', 'LINK'];

function FloatingParticles({ items, color }: { items: string[], color: string }) {
  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden rounded-[3rem]">
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.span
          key={i}
          className={`absolute font-mono text-[10px] ${color}`}
          initial={{ opacity: 0, y: 0 }}
          animate={{ 
            y: [0, -300], 
            opacity: [0, 0.4, 0],
            x: [0, (i % 2 === 0 ? 30 : -30)]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 4 + Math.random() * 4, 
            delay: i * 0.8, 
            ease: 'linear' 
          }}
          style={{ left: `${10 + (i * 12)}%`, bottom: '-5%' }}
        >
          {items[i % items.length]}
        </motion.span>
      ))}
    </div>
  );
}

// 1. Software Development Card
function SoftwareCard({ service }: { service: any }) {
  const [activeCode, setActiveCode] = useState(0);
  const snippets = ["git push origin main", "npm run build", "docker-compose up -d", "python manage.py run"];

  useEffect(() => {
    const timer = setInterval(() => setActiveCode(prev => (prev + 1) % snippets.length), 3000);
    return () => clearInterval(timer);
  }, [snippets.length]);

  return (
    <TiltCard className="w-full h-full" intensity={15}>
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="relative w-full h-full rounded-[3rem] overflow-hidden bg-slate-950 border border-white/10 group shadow-2xl backdrop-blur-2xl"
      >
        {/* PREMIUM 1PX GRADIENT BORDER */}
        <div className="absolute inset-0 rounded-[3rem] border border-white/20 pointer-events-none z-30 group-hover:border-[#00AEEF]/50 transition-colors" />
        
        <div className="absolute inset-0 z-0">
          <img src={service.image} alt="" className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-1000 ease-out" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-transparent to-transparent" />
        </div>
        
        <FloatingParticles items={SOFTWARE_PARTICLES} color="text-blue-400" />
        
        <div className="relative z-20 p-10 h-full flex flex-col justify-between">
          <div className="flex justify-between items-start">
             <div className="w-16 h-16 rounded-2xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center backdrop-blur-xl group-hover:bg-blue-500 group-hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                <Code className="w-8 h-8 text-blue-400 group-hover:text-white" />
             </div>
             <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 font-mono text-[10px] text-blue-400">
                <span className="animate-pulse mr-2 text-blue-500">●</span> {snippets[activeCode]}
             </div>
          </div>
          
          <div>
            <h3 className="text-4xl font-black text-white mb-4 group-hover:text-blue-400 transition-colors tracking-tight">{service.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs group-hover:text-slate-200 transition-colors">{service.desc}</p>
          </div>
        </div>
      </motion.div>
    </TiltCard>
  );
}

// 2. CCTV Card
function CctvCard({ service }: { service: any }) {
  return (
    <TiltCard className="w-full h-full" intensity={15}>
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="relative w-full h-full rounded-[3rem] overflow-hidden bg-slate-950 border border-white/10 group shadow-2xl backdrop-blur-2xl"
      >
        {/* PREMIUM 1PX GRADIENT BORDER */}
        <div className="absolute inset-0 rounded-[3rem] border border-white/20 pointer-events-none z-30 group-hover:border-red-500/50 transition-colors" />
        
        <div className="absolute inset-0 z-0">
           <img src={service.image} alt="" className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-1000 ease-out" />
           <div className="absolute inset-0 bg-gradient-to-t from-red-600/30 via-transparent to-transparent" />
        </div>
        
        <FloatingParticles items={CCTV_PARTICLES} color="text-red-400" />
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-48 h-48 border border-red-500/30 rounded-full flex items-center justify-center">
           <motion.div 
             animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
             transition={{ duration: 2, repeat: Infinity }}
             className="absolute inset-0 bg-red-500/10 rounded-full"
           />
           <Video className="w-12 h-12 text-red-500 group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]" />
        </div>

        <div className="relative z-20 p-10 h-full flex flex-col justify-end">
          <h3 className="text-4xl font-black text-white mb-4 group-hover:text-red-400 transition-colors tracking-tight">{service.title}</h3>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs group-hover:text-slate-200 transition-colors">{service.desc}</p>
        </div>
      </motion.div>
    </TiltCard>
  );
}

// 3. Access Control Card
function AccessControlCard({ service }: { service: any }) {
  return (
    <TiltCard className="w-full h-full" intensity={15}>
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="relative w-full h-full rounded-[3rem] overflow-hidden bg-slate-950 border border-white/10 group shadow-2xl backdrop-blur-2xl"
      >
        {/* PREMIUM 1PX GRADIENT BORDER */}
        <div className="absolute inset-0 rounded-[3rem] border border-white/20 pointer-events-none z-30 group-hover:border-emerald-500/50 transition-colors" />
        
        <div className="absolute inset-0 z-0">
           <img src={service.image} alt="" className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-1000 ease-out" />
           <div className="absolute inset-0 bg-gradient-to-bl from-emerald-600/30 via-transparent to-transparent" />
        </div>

        <FloatingParticles items={ACCESS_PARTICLES} color="text-emerald-400" />
        
        <div className="relative z-20 p-10 h-full flex flex-col justify-between">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center backdrop-blur-xl group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
             <Fingerprint className="w-8 h-8 text-emerald-400 group-hover:text-white" />
          </div>
          
          <div>
            <div className="flex items-center gap-3 mb-4">
               <div className="h-1.5 w-12 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_#10b981]" />
               <span className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.2em]">Secure Access</span>
            </div>
            <h3 className="text-4xl font-black text-white mb-4 group-hover:text-emerald-400 transition-colors tracking-tight">{service.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-200 transition-colors">{service.desc}</p>
          </div>
        </div>
      </motion.div>
    </TiltCard>
  );
}

// 4. Digital Signage Card
function DigitalSignageCard({ service }: { service: any }) {
  return (
    <TiltCard className="w-full h-full" intensity={15}>
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="relative w-full h-full rounded-[3rem] overflow-hidden bg-slate-950 border border-white/10 group shadow-2xl backdrop-blur-2xl"
      >
        {/* PREMIUM 1PX GRADIENT BORDER */}
        <div className="absolute inset-0 rounded-[3rem] border border-white/20 pointer-events-none z-30 group-hover:border-violet-500/50 transition-colors" />
        
        <div className="absolute inset-0 z-0">
           <img src={service.image} alt="" className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-1000 ease-out" />
           <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/30 via-transparent to-transparent" />
        </div>
        
        <div className="relative z-20 p-10 h-full flex flex-col justify-between">
          <div className="w-16 h-16 rounded-2xl bg-violet-500/20 border border-violet-400/30 flex items-center justify-center backdrop-blur-xl group-hover:bg-violet-500 group-hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(139,92,246,0.3)]">
             <Monitor className="w-8 h-8 text-violet-400 group-hover:text-white" />
          </div>
          
          <div>
            <h3 className="text-4xl font-black text-white mb-4 group-hover:text-violet-400 transition-colors tracking-tight">{service.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-200 transition-colors">{service.desc}</p>
          </div>
        </div>
      </motion.div>
    </TiltCard>
  );
}

// 5. Structured Cabling Card
function StructuredCablingCard({ service }: { service: any }) {
  return (
    <TiltCard className="w-full h-full" intensity={15}>
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="relative w-full h-full rounded-[3rem] overflow-hidden bg-slate-950 border border-white/10 group shadow-2xl backdrop-blur-2xl"
      >
        {/* PREMIUM 1PX GRADIENT BORDER */}
        <div className="absolute inset-0 rounded-[3rem] border border-white/20 pointer-events-none z-30 group-hover:border-sky-500/50 transition-colors" />
        
        <div className="absolute inset-0 z-0">
           <img src={service.image} alt="" className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-1000 ease-out" />
           <div className="absolute inset-0 bg-gradient-to-r from-sky-600/30 via-transparent to-transparent" />
        </div>

        <FloatingParticles items={NETWORK_PARTICLES} color="text-sky-400" />
        
        <div className="relative z-20 p-10 h-full flex flex-col justify-between">
          <div className="w-16 h-16 rounded-2xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center backdrop-blur-xl group-hover:bg-sky-500 group-hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(14,165,233,0.3)]">
             <Network className="w-8 h-8 text-sky-400 group-hover:text-white" />
          </div>
          
          <div>
            <h3 className="text-4xl font-black text-white mb-4 group-hover:text-sky-400 transition-colors tracking-tight">{service.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-200 transition-colors">{service.desc}</p>
          </div>
        </div>
      </motion.div>
    </TiltCard>
  );
}

const SERVICES = [
  { id: 1, title: "Software Development", desc: "Custom web and mobile applications engineered for high performance.", image: "/images/software/software-main.jpg", colSpan: "md:col-span-2", isSoftware: true },
  { id: 2, title: "CCTV Systems", desc: "Advanced AI-powered surveillance for ultimate enterprise security.", image: "/images/cctv/cctv-main.jpg", colSpan: "md:col-span-1", isCctv: true },
  { id: 3, title: "Access Control", desc: "Biometric and smart card systems for secure entry management.", image: "/images/access/access-main.jpg", colSpan: "md:col-span-1", isAccess: true },
  { id: 4, title: "Digital Signage", desc: "High-impact visual communication for modern business spaces.", image: "/images/signage/signage-main.jpg", colSpan: "md:col-span-1", isSignage: true },
  { id: 5, title: "Structured Cabling", desc: "Robust network infrastructure for seamless connectivity.", image: "/images/cabling/cabling-main.jpg", colSpan: "md:col-span-1", isCabling: true }
];

export function Section1bServices() {
  return (
    <section className="py-32 bg-[#010406] relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-24">
           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] mb-8"
           >
              INTELLIGENT <br className="hidden md:block" />
              <span className="text-[#00AEEF]">SOLUTIONS.</span>
           </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[400px] md:auto-rows-[500px]">
           {SERVICES.map((service, index) => (
             <motion.div
               key={service.id}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: index * 0.15 }}
               className={service.colSpan}
             >
               {service.isSoftware ? <SoftwareCard service={service} /> :
                service.isCctv ? <CctvCard service={service} /> :
                service.isAccess ? <AccessControlCard service={service} /> :
                service.isSignage ? <DigitalSignageCard service={service} /> :
                <StructuredCablingCard service={service} />}
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
