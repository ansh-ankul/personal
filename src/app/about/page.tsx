'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Footer from '@/components/Footer'

export default function About() {
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
          <h1 className="text-5xl font-bold mb-6 gradient-text">About Me</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A passionate data scientist with expertise in machine learning, deep learning, and data-driven solutions
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Get to know me!</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                Hi, my name is Ansh and I am a <span className="font-semibold text-blue-600">highly ambitious</span>, 
                <span className="font-semibold text-purple-600"> self-motivated</span>, and 
                <span className="font-semibold text-indigo-600"> driven</span> Data Scientist based in Champaign, IL.
              </p>
              <p>
                Currently, I am pursuing a Master's in <span className="font-semibold text-blue-600">Statistics - Analytics Track</span> at 
                the University of Illinois at Urbana-Champaign, with a focus on Data science methodologies and applications.
              </p>
              <p>
                My hobbies span a wide range, from photography to watching movies, listening to music, dancing, and participating in 
                theater. I also enjoy sports like snooker and table tennis. Each of these activities keeps me engaged and continuously 
                learning, adding unique dimensions to my life.
              </p>
              <p>
                I am driven by the philosophy that personal growth is a never-ending journey. With a deep-seated passion for technology 
                and an innate desire to explore the bounds of the possible, I am constantly seeking to expand my horizons. My career is a path of discovery and I eagerly anticipate each new chapter, always remaining open to fresh opportunities and novel experiences.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">My Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                'Python', 'R Programming', 'Machine Learning', 'Deep Learning',
                'Computer Vision', 'NLP', 'Statistics', 'Spark',
                'Pandas', 'JavaScript', 'C++/C', 'SQL',
                'MongoDB', 'Tableau', 'Linux', 'Hadoop'
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-lg border border-blue-200 dark:border-slate-600 hover:shadow-lg transition-all duration-300"
                >
                  <span className="font-medium text-gray-700 dark:text-gray-300">{skill}</span>
                </motion.div>
              ))}
            </div>
            
            {/* Additional Image */}
            <div className="mt-8 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-xl opacity-30" />
                <Image
                  src="/hero-image.png"
                  alt="Data Science"
                  width={300}
                  height={300}
                  className="relative rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-slate-700/50">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
              What Drives Me
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">🔬</div>
                <div className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Research</div>
                <div className="text-gray-600 dark:text-gray-400">Pushing the boundaries of what's possible with data</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">💡</div>
                <div className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Innovation</div>
                <div className="text-gray-600 dark:text-gray-400">Creating solutions that make a real impact</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">🚀</div>
                <div className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Growth</div>
                <div className="text-gray-600 dark:text-gray-400">Continuous learning and personal development</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  )
} 