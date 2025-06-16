import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/charannaik07N', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/charan-naik-charan/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:charannaikcharan734@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Charan Naik
            </h3>
            <p className="text-muted-foreground max-w-md">
              Building digital experiences that make a difference, one line of code at a time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex space-x-6"
          >
            {socialLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                className="w-12 h-12 bg-muted hover:bg-blue-600 text-muted-foreground hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center text-sm text-muted-foreground"
          >
            <span>Made with</span>
            <Heart className="w-4 h-4 mx-1 text-red-500" fill="currentColor" />
            <span>by Charan Naik © 2025</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
