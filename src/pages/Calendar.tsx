
import React from 'react';
import { motion } from 'framer-motion';
import Calendar from '@/components/Calendar';
import Layout from '@/components/Layout';
import { getClassSchedules } from '@/utils/calendarData';
import { Calendar as CalendarIcon, Clock, Users, GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';

const CalendarPage: React.FC = () => {
  const schedules = getClassSchedules();
  
  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Class Schedule
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Browse our comprehensive schedule of Kathak dance classes for all ages and skill levels,
                from beginner fundamentals to advanced choreography and performance.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Calendar schedules={schedules} />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-16"
            >
              <h2 className="text-2xl font-serif font-medium mb-6">Class Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className={cn(
                  "bg-white rounded-lg shadow-md p-6",
                  "hover-lift"
                )}>
                  <h3 className="text-xl font-serif font-medium mb-4 flex items-center">
                    <Users className="mr-2 h-5 w-5 text-khatak-gold" />
                    Class Levels
                  </h3>
                  <ul className="space-y-4">
                    {[
                      { 
                        name: 'Beginner', 
                        description: 'Introduction to basic footwork, hand gestures, and simple compositions.' 
                      },
                      { 
                        name: 'Intermediate', 
                        description: 'More complex rhythmic patterns, advanced footwork, and storytelling techniques.' 
                      },
                      { 
                        name: 'Advanced', 
                        description: 'Sophisticated compositions, nuanced expressions, and performance preparation.' 
                      },
                      { 
                        name: 'Children & Teens', 
                        description: 'Age-appropriate training with focus on building foundation and confidence.' 
                      }
                    ].map((level, index) => (
                      <li key={index} className="pb-3 border-b border-border last:border-0 last:pb-0">
                        <h4 className="font-medium text-khatak-gold">{level.name}</h4>
                        <p className="text-muted-foreground">{level.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={cn(
                  "bg-white rounded-lg shadow-md p-6",
                  "hover-lift"
                )}>
                  <h3 className="text-xl font-serif font-medium mb-4 flex items-center">
                    <CalendarIcon className="mr-2 h-5 w-5 text-khatak-gold" />
                    General Information
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium text-khatak-gold flex items-center">
                        <Clock className="mr-2 h-4 w-4" /> Class Duration
                      </h4>
                      <p className="text-muted-foreground">
                        Beginner classes: 1.5 hours<br />
                        Intermediate/Advanced classes: 2 hours<br />
                        Children's classes: 1 hour
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-khatak-gold flex items-center">
                        <GraduationCap className="mr-2 h-4 w-4" /> What to Bring
                      </h4>
                      <p className="text-muted-foreground">
                        - Comfortable clothing that allows free movement<br />
                        - Ghungroos (ankle bells) if you have them<br />
                        - Water bottle<br />
                        - Notebook for recording compositions (optional)
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-khatak-gold">Registration</h4>
                      <p className="text-muted-foreground mb-4">
                        Pre-registration is required for all classes. Please register at least 24 hours before the class.
                      </p>
                      <a 
                        href="#register" 
                        className={cn(
                          "px-6 py-2 rounded-md text-base font-medium transition-all inline-block",
                          "bg-khatak-gold text-black hover:bg-khatak-gold/90",
                          "hover-lift"
                        )}
                      >
                        Register for Classes
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CalendarPage;
