
import { motion } from 'framer-motion';
import { ArrowRight, User } from 'lucide-react';

const blogs = [
  {
    id: 1,
    title: "Building Smarter Businesses: How Innovative IT Solutions Drive Growth and Efficiency",
    desc: "We consult our clients to strengthen their decision making for marketing and enterprise growth through data-driven strategies...",
    date: "OCTOBER, 02 2025",
    author: "admin",
    image: "/images/vlog/ai.jpg"
  },
  {
    id: 2,
    title: "The Future of Connectivity: Why Reliable IT Infrastructure Matters More Than Ever",
    desc: "We consult our clients to strengthen their decision making for marketing and enterprise growth through seamless connectivity...",
    date: "OCTOBER, 02 2025",
    author: "admin",
    image: "/images/vlog/ailogo.webp"
  },
  {
    id: 3,
    title: "From Challenges to Solutions: How Well Connect IT Empowers Businesses in a Digital-First World",
    desc: "We consult our clients to strengthen their decision making for marketing and enterprise growth through high-performance software...",
    date: "OCTOBER, 02 2025",
    author: "admin",
    image: "/images/vlog/office.png"
  }
];

export function Section4Blog() {
  return (
    <section id="blog" className="py-32 bg-transparent relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-[#00AEEF]/30 bg-[#00AEEF]/5 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-[#00AEEF] animate-pulse shadow-[0_0_10px_#00AEEF]" />
            <span className="text-[10px] font-mono text-[#00AEEF] tracking-[0.5em] uppercase font-black">Latest News</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase leading-none"
          >
            Read All Our <span className="text-[#00AEEF]">Blogs</span>
          </motion.h2>
        </div>

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-[3.5rem] overflow-hidden group hover:border-[#00AEEF]/50 transition-all duration-700 shadow-2xl flex flex-col h-full relative"
            >
              {/* 1PX PREMIUM BORDER */}
              <div className="absolute inset-0 rounded-[3.5rem] border border-white/10 pointer-events-none z-30 group-hover:border-[#00AEEF]/40 transition-colors" />

              {/* Image Section */}
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-80 group-hover:opacity-100" 
                />
                <div className="absolute bottom-6 right-6 z-20">
                   <div className="bg-[#00AEEF] px-5 py-2 rounded-xl text-[10px] font-black text-white uppercase tracking-wider shadow-[0_10px_20px_rgba(0,174,239,0.3)]">
                      {blog.date}
                   </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#010406] via-transparent to-transparent opacity-90 z-10" />
              </div>

              {/* Content Section */}
              <div className="p-12 flex flex-col flex-grow bg-slate-950/40 backdrop-blur-xl relative z-20">
                {/* Author */}
                <div className="flex items-center gap-4 mb-6">
                   <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00AEEF] group-hover:bg-[#00AEEF] group-hover:text-white transition-all shadow-lg">
                      <User className="w-6 h-6" />
                   </div>
                   <div className="flex flex-col">
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none mb-1">Posted By</span>
                      <span className="text-sm font-black text-white uppercase tracking-widest">{blog.author}</span>
                   </div>
                </div>

                <h3 className="text-2xl font-black text-white mb-6 group-hover:text-[#00AEEF] transition-colors line-clamp-3 leading-tight uppercase tracking-tight">
                   {blog.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-10 line-clamp-2 font-medium group-hover:text-slate-200 transition-colors">
                   {blog.desc}
                </p>

                <div className="mt-auto pt-8 border-t border-white/5">
                   <a href="#" className="inline-flex items-center gap-4 text-[#00AEEF] font-black text-xs uppercase tracking-[0.2em] group/btn">
                      Read Article 
                      <div className="w-8 h-8 rounded-full border border-[#00AEEF]/30 flex items-center justify-center group-hover/btn:bg-[#00AEEF] group-hover/btn:text-white transition-all">
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </div>
                   </a>
                </div>
              </div>

              {/* CINEMATIC GLOW ON HOVER */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00AEEF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
