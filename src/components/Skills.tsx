import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Palette, Database, Globe, Smartphone, Cog, Star, TrendingUp, Zap, Award, ChevronRight } from 'lucide-react';

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20',
      description: 'Creating beautiful and responsive user interfaces',
      skills: [
        { name: 'React.js', level: 90, icon: '⚛️', category: 'Library' },
        { name: 'TypeScript', level: 55, icon: '📘', category: 'Language' },
        { name: 'HTML/CSS', level: 95, icon: '🌐', category: 'Core' },
        { name: 'Tailwind CSS', level: 90, icon: '🎨', category: 'Framework' },
        { name: 'JavaScript', level: 88, icon: '⚡', category: 'Language' },
        { name: 'Next.js', level: 50, icon: '▲', category: 'Framework' },
        { name: 'Bootstrap', level: 90, icon: ' 🟦', category: 'Framework' }
      ]
    },
    {
      title: 'Backend Development',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20',
      description: 'Building robust server-side applications and APIs',
      skills: [
        { name: 'Node.js', level: 90, icon: '🟢', category: 'Runtime' },
        { name: 'Express.js', level: 90, icon: '🚀', category: 'Framework' },
        { name: 'MongoDB', level: 80, icon: '🍃', category: 'Database' },
        { name: 'REST APIs', level: 85, icon: '🔗', category: 'Architecture' }
      ]
    },
    {
      title: 'Design & UI/UX',
      icon: Palette,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20',
      description: 'Crafting intuitive and beautiful user experiences',
      skills: [
        { name: 'Figma', level: 95, icon: '🎨', category: 'Design Tool' },
        { name: 'Adobe XD', level: 90, icon: '🔷', category: 'Design Tool' },
        { name: 'UI Design', level: 85, icon: '✨', category: 'Skill' },
        { name: 'Prototyping', level: 90, icon: '🔧', category: 'Process' },
        { name: 'Wireframing', level: 100, icon: '📐', category: 'Process' }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: Cog,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20',
      description: 'Essential development tools and workflows',
      skills: [
        { name: 'Git/GitHub', level: 90, icon: '🐙', category: 'Version Control' },
        { name: 'Docker', level: 70, icon: '🐳', category: 'DevOps' },
        { name: 'Vercel', level: 85, icon: '▲', category: 'Deployment' },
        { name: 'VS Code', level: 100, icon: '💻', category: 'Editor' },
        { name: 'Postman', level: 80, icon: '📮', category: 'API Testing' }
      ]
    }
  ];

  const getSkillLevelText = (level) => {
    if (level >= 90) return 'Expert';
    if (level >= 75) return 'Advanced';
    if (level >= 60) return 'Intermediate';
    return 'Learning';
  };

  const getSkillLevelIcon = (level) => {
    if (level >= 90) return Star;
    if (level >= 75) return Award;
    if (level >= 60) return TrendingUp;
    return Zap;
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-background to-muted/50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/20 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Heading */}
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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/10 to-blue-600/10 border border-purple-200 dark:border-purple-800 rounded-full px-4 py-2 mb-6"
          >
            <Code className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-600 dark:text-purple-400">Technical Expertise</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The powerful tools and technologies I leverage to transform innovative ideas into reality
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.title}
                onClick={() => setActiveCategory(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                  activeCategory === index
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-white/70 dark:bg-gray-800/70 hover:bg-white dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="hidden sm:inline">{category.title}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Active Category */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Category Info */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className={`${skillCategories[activeCategory].bgColor} rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 h-fit sticky top-8`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    {(() => {
                      const CatIcon = skillCategories[activeCategory].icon;
                      return <CatIcon className="w-8 h-8 text-white" />;
                    })()}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {skillCategories[activeCategory].title}
                    </h3>
                    <p className="text-muted-foreground">
                      {skillCategories[activeCategory].description}
                    </p>
                  </div>
                </div>

                {/* Category Stats */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="text-center p-4 bg-white/70 dark:bg-gray-800/70 rounded-xl border border-gray-200/50 dark:border-gray-700/50">
                    <div className={`text-2xl font-bold bg-gradient-to-r ${skillCategories[activeCategory].color} bg-clip-text text-transparent`}>
                      {skillCategories[activeCategory].skills.length}
                    </div>
                    <div className="text-sm text-muted-foreground">Technologies</div>
                  </div>
                  <div className="text-center p-4 bg-white/70 dark:bg-gray-800/70 rounded-xl border border-gray-200/50 dark:border-gray-700/50">
                    <div className={`text-2xl font-bold bg-gradient-to-r ${skillCategories[activeCategory].color} bg-clip-text text-transparent`}>
                      {Math.round(skillCategories[activeCategory].skills.reduce((acc, skill) => acc + skill.level, 0) / skillCategories[activeCategory].skills.length)}%
                    </div>
                    <div className="text-sm text-muted-foreground">Avg. Proficiency</div>
                  </div>
                </div>

                {/* Proficiency Overview */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Proficiency Overview</h4>
                  {['Expert', 'Advanced', 'Intermediate', 'Learning'].map((level) => {
                    const count = skillCategories[activeCategory].skills.filter(skill => {
                      if (level === 'Expert') return skill.level >= 90;
                      if (level === 'Advanced') return skill.level >= 75 && skill.level < 90;
                      if (level === 'Intermediate') return skill.level >= 60 && skill.level < 75;
                      return skill.level < 60;
                    }).length;
                    
                    return (
                      <div key={level} className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">{level}</span>
                        <span className="font-medium">{count} skills</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Skills List */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                {skillCategories[activeCategory].skills.map((skill, skillIndex) => {
                  const SkillLevelIcon = getSkillLevelIcon(skill.level);
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                      whileHover={{ scale: 1.02, x: 10 }}
                      className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 group cursor-pointer"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div className="text-2xl">{skill.icon}</div>
                          <div>
                            <h4 className="font-semibold text-lg text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {skill.name}
                            </h4>
                            <p className="text-sm text-muted-foreground">{skill.category}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <SkillLevelIcon className="w-5 h-5 text-yellow-500" />
                          <div className="text-right">
                            <div className="font-bold text-lg">{skill.level}%</div>
                            <div className="text-xs text-muted-foreground">{getSkillLevelText(skill.level)}</div>
                          </div>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="relative">
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 }}
                            className={`h-full bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-full shadow-sm relative overflow-hidden`}
                          >
                            <motion.div
                              animate={{ x: ['0%', '100%'] }}
                              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            />
                          </motion.div>
                        </div>
                        
                        {/* Markers */}
                        <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                          <span>Beginner</span>
                          <span>Intermediate</span>
                          <span>Advanced</span>
                          <span>Expert</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                        <span className="text-sm text-muted-foreground">Experience Level</span>
                        <div className="flex items-center gap-1 text-sm font-medium">
                          <span>{getSkillLevelText(skill.level)}</span>
                          <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Overall Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { icon: Code, number: '20+', label: 'Technologies', color: 'from-blue-600 to-cyan-600' },
            { icon: Star, number: '8', label: 'Expert Level', color: 'from-yellow-500 to-orange-500' },
            { icon: TrendingUp, number: '2+', label: 'Years Learning', color: 'from-green-600 to-emerald-600' },
            { icon: Award, number: '15+', label: 'Projects Built', color: 'from-purple-600 to-pink-600' }
          ].map((stat, index) => {
            const StatIcon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-14 h-14 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <StatIcon className="w-7 h-7 text-white" />
                </div>
                <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
