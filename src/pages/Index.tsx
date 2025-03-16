
import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import InstructorCard from '@/components/InstructorCard';
import Calendar from '@/components/Calendar';
import { getClassSchedules } from '@/utils/calendarData';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const instructors = [
  {
    name: 'Guru Rajendra Prasad',
    title: 'Founder & Master Instructor',
    bio: 'With over 40 years of experience in Kathak, Guru Rajendra Prasad has performed worldwide and received numerous awards for his contributions to classical dance.',
    image: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80'
  },
  {
    name: 'Neha Sharma',
    title: 'Senior Instructor',
    bio: 'A disciple of Guru Rajendra Prasad for 15 years, Neha specializes in the Lucknow gharana style of Kathak and has performed at major festivals across India.',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80'
  },
  {
    name: 'Sunita Kalra',
    title: 'Advanced Choreographer',
    bio: 'Sunita blends traditional Kathak with contemporary influences, creating innovative choreographies while maintaining the classical essence of the dance form.',
    image: 'https://images.unsplash.com/photo-1551972873-b7e8754e8e26?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80'
  },
  {
    name: 'Priya Mehta',
    title: 'Youth Program Director',
    bio: 'With a special talent for working with children and teens, Priya has developed a unique curriculum that makes Kathak accessible and engaging for young students.',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80'
  }
];

const Index: React.FC = () => {
  const schedules = getClassSchedules();
  
  return (
    <Layout>
      <Hero />
      
      <AboutSection />
      
      {/* Instructors Section */}
      <section id="instructors" className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-sm font-medium tracking-wider uppercase mb-3 text-khatak-gold">
              Our Faculty
            </h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold">
              Meet Our Expert Instructors
            </h3>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Our instructors are accomplished performers with decades of experience in teaching 
              and performing Kathak worldwide.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {instructors.map((instructor, index) => (
              <InstructorCard
                key={instructor.name}
                name={instructor.name}
                title={instructor.title}
                bio={instructor.bio}
                image={instructor.image}
                delay={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Calendar Preview Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-sm font-medium tracking-wider uppercase mb-3 text-khatak-gold">
                Upcoming Classes
              </h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Join Our Classes
              </h3>
              <p className="text-lg mb-8 leading-relaxed text-muted-foreground">
                We offer a variety of classes for all ages and skill levels. Whether you're a beginner taking 
                your first steps or an advanced dancer looking to refine your technique, we have the perfect 
                class for you.
              </p>
              <Link 
                to="/calendar"
                className={cn(
                  "group inline-flex items-center px-6 py-3 rounded-md text-base font-semibold transition-all",
                  "bg-khatak-gold text-black hover:bg-khatak-gold/90",
                  "hover-lift"
                )}
              >
                View Full Schedule
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <Calendar schedules={schedules} compact={true} />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-sm font-medium tracking-wider uppercase mb-3 text-khatak-gold">
              Get In Touch
            </h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold">
              Contact Us
            </h3>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions about our classes or want to schedule a visit? 
              We'd love to hear from you.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-6"
              >
                <div>
                  <h4 className="text-xl font-serif font-medium mb-3">Location</h4>
                  <p className="text-muted-foreground">
                    123 Dance Street<br />
                    New Delhi, India 110001
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-serif font-medium mb-3">Contact Information</h4>
                  <p className="text-muted-foreground">
                    Phone: +91 98765 43210<br />
                    Email: info@khatakacademy.com
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-serif font-medium mb-3">Hours</h4>
                  <p className="text-muted-foreground">
                    Monday - Friday: 9:00 AM - 8:00 PM<br />
                    Saturday: 10:00 AM - 5:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-serif font-medium mb-6">Send Us a Message</h4>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-khatak-gold/50"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-khatak-gold/50"
                        placeholder="Your email"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-2 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-khatak-gold/50"
                        placeholder="Your message"
                      />
                    </div>
                    <div>
                      <button
                        type="submit"
                        className={cn(
                          "w-full px-6 py-3 rounded-md text-base font-semibold transition-all",
                          "bg-khatak-gold text-black hover:bg-khatak-gold/90",
                          "hover-lift"
                        )}
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
