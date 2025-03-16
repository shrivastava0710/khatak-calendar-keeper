
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

export const AboutSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const danceStyles = [
    {
      name: "Thumri",
      description: "Graceful expressions and delicate emotions",
      image: "https://images.unsplash.com/photo-1608639013993-824afb267d0f?q=80&w=774&auto=format&fit=crop"
    },
    {
      name: "Tarana",
      description: "Pure rhythmic dance with intricate footwork",
      image: "https://images.unsplash.com/photo-1533072561510-5044f4016b1d?q=80&w=1170&auto=format&fit=crop"
    },
    {
      name: "Abhinaya",
      description: "Storytelling through facial expressions and gestures",
      image: "https://images.unsplash.com/photo-1617339860293-decbf705b3fb?q=80&w=774&auto=format&fit=crop"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-secondary to-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={item} className="text-center mb-16">
            <h2 className="text-sm font-medium tracking-wider uppercase mb-3 text-khatak-gold">
              Our Academy
            </h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold">
              Preserving the Legacy of <span className="text-khatak-gold">Kathak</span>
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div variants={item} className="order-2 md:order-1">
              <p className="text-lg mb-6 leading-relaxed">
                Founded in 1998 by Guru Rajendra Prasad, the Khatak Dance Academy has been dedicated to 
                preserving and promoting the ancient art form of Kathak dance for over two decades.
              </p>
              <p className="text-lg mb-6 leading-relaxed">
                Our academy provides comprehensive training in all aspects of Kathak dance, including 
                footwork (tatkar), rhythmic patterns (bols), graceful movements (adavs), and expressive storytelling (abhinaya).
              </p>
              <p className="text-lg leading-relaxed">
                Whether you're a beginner taking your first steps or an advanced dancer looking to refine your 
                technique, our experienced instructors provide personalized guidance to help you master this beautiful art form.
              </p>
            </motion.div>
            
            <motion.div 
              variants={item} 
              className="order-1 md:order-2 overflow-hidden rounded-lg shadow-xl"
            >
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1535359056830-d4badde79747?q=80&w=1374&auto=format&fit=crop" 
                  alt="Kathak dancers performing" 
                  className="w-full h-[500px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className={cn(
                    "flex flex-col items-center justify-center text-center py-4 px-6 rounded-lg",
                    "glass-panel"
                  )}>
                    <h4 className="text-2xl font-serif font-medium mb-2">Our Mission</h4>
                    <p className="text-white/90">
                      To inspire and nurture the next generation of Kathak dancers through quality education, 
                      cultural preservation, and artistic excellence.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div variants={item} className="mt-16 mb-12">
            <h3 className="text-2xl md:text-3xl font-serif font-medium text-center mb-8">
              Explore <span className="text-khatak-gold">Kathak</span> Dance Styles
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {danceStyles.map((style, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -10 }}
                  className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg border border-khatak-gold/10 hover:border-khatak-gold/30 transition-all duration-300"
                >
                  <div className="h-56 overflow-hidden">
                    <img 
                      src={style.image} 
                      alt={style.name} 
                      className="w-full h-full object-cover object-center transform hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-serif font-medium mb-2 text-khatak-gold">{style.name}</h4>
                    <p className="text-muted-foreground">{style.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Authentic Training",
                description: "Our curriculum follows the traditional Lucknow gharana of Kathak, ensuring authenticity in every aspect of training."
              },
              {
                title: "Experienced Faculty",
                description: "Our instructors are accomplished performers with decades of experience in teaching and performing Kathak worldwide."
              },
              {
                title: "Performance Opportunities",
                description: "Students regularly participate in cultural events, festivals, and annual showcases to gain valuable stage experience."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-sm hover-lift border border-white/5">
                <h4 className="text-xl font-serif font-medium mb-4 text-khatak-gold">{feature.title}</h4>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
