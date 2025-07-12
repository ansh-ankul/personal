'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react'
import Image from 'next/image'

const educationData = [
  {
    degree: "Master of Science in Statistics",
    specialization: "Analytics Track",
    school: "University of Illinois at Urbana-Champaign",
    location: "Champaign, IL",
    period: "2023 - 2025",
    gpa: "3.8/4.0",
    image: "/uiuc.jpeg",
    description: "Focusing on advanced statistical methods, machine learning, and data science applications. Specializing in analytics and computational statistics.",
    courses: ["Advanced Machine Learning", "Statistical Computing", "Data Mining", "Time Series Analysis", "Bayesian Statistics"]
  },
  {
    degree: "Bachelor of Technology in Computer Science",
    specialization: "Data Science Specialization",
    school: "Manipal Institute of Technology",
    location: "Manipal, India",
    period: "2019 - 2023",
    gpa: "3.9/4.0",
    image: "/manipal.jpeg",
    description: "Comprehensive computer science education with focus on data science, algorithms, and software engineering principles.",
    courses: ["Data Structures & Algorithms", "Database Systems", "Machine Learning", "Software Engineering", "Computer Networks"]
  }
]

export default function Education() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 gradient-text">Education</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My academic journey in statistics, computer science, and data science
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-3xl blur-3xl" />
              
              <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-slate-700/50">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  {/* Image */}
                  <div className="flex justify-center lg:justify-start">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-xl opacity-30" />
                      <Image
                        src={edu.image}
                        alt={edu.school}
                        width={200}
                        height={200}
                        className="relative rounded-2xl shadow-lg"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h2 className="text-3xl font-bold mb-2 text-gray-800 dark:text-gray-200">
                        {edu.degree}
                      </h2>
                      <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-4">
                        {edu.specialization}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3">
                        <GraduationCap className="w-5 h-5 text-blue-600" />
                        <span className="text-gray-600 dark:text-gray-400">{edu.school}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-5 h-5 text-purple-600" />
                        <span className="text-gray-600 dark:text-gray-400">{edu.location}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-5 h-5 text-green-600" />
                        <span className="text-gray-600 dark:text-gray-400">{edu.period}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Award className="w-5 h-5 text-yellow-600" />
                        <span className="text-gray-600 dark:text-gray-400">GPA: {edu.gpa}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {edu.description}
                    </p>

                    {/* Courses */}
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
                        Key Courses
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, courseIndex) => (
                          <motion.span
                            key={courseIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: courseIndex * 0.1 }}
                            className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-slate-700 dark:to-slate-600 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-blue-200 dark:border-slate-600"
                          >
                            {course}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-slate-700/50">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
              Academic Achievements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">3.8+</div>
                <div className="text-gray-600 dark:text-gray-400">Cumulative GPA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
                <div className="text-gray-600 dark:text-gray-400">Advanced Courses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">4+</div>
                <div className="text-gray-600 dark:text-gray-400">Years of Study</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 