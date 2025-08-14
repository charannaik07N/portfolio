import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const [displayText, setDisplayText] = useState('');
  const roles = ['Student', 'Developer', 'Designer', 'Problem Solver'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          // Wait 2 seconds before starting to delete
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 100 : 150);

    return () => clearTimeout(timeout);
  }, [displayText, currentRoleIndex, isDeleting]); // Removed 'roles' from dependency array

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    window.open('https://drive.google.com/file/d/1j8Mc50x1TayrflTdjy_YF9fcFbKJREcV/view?usp=sharing', '_blank');
  };

  const handleGitHub = () => {
    window.open('https://github.com/charannaik07N', '_blank');
  };

  const handleLinkedIn = () => {
    window.open('https://www.linkedin.com/in/charan-naik-charan/', '_blank');
  };

  const handleEmail = () => {
    window.location.href = 'mailto:charannaikcharan734@gmail.com';
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => {
          const size = 60 + i * 20;
          const left = 10 + i * 15;
          const top = 10 + i * 10;
          
          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-blue-200/30 dark:bg-blue-700/20"
              animate={{
                y: [0, -100, 0],
                x: [0, 100, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                width: size,
                height: size,
                left: `${left}%`,
                top: `${top}%`,
              } as React.CSSProperties}
            />
          );
        })}
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Charan Naik 
              </span>
            </h1>
            <div className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground mb-8">
              I'm a{' '}
              <span className="font-semibold text-foreground">
                {displayText}
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="inline-block w-0.5 h-8 bg-blue-600 ml-1"
                />
              </span>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Passionate about creating innovative solutions and building amazing web experiences. 
              Currently pursuing Computer Science with a focus on full-stack development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button 
              size="lg" 
              onClick={handleDownloadResume}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
            >
              <Download className="mr-2" size={18} />
              Download Resume
            </Button>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="lg" onClick={handleGitHub}>
                <Github className="mr-2" size={18} />
                GitHub
              </Button>
              <Button variant="outline" size="lg" onClick={handleLinkedIn}>
                <Linkedin className="mr-2" size={18} />
                LinkedIn
              </Button>
              <Button variant="outline" size="lg" onClick={handleEmail}>
                <Mail className="mr-2" size={18} />
                Email
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <button
              onClick={scrollToNext}
              className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors group"
            >
              <span className="text-sm mb-2">Scroll down</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ChevronDown size={24} className="group-hover:text-blue-600 transition-colors" />
              </motion.div>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}