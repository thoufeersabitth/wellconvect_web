
import { motion } from 'framer-motion';

const brands = [
  { name: 'Ajax', src: '/images/leadingbrands/ajax.jpeg' },
  { name: 'APC', src: '/images/leadingbrands/apc.jpeg' },
  { name: 'Aruba', src: '/images/leadingbrands/aruba.jpeg' },
  { name: 'Avaya', src: '/images/leadingbrands/avaya.jpeg' },
  { name: 'Axis', src: '/images/leadingbrands/axis.png' },
  { name: 'Bose', src: '/images/leadingbrands/bose.jpeg' },
  { name: 'Cisco', src: '/images/leadingbrands/cisco.jpeg' },
  { name: 'Panasonic', src: '/images/leadingbrands/panasonic.jpeg' },
  { name: 'Samsung', src: '/images/leadingbrands/sam.jpeg' },
  { name: 'Western Digital', src: '/images/leadingbrands/west.jpeg' },
];

export function Section1eBrands() {
  return (
    <section className="py-24 relative z-10 overflow-hidden">
      {/* Custom CSS for seamless hover-pause marquee & shimmer */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 35s linear infinite;
          }
          /* Pauses the animation when the user hovers over the container */
          .group\\/marquee:hover .animate-marquee {
            animation-play-state: paused;
          }
          
          @keyframes shimmer {
            0% { transform: translateX(-150%) skewX(-15deg); }
            100% { transform: translateX(150%) skewX(-15deg); }
          }
          .animate-shimmer {
            animation: shimmer 3s infinite ease-in-out;
          }
        `}
      </style>

      <div className="max-w-[1400px] mx-auto px-6 relative flex flex-col items-center">
        
        {/* Premium Animated Pill Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          className="relative bg-gradient-to-r from-[#00AEEF] to-[#007BB5] rounded-full px-10 py-3.5 mb-20 shadow-[0_15px_40px_rgba(0,174,239,0.3)] overflow-hidden border border-white/20"
        >
          {/* Light Sweep Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
          
          <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-black tracking-widest uppercase relative z-10 drop-shadow-md">
            Leading Brands We Work With
          </h2>
        </motion.div>

        {/* Professional Marquee Container */}
        <div className="relative w-full overflow-hidden flex items-center group/marquee py-6">
            {/* Deep Fade Edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 md:w-56 bg-gradient-to-r from-[#010406] to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-56 bg-gradient-to-l from-[#010406] to-transparent z-20 pointer-events-none" />

            {/* Seamless Track */}
            <div className="flex gap-6 md:gap-8 w-max px-4 animate-marquee">
              {/* Double the array for flawless infinite scrolling effect */}
              {[...brands, ...brands].map((brand, idx) => (
                <div 
                  key={idx}
                  className="w-[180px] h-[90px] md:w-[240px] md:h-[120px] bg-white border border-[#00AEEF]/30 rounded-xl flex items-center justify-center p-6 shadow-lg hover:border-[#00AEEF] hover:shadow-[0_10px_30px_rgba(0,174,239,0.5)] transition-all duration-500 transform hover:-translate-y-2 cursor-pointer group/card relative overflow-hidden shrink-0"
                >
                  {/* Card Inner Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#00AEEF]/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                  
                  <img 
                    src={brand.src} 
                    alt={brand.name} 
                    className="max-w-full max-h-full object-contain filter contrast-125 group-hover/card:scale-110 transition-transform duration-500 relative z-10"
                  />
                </div>
              ))}
            </div>
        </div>

      </div>
    </section>
  );
}
