
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.4, 0.0, 0.2, 1] 
      } 
    },
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1593696954577-d3e01a7ae2f9?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      </div>
      
      {/* Decorative Border Inspired by Natya Sutra */}
      <div className="absolute top-10 left-10 right-10 bottom-10 border border-primary/30 z-[1] pointer-events-none" />
      
      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
        <motion.div
          variants={container}
          initial="hidden"
          animate={loaded ? "show" : "hidden"}
          className="text-center max-w-4xl"
        >
          <motion.div variants={item}>
            <h2 className="text-sm md:text-base font-medium tracking-wider uppercase mb-3 text-primary">
              <span className="inline-block px-3 py-1 bg-black/40 backdrop-blur-sm rounded-full border border-primary/30">
                Tradition • Expression • Rhythm
              </span>
            </h2>
          </motion.div>
          
          <motion.h1 
            variants={item}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-shadow"
          >
            Experience the Art of <br className="hidden md:block" />
            <span className="text-primary">Kathak Dance</span>
          </motion.h1>
          
          <motion.p 
            variants={item}
            className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-shadow"
          >
            Discover the classical North Indian dance form that combines intricate footwork, 
            graceful movements, and expressive storytelling.
          </motion.p>
          
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/calendar" 
              className={cn(
                "px-8 py-3 rounded-md text-base font-semibold transition-all",
                "bg-primary text-white hover:bg-primary/90",
                "hover-lift"
              )}
            >
              View Schedule
            </a>
            <a 
              href="#about" 
              className={cn(
                "px-8 py-3 rounded-md text-base font-semibold transition-all",
                "bg-black/40 backdrop-blur-sm border border-white/20",
                "hover:bg-black/50 hover-lift"
              )}
            >
              Learn More
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: 1.5, 
          duration: 0.5,
          y: {
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }
        }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/60 rounded-full animate-soft-pulse"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
