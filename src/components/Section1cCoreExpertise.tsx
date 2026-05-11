
import { motion } from 'framer-motion';
import { Terminal, Activity, Video, Link as LinkIcon, Layers, ArrowUpRight } from 'lucide-react';



const services = [
  {
    id: "01",
    title: "Software / Web / Application Development",
    desc: "Custom-built enterprise software, scalable web applications, and intuitive digital solutions tailored for your growth.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80",
    badge: "BUILDING PROJECT...",
    icon: <Terminal className="w-6 h-6" />,
    colSpan: "lg:col-span-2",
    particles: ['<div/>', 'async', '=>', 'npm']
  },
  {
    id: "02",
    title: "CCTV Surveillance",
    desc: "Secure your property with real-time surveillance using professional CCTV systems for 24/7 protection.",
    image: "https://images.unsplash.com/photo-1557597774-9d2739f85a76?auto=format&fit=crop&q=80",
    badge: "REC",
    icon: <Video className="w-6 h-6" />,
    colSpan: "lg:col-span-1",
    particles: ['LIVE', '1080p', 'SECURE', '70%']
  },
  {
    id: "03",
    title: "Time Attendance / Access Control",
    desc: "Integrated biometric and smart access solutions with state-of-the-art monitoring systems.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80",
    badge: "SCANNING...",
    icon: <Activity className="w-6 h-6" />,
    colSpan: "lg:col-span-1",
    particles: ['USER_AUTH', 'BIO', 'GRANTED', 'DENIED']
  },
  {
    id: "04",
    title: "Digital Signage Solutions",
    desc: "Dynamic display systems for modern communication and engagement, transforming audience connection.",
    image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80",
    badge: "STREAMING",
    icon: <Layers className="w-6 h-6" />,
    colSpan: "lg:col-span-1",
    particles: ['4K', 'CMS', 'PLAYING', 'WIFI']
  },
  {
    id: "05",
    title: "Structured Cabling",
    desc: "Seamless network infrastructure and high-speed connectivity solutions for mission-critical enterprise operations.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80",
    badge: "LINK ACTIVE",
    icon: <LinkIcon className="w-6 h-6" />,
    colSpan: "lg:col-span-1",
    particles: ['Gbps', 'FIBER', 'CAT6', '10G']
  }
];

export function Section1cCoreExpertise() {
  return (
    <section id="expertise" className="py-32 px-6 bg-[#010406] relative z-10 overflow-hidden">
      {/* Dynamic Background Glow */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#00AEEF]/20 blur-[150px] rounded-full pointer-events-none" 
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-[#00AEEF]/30 bg-[#00AEEF]/5 mb-8 backdrop-blur-sm">
              <div className="w-2.5 h-2.5 rounded-full bg-[#00AEEF] animate-pulse shadow-[0_0_10px_#00AEEF]" />
              <span className="text-[10px] font-mono text-[#00AEEF] tracking-[0.5em] uppercase font-black">
                Our Core Expertise
              </span>
            </div>

            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.85] mb-12">
              Transforming businesses with <br/> 
              <span className="text-[#00AEEF] drop-shadow-[0_0_30px_rgba(0,174,239,0.3)]">intelligent solutions.</span>
            </h2>
            
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-3xl font-medium">
              We deliver end-to-end IT infrastructure, security systems, and custom software to elevate your enterprise to the next level.
            </p>
          </motion.div>
        </div>

        {/* Pro Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.7 }}
              className={`relative h-[580px] rounded-[3rem] overflow-hidden bg-[#030f12] border border-white/10 group cursor-pointer shadow-2xl ${service.colSpan}`}
            >
              {/* Background Image with Cinematic Overlay */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-50 group-hover:scale-105 transition-all duration-1000 ease-out grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#010406] via-[#010406]/70 to-transparent" />
              </div>

              {/* FLOATING PARTICLES (Yesterday's Pro Style) */}
              <div className="absolute inset-0 z-10 pointer-events-none">
                {service.particles.map((p, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ 
                      y: [0, -100 - (i * 20)],
                      opacity: [0, 0.4, 0],
                      x: [0, (i % 2 === 0 ? 20 : -20)]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 4 + i, 
                      delay: i * 1,
                      ease: "linear"
                    }}
                    className="absolute text-[10px] font-mono text-[#00AEEF] whitespace-nowrap"
                    style={{ 
                      left: `${20 + (i * 20)}%`, 
                      bottom: '20%' 
                    }}
                  >
                    {p}
                  </motion.span>
                ))}
              </div>

              {/* Content Overlay */}
              <div className="relative z-20 p-12 h-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                   <motion.div 
                     whileHover={{ scale: 1.1, rotate: 5 }}
                     className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-[#00AEEF] group-hover:bg-[#00AEEF] group-hover:text-white transition-all duration-500 shadow-2xl"
                   >
                      {service.icon}
                   </motion.div>
                   <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/30 group-hover:text-white group-hover:bg-[#00AEEF] transition-all duration-500">
                      <ArrowUpRight className="w-6 h-6" />
                   </div>
                </div>

                <div className="group-hover:translate-y-[-10px] transition-transform duration-500">
                   <div className="flex items-center gap-3 mb-4">
                      <span className="w-2 h-2 rounded-full bg-[#00AEEF] animate-ping" />
                      <span className="font-mono text-[10px] tracking-[0.3em] uppercase font-bold text-[#00AEEF]">
                        {service.badge}
                      </span>
                   </div>
                   <h3 className="text-4xl font-black text-white mb-6 leading-tight group-hover:text-[#00AEEF] transition-colors duration-500">
                     {service.title}
                   </h3>
                   <p className="text-slate-400 text-base leading-relaxed max-w-sm group-hover:text-slate-200 transition-colors">
                     {service.desc}
                   </p>
                </div>
              </div>

              {/* Cinematic Scanline/Glow Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00AEEF]/0 via-[#00AEEF]/5 to-[#00AEEF]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none" />
              <div className="absolute inset-0 ring-1 ring-white/10 group-hover:ring-[#00AEEF]/50 transition-all duration-700 rounded-[3rem] pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
