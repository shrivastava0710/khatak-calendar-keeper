
import React, { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeInOut"
    }
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.3
    }
  }
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <motion.main 
        className="flex-1 pb-12"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        {children}
      </motion.main>
      <footer className="py-8 border-t border-border bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-serif font-medium mb-4">Khatak Dance Academy</h3>
              <p className="text-muted-foreground">Preserving and promoting the classical dance tradition of Kathak since 1998.</p>
            </div>
            <div>
              <h4 className="text-lg font-serif font-medium mb-4">Contact</h4>
              <address className="not-italic text-muted-foreground">
                <p>123 Dance Street</p>
                <p>New Delhi, India</p>
                <p className="mt-2">info@khatakacademy.com</p>
                <p>+91 98765 43210</p>
              </address>
            </div>
            <div>
              <h4 className="text-lg font-serif font-medium mb-4">Hours</h4>
              <ul className="text-muted-foreground">
                <li>Monday - Friday: 9:00 AM - 8:00 PM</li>
                <li>Saturday: 10:00 AM - 5:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-border text-center text-muted-foreground text-sm">
            <p>© {new Date().getFullYear()} Khatak Dance Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
