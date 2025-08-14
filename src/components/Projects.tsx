import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye, Star, Code, Layers, Filter, Calendar, Users, Zap, Award, Rocket, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Projects() {
  const [filter, setFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack MERN e-commerce solution with advanced features including user authentication, product catalog, shopping cart, payment integration, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Bootstrap'],
      githubUrl: 'https://github.com/charannaik07N',
      liveUrl: '#',
      featured: true,
      category: 'fullstack',
      status: 'In Progress',
      year: '2024',
      team: 'Solo',
      duration: '3 months',
      highlights: ['Add to Inventory', 'Filter Products','Search Products', 'User Authentication'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'PayNest',
      description: 'A comprehensive employee payroll management system that monitors attendance, manages salary details, handles tax deductions, and provides employee management functionality.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Bootstrap'],
      githubUrl: 'https://github.com/charannaik07N/PayNest',
      liveUrl: 'https://pay-nest-6k2b.vercel.app/',
      featured: true,
      category: 'fullstack',
      status: 'completed',
      year: '2024',
      team: 'group',
      duration: '2 months',
      highlights: ['Payroll Management', 'Attendance Tracking', 'Tax Calculations'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'HR Dashboard',
      description: 'A comprehensive HR management dashboard that allows tracking employee performance, attendance, and payroll using React and Redux with beautiful data visualizations.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop',
      technologies: ['React', 'Tailwind', 'Chart.js', 'Employee API'],
      githubUrl: 'https://github.com/charannaik07N/HR-Dashboard',
      liveUrl: 'https://hr-dashboard-git-main-charan-s-projects-647ac572.vercel.app',
      featured: true,
      category: 'frontend',
      status: 'completed',
      year: '2024',
      team: 'Solo',
      duration: '1 month',
      highlights: ['Data Visualization', 'Performance Tracking', 'Responsive Design'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Portfolio Website',
      description: 'My personal portfolio website built with React and Framer Motion, featuring smooth animations, responsive design, and modern UI components.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite'],
      githubUrl: 'https://github.com/charannaik07N',
      liveUrl: '#',
      featured: false,
      category: 'frontend',
      status: 'completed',
      year: '2024',
      team: 'Solo',
      duration: '2 weeks',
      highlights: ['Smooth Animations', 'Modern Design', 'SEO Optimized'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Cosmetic Website',
      description: 'A beautiful cosmetic e-commerce website that showcases various beauty products with user reviews, ratings, and product recommendations.',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=400&fit=crop',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      githubUrl: 'https://github.com/charannaik07N/cosmetic-website',
      liveUrl: '#',
      featured: true,
      category: 'frontend',
      status: 'completed',
      year: '2023',
      team: 'group',
      duration: '3 weeks',
      highlights: ['Product Showcase', 'User Reviews', 'Responsive Design'],
      color: 'from-pink-500 to-rose-500'
    },
  {
  title: 'summarizer',
  description: "An AI-powered text summarization tool that automatically condenses long articles, documents, or web content into concise and readable summaries using natural language processing.",
  image: 'https://www.recraft.ai/community?imageId=2930c237-abd0-4019-8cb9-ca235ca3cae5',
  technologies: ['React', 'Tailwind CSS','Python'],
  githubUrl: 'https://github.com/charannaik07N/summarizer-',
  liveUrl: '#',
  featured: true,
  category: 'AI',
  status: 'completed',
  year: '2025',
  team: 'Duo',
  duration: '3 weeks',
  highlights: ['Upload Pdf', 'Ask Question ', 'User-friendly Interface','Text Analysis','Voice Output'],
  color: 'from-blue-500 to-cyan-500'
},
  {
  title: 'Honest-Ai',
  description: "An AI-driven platform that ensures transparency and honesty in AI-generated content.",
  image: 'https://images.unsplash.com/photo-1581093588400-5c5c5c5c5c5c?w=600&h=400&fit=crop',
  technologies: ['React', 'Tailwind CSS','Python','Node.js','Express.js','supabase'],
  githubUrl: 'https://github.com/charannaik07N/honest-ai',
  liveUrl: '#',
  featured: true,
  category: 'AI',
  status: 'In Progress',
  year: '2025',
  team: 'Duo',
  duration: '6 weeks',
  highlights: ['Transparency in AI', 'User Trust', 'Content Verification'],
  color: 'from-blue-500 to-cyan-500'
},
{
  title: 'Disease Prediction System',
  description: 'A machine learning project that predicts diseases based on symptoms using historical data and various ML algorithms with high accuracy.',
  image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
  technologies: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn'],
      githubUrl: '#',
      liveUrl: '#',
      featured: false,
      category: 'ai',
      status: 'in-progress',
      year: '2024',
      team: 'Team of 2',
      duration: '4 months',
      highlights: ['ML Algorithms', 'Data Analysis', 'Healthcare'],
      color: 'from-teal-500 to-cyan-500'
    },
    {
      title: 'Shortest Path Finder using AI',
      description: 'An artificial intelligence project that finds the optimal shortest path in complex graphs using advanced AI algorithms and pathfinding techniques.',
      image: 'https://images.unsplash.com/photo-1518186233392-c232efbf2373?w=600&h=400&fit=crop',
      technologies: ['Python', 'AI Algorithms', 'Graph Theory', 'Visualization'],
      githubUrl: '#',
      liveUrl: '#',
      featured: false,
      category: 'ai',
      status: 'completed',
      year: '2023',
      team: 'Solo',
      duration: '6 weeks',
      highlights: ['AI Pathfinding', 'Graph Algorithms', 'Visual Output'],
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: Layers },
    { id: 'fullstack', label: 'Full Stack', icon: Code },
    { id: 'frontend', label: 'Frontend', icon: Eye },
    { id: 'ai', label: 'AI/ML', icon: Zap }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const featuredProjects = filteredProjects.filter(project => project.featured);
  const otherProjects = filteredProjects.filter(project => !project.featured);

  const handleGitHubClick = (url) => {
    if (url && url !== '#') {
      window.open(url, '_blank');
    }
  };

  const handleLiveClick = (url) => {
    if (url && url !== '#') {
      window.open(url, '_blank');
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'in-progress': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-80 h-80 bg-blue-200/20 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-200/20 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-200 dark:border-blue-800 rounded-full px-4 py-2 mb-6"
          >
            <Rocket className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">My Work</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover my latest work and passion projects that showcase my skills in modern web development and emerging technologies
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setFilter(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                filter === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white/70 dark:bg-gray-800/70 hover:bg-white dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700'
              }`}
            >
              <category.icon className="w-4 h-4" />
              <span>{category.label}</span>
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {/* Featured Projects */}
            {featuredProjects.length > 0 && (
              <div className="mb-20">
                <div className="grid lg:grid-cols-2 gap-8">
                  {featuredProjects.map((project, index) => (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                      onHoverStart={() => setHoveredProject(project.title)}
                      onHoverEnd={() => setHoveredProject(null)}
                      className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 relative"
                    >
                      {/* Status Badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                          <div className="w-1.5 h-1.5 rounded-full bg-current"></div>
                          {project.status === 'completed' ? 'Completed' : 'In Progress'}
                        </span>
                      </div>

                      {/* Featured Badge */}
                      <div className="absolute top-4 right-4 z-10">
                        <div className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                          <Star className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      {/* Image Section */}
                      <div className="relative overflow-hidden h-64">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${project.color}/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                        
                        {/* Overlay Buttons */}
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                          {project.githubUrl && project.githubUrl !== '#' && (
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => handleGitHubClick(project.githubUrl)}
                              className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-xl border border-white/30 hover:bg-white/30 transition-colors"
                            >
                              <Github className="w-4 h-4" />
                              Code
                            </motion.button>
                          )}
                          {project.liveUrl && project.liveUrl !== '#' && (
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => handleLiveClick(project.liveUrl)}
                              className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-xl border border-white/30 hover:bg-white/30 transition-colors"
                            >
                              <ExternalLink className="w-4 h-4" />
                              Live Demo
                            </motion.button>
                          )}
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-8">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {project.title}
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            {project.year}
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                        {/* Project Info */}
                        <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50/50 dark:bg-gray-800/50 rounded-2xl">
                          <div className="flex items-center gap-2 text-sm">
                            <Users className="w-4 h-4 text-blue-600" />
                            <span className="text-muted-foreground">{project.team}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Clock className="w-4 h-4 text-green-600" />
                            <span className="text-muted-foreground">{project.duration}</span>
                          </div>
                        </div>

                        {/* Highlights */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Key Features</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.highlights.map((highlight, i) => (
                              <span
                                key={i}
                                className={`px-3 py-1 bg-gradient-to-r ${project.color} text-white text-xs rounded-full shadow-sm`}
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Technologies */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-white dark:bg-gray-700 text-sm rounded-xl border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3">
                          {project.githubUrl && project.githubUrl !== '#' && (
                            <Button 
                              variant="outline" 
                              onClick={() => handleGitHubClick(project.githubUrl)}
                              className="flex-1"
                            >
                              <Github className="w-4 h-4 mr-2" />
                              View Code
                            </Button>
                          )}
                          {project.liveUrl && project.liveUrl !== '#' && (
                            <Button 
                              onClick={() => handleLiveClick(project.liveUrl)}
                              className={`flex-1 bg-gradient-to-r ${project.color} hover:opacity-90 text-white border-0`}
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
              </div>
            )}

            {/* Other Projects */}
            {otherProjects.length > 0 && (
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-12"
                >
                  <h3 className="text-3xl font-bold mb-4">Other Notable Projects</h3>
                  <p className="text-muted-foreground">Additional projects that showcase my diverse skill set</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {otherProjects.map((project, index) => (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="group bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                    >
                      {/* Background Gradient */}
                      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.color} opacity-5 rounded-full blur-2xl`}></div>
                      
                      <div className="relative">
                        <div className="flex justify-between items-start mb-4">
                          <div className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                            <Code className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex gap-2">
                            {project.githubUrl && project.githubUrl !== '#' && (
                              <Button 
                                variant="ghost" 
                                size="sm"
                                onClick={() => handleGitHubClick(project.githubUrl)}
                                className="opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <Github className="w-4 h-4" />
                              </Button>
                            )}
                            {project.liveUrl && project.liveUrl !== '#' && (
                              <Button 
                                variant="ghost" 
                                size="sm"
                                onClick={() => handleLiveClick(project.liveUrl)}
                                className="opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <ExternalLink className="w-4 h-4" />
                              </Button>
                            )}
                          </div>
                        </div>

                        <h4 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h4>

                        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                          {project.description}
                        </p>

                        <div className="flex items-center justify-between mb-4 text-xs text-muted-foreground">
                          <span>{project.year}</span>
                          <span className={`px-2 py-1 rounded-full ${getStatusColor(project.status)}`}>
                            {project.status === 'completed' ? 'Completed' : 'In Progress'}
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-lg border border-gray-200 dark:border-gray-600"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="px-2 py-1 text-xs text-muted-foreground font-medium">
                              +{project.technologies.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Project Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { icon: Code, number: `${projects.length}+`, label: 'Projects Built', color: 'from-blue-600 to-cyan-600' },
            { icon: Star, number: `${featuredProjects.length}`, label: 'Featured Works', color: 'from-yellow-500 to-orange-500' },
            { icon: Github, number: '15+', label: 'GitHub Repos', color: 'from-gray-600 to-gray-800' },
            { icon: Award, number: '100%', label: 'Client Satisfaction', color: 'from-green-600 to-emerald-600' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-14 h-14 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                <stat.icon className="w-7 h-7 text-white" />
              </div>
              <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}