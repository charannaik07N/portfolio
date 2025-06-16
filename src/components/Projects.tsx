import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A MERN-stack e-commerce solution built with React, Node.js,Express js and MongoDB. Features include user authentication, product catalog, shopping cart',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDb', 'Bootstrap'],
      githubUrl: 'https://github.com/charannaik07N',
      liveUrl: '#',
      featured: true
    },
    {
      title: 'PayNest',
      description: 'A employee pay roll system that monitors the attandence details of the employee and salary details, tax deductions and Add Employee and Remove Employee functionality.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=300&fit=crop',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDb', 'Bootstrap'],
      githubUrl: 'https://github.com/charannaik07N/PayNest',
      liveUrl: 'https://pay-nest-6k2b.vercel.app/',
      featured: true
    },
    {
      title: 'HR Dashboard',
      description: 'A comprehensive HR management dashboard that allows tracking employee performance, attendance, and payroll using React and Redux.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=300&fit=crop',
      technologies: ['React', 'Tailwind', 'Chart.js', 'Employee API'],
      githubUrl: 'https://github.com/charannaik07N/HR-Dashboard',
      liveUrl: 'https://hr-dashboard-git-main-charan-s-projects-647ac572.vercel.app',
      featured: true
    },
    {
      title: 'Portfolio Website',
      description: 'My personal portfolio website built with React and Framer Motion, featuring smooth animations and responsive design.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop',
      technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite'],
      githubUrl: 'https://github.com/charannaik07N',
      liveUrl: '',
      featured: false
    },
    {
      title: 'Cosmetic Website',
      description: 'A cosmetic e-commerce website that showcases various beauty products with user reviews and ratings.',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&h=300&fit=crop',
      technologies: ['Html', 'css', 'javascript', 'php'],
      githubUrl: 'https://github.com/charannaik07N/cosmetic-website',
      liveUrl: '',
      featured: true
    },
    {
      title: 'Disease Prediction System',
      description: 'A machine learning project that predicts diseases based on symptoms using historical data and various algorithms.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      technologies: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn'],
      githubUrl: '#',
      liveUrl: '#',
      featured: false
    },
    {
      title: 'shortest path finder using Ai',
      description: 'A Artificial Intelligence project that finds the shortest path in a graph using AI algorithms.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      technologies: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn'],
      githubUrl: '#',
      liveUrl: '#',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const handleGitHubClick = (url) => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  const handleLiveClick = (url) => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my favorite projects that showcase my skills and passion for development
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group bg-background border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.githubUrl && (
                    <Button 
                      size="sm" 
                      variant="secondary"
                      onClick={() => handleGitHubClick(project.githubUrl)}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button 
                      size="sm" 
                      variant="secondary"
                      onClick={() => handleLiveClick(project.liveUrl)}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-muted text-sm rounded-full border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleGitHubClick(project.githubUrl)}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleLiveClick(project.liveUrl)}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-2xl font-semibold text-center mb-8">Other Notable Projects</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-background border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-lg font-semibold group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h4>
                <div className="flex gap-2">
                  {project.githubUrl && (
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleGitHubClick(project.githubUrl)}
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleLiveClick(project.liveUrl)}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </div>
              
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-muted text-xs rounded-full border border-border"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-2 py-1 text-xs text-muted-foreground">
                    +{project.technologies.length - 3} more
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}