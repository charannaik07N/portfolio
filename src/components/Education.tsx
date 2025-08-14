import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

export function Education() {
  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'SRM UNIVERSITY AP ',
      location: 'Amaravati, Andhra Pradesh',
      period: '2022 - 2026',
      Cgpa: '7.6/10',
      achievements: [
        'champions of ISC Kabbadi Tournament 2024',
        'Active member of National Service Scheme (NSS)',
        'participated in various outdoor activities and events'
      ],
      courses: [
        'Data Structures & Algorithms',
        'Web Development',
        'Database Systems',
        'Software Engineering',
        'Machine Learning',
        'Computer Networks'
      ]
    },
    {
      degree: 'Intermediate Education',
      school: 'Sri chaitanya Junior College',
      location: 'Tenali, Andhra Pradesh',
      period: '2020 - 2022',
      gpa: '72.6/100',
      achievements: [
        'Achieved rank in AP EAMCET',
        'Participated in various inter-school competitions',
      ],
      courses: [
        'Maths ',
        'Physics',
        'chemistry',
        'English',
        'sanskrit',
      ]
    },
    {
      degree: 'High School Diploma',
      school: 'Nehru NIkethan High School',
      location: 'Tenali, Andhra Pradesh',
      period: '2008 - 2020',
      gpa: '95.5/100',
      achievements: [
        'participated in National kabbadi tournament',
        'Active member of school sports team',
        'champion of private inter-school competitions',
        'participated in district Kabbadi and KHO-KHO tournaments'
      ],
      courses: [
        'Maths ',
        'Physics',
        'chemistry',
        'English',
        'Telugu',
        'Social Studies',
        'Hindi'

      ]
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey and the knowledge I've gained along the way
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline line */}
              {index < education.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-40 bg-gradient-to-b from-blue-600 to-purple-600"></div>
              )}
              
              <div className="flex items-start gap-6 mb-12">
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1 bg-background border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                      <p className="text-lg text-blue-600 font-medium mb-2">{edu.school}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Award className="w-4 h-4" />
                          GPA: {edu.gpa}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-green-600">Achievements</h4>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-purple-600">Relevant Coursework</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-muted text-sm rounded-full border border-border"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
