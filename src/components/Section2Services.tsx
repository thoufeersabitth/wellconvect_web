
import { motion } from 'framer-motion';
import { Video, ShieldCheck, Activity, Layers, Link as LinkIcon, Bell, Monitor, ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: "CCTV Surveillance",
    desc: "State-of-the-art security cameras with real-time monitoring and advanced AI detection capabilities.",
    icon: <Video className="w-8 h-8" />,
    image: "/images/cctv/cctv2.png",
    particles: ['LIVE', '1080p', 'SECURE', 'REC']
  },
  {
    title: "Access Control",
    desc: "Biometric and smart card systems to secure your enterprise entry points with high-precision logs.",
    icon: <ShieldCheck className="w-8 h-8" />,
    image: "/images/access/access-main.png",
    particles: ['BIO', 'AUTH', 'SCAN', 'LOCK']
  },
  {
    title: "Time Attendance",
    desc: "Automated workforce tracking solutions with cloud-sync for efficient HR and payroll management.",
    icon: <Activity className="w-8 h-8" />,
    image: "/images/access/access-main.png",
    particles: ['USER_ID', 'CLOUD', 'SYNC', 'DATA']
  },
  {
    title: "Digital Signage",
    desc: "Dynamic visual communication boards for advertising and information display in high-traffic areas.",
    icon: <Layers className="w-8 h-8" />,
    image: "/images/signage/signage-main2.png",
    particles: ['4K', 'CMS', 'PLAYING', 'WIFI']
  },
  {
    title: "Structured Cabling",
    desc: "Industrial-grade network infrastructure design for seamless, high-speed enterprise connectivity.",
    icon: <LinkIcon className="w-8 h-8" />,
    image: "/images/cabling/cabling-main.png",
    particles: ['Gbps', 'FIBER', 'CAT6', '10G']
  },
  {
    title: "Burglar Alarm System",
    desc: "Efficient EAS systems engineered to protect your valuable products.",
    icon: <Bell className="w-8 h-8" />,
    image: "/images/alarm/alarm-main.png",
    particles: ['ALARM', 'SECURE', 'ACTIVE', 'LINK']
  },
  {
    title: "Software / Web / App Dev",
    desc: "Custom enterprise software and web applications built for high performance and scalability.",
    icon: <Monitor className="w-8 h-8" />,
    image: "/images/software/software-main.jpg",
    particles: ['<div/>', 'async', '=>', 'npm']
  }
];

export function Section2Services() {
  const doubleServices = [...services, ...services];

  return (
    <section id="services" className="py-24 md:py-32 bg-transparent relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 md:mb-20">
        <div className="text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-[#00AEEF]/30 bg-[#00AEEF]/5 mb-8 md:mb-10"
          >
            <div className="w-2 h-2 rounded-full bg-[#00AEEF] animate-pulse shadow-[0_0_10px_#00AEEF]" />
            <span className="text-[10px] font-mono text-[#00AEEF] tracking-[0.5em] uppercase font-black">Our Expertise</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-black text-white mb-8 md:mb-10 tracking-[0.05em] uppercase leading-none drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]"
          >
            OUR SERVICES
          </motion.h2>
          <p className="text-slate-400 text-sm md:text-lg max-w-4xl mx-auto font-medium leading-relaxed pb-8 md:pb-16">
            At Well Connect IT & Security Solutions, we provide a comprehensive suite of services designed to support and safeguard your business operations:
          </p>
        </div>
      </div>

      <div className="relative">
        <motion.div 
          animate={{ x: [0, -3500] }}
          transition={{ 
            duration: 60, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex gap-8 md:gap-10 whitespace-nowrap"
        >
          {doubleServices.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.015 }}
              className="w-[300px] md:w-[600px] flex-shrink-0"
            >
              <div className="glass-card rounded-[3rem] md:rounded-[4rem] overflow-hidden group hover:border-[#00AEEF]/50 transition-all duration-700 h-full shadow-2xl relative bg-slate-950/40 backdrop-blur-2xl">
                
                {/* 1PX PREMIUM BORDER */}
                <div className="absolute inset-0 rounded-[3rem] md:rounded-[4rem] border border-white/10 pointer-events-none z-30 group-hover:border-[#00AEEF]/40 transition-colors duration-500" />

                {/* PRO ANIMATED IMAGE SECTION */}
                <div className="h-48 md:h-72 overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 opacity-60 group-hover:opacity-90"
                  />
                  
                  {/* FLOATING PARTICLES OVER IMAGE */}
                  <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
                    {service.particles.map((p, i) => (
                      <motion.span
                        key={i}
                        animate={{ 
                          y: [0, -200], 
                          opacity: [0, 0.4, 0],
                          x: [0, (i % 2 === 0 ? 20 : -20)]
                        }}
                        transition={{ 
                          repeat: Infinity, 
                          duration: 4 + i, 
                          delay: i * 1, 
                          ease: 'linear' 
                        }}
                        className="absolute text-[9px] font-mono text-[#00AEEF] uppercase font-bold"
                        style={{ left: `${20 + (i * 20)}%`, bottom: '10%' }}
                      >
                        {p}
                      </motion.span>
                    ))}
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-[#010406] via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute top-6 right-6 md:top-10 md:right-10 w-14 h-14 md:w-20 md:h-20 bg-[#00AEEF]/10 border border-[#00AEEF]/20 backdrop-blur-xl rounded-2xl md:rounded-3xl flex items-center justify-center text-[#00AEEF] shadow-[0_0_40px_rgba(0,174,239,0.3)] group-hover:bg-[#00AEEF] group-hover:text-white transition-all duration-700 z-20">
                    {service.icon}
                  </div>
                </div>
                
                <div className="p-8 md:p-14 whitespace-normal relative z-20">
                  <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                     <div className="w-8 h-[2px] bg-[#00AEEF] rounded-full animate-pulse shadow-[0_0_15px_#00AEEF]" />
                     <span className="text-[9px] font-black text-[#00AEEF] uppercase tracking-[0.4em]">Active Solution</span>
                  </div>
                  <h3 className="text-2xl md:text-4xl font-black text-white mb-4 md:mb-6 group-hover:text-[#00AEEF] transition-colors duration-300 uppercase tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-xs md:text-base leading-relaxed font-medium group-hover:text-slate-200 transition-colors">
                    {service.desc}
                  </p>
                  
                  <div className="mt-8 md:mt-10 flex items-center gap-4 text-[#00AEEF] font-black text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 cursor-pointer">
                     Read More <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* CINEMATIC GLOW ON HOVER */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00AEEF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Gradient Fades for Infinite Scroll */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-80 bg-gradient-to-r from-[#010406] to-transparent z-30 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-80 bg-gradient-to-l from-[#010406] to-transparent z-30 pointer-events-none" />
      </div>
    </section>
  );
}
