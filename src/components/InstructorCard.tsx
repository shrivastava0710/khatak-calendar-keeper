
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface InstructorCardProps {
  name: string;
  title: string;
  bio: string;
  image: string;
  delay?: number;
}

export const InstructorCard: React.FC<InstructorCardProps> = ({ 
  name, 
  title, 
  bio, 
  image,
  delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ 
        duration: 0.6, 
        delay: delay * 0.2,
        ease: [0.4, 0.0, 0.2, 1] 
      }}
      className={cn(
        "bg-background rounded-lg overflow-hidden shadow-md hover:shadow-xl",
        "transition-all duration-300 group hover:-translate-y-1"
      )}
    >
      <div className="relative h-80 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 text-white">
          <h3 className="text-2xl font-serif font-medium">{name}</h3>
          <p className="text-khatak-gold font-medium">{title}</p>
        </div>
      </div>
      <div className="p-6">
        <p className="text-muted-foreground">{bio}</p>
      </div>
    </motion.div>
  );
};

export default InstructorCard;
