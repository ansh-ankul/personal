'use client'

import { motion } from 'framer-motion'
import { Building2, Calendar, MapPin, ExternalLink, Brain, Code, Database } from 'lucide-react'
import Image from 'next/image'

const workData = [
  {
    title: "Applied Data Scientist",
    company: "National Center for Supercomputing Applications",
    location: "Champaign, IL",
    period: "2024 - Present",
    image: "/ncsa.png",
    description: "Working under Prof. Vikram Adve on cutting-edge AI and machine learning projects.",
    achievements: [
      "Built AI-AgriBench, an ML benchmark suite supporting 6+ datasets and 10+ models; streamlined training/evaluation pipelines reduced preprocessing time by 25%",
      "Deployed interactive Flask dashboards, a RAG-based assistant, and anomaly detection modules—boosted insight discovery and outlier flagging accuracy by 30%",
      "Led LLM evaluation (GPT-4.1, LLaMA, Gemini-Pro) across 500+ retrieval/summarization tasks using precision, recall, and grounding-based metrics-achieved around 90% faithfulness in top-performing configurations"
    ],
    technologies: ["Python", "Machine Learning", "LLMs", "Flask", "RAG", "Deep Learning"],
    icon: Brain
  },
  {
    title: "Software Engineering Intern - II (Data Science)",
    company: "YAHOO!",
    location: "Remote",
    period: "2023 - 2024",
    image: "/yahoo.png",
    description: "Developed advanced anomaly detection systems and data pipelines for large-scale applications.",
    achievements: [
      "Integrated machine learning algorithms such as Isolation Forest, DBSCAN, One-Class SVM, and Z-Score for anomaly detection, achieving a 25% increase in anomaly detection accuracy",
      "Designed a smart alerting mechanism that reduced false-positive alerts by 30%, ensuring more reliable and actionable notifications",
      "Collaborated with cross-functional teams to optimize data pipelines, reducing ETL processing time by 20%"
    ],
    technologies: ["Python", "Machine Learning", "Anomaly Detection", "ETL", "Data Pipelines"],
    icon: Database
  },
  {
    title: "Graduate Research Assistant",
    company: "University of Illinois at Urbana-Champaign",
    location: "Champaign, IL",
    period: "2023 - 2024",
    image: "/uiuc.jpeg",
    description: "Research in geotechnical machine learning and seismic analysis.",
    achievements: [
      "Enhanced CO2 plume direction prediction and seismic fault analysis by 30%, using data with over 10,000 geological entries",
      "Improved earthquake detection accuracy by 25% through deep neural networks, analyzing 5,000+ seismic wave-forms from lab published data"
    ],
    technologies: ["Python", "Deep Learning", "Seismic Analysis", "Neural Networks"],
    icon: Brain
  },
  {
    title: "Software Development Engineer",
    company: "BIGSTEP TECHNOLOGIES",
    location: "Remote",
    period: "2022 - 2023",
    image: "/bigstep.png",
    description: "Full-stack development with focus on NFT marketplace and NLP applications.",
    achievements: [
      "Administered the NFT Marketplace development catering to 1,000+ users using a full-stack environment including Javascript, Python, React.js, Node.js, Solidity, Ethereum, Next.js, MongoDB and Flask",
      "Leveraged NLP libraries (SpaCy and NLTK) and pre-trained models (BERT and RoBERTa) to classify 1,000+ user comments and reviews into precise positive, negative, or neutral categories",
      "Achieved exceptional results, exceeding benchmarks with metrics like Accuracy, Precision, Recall, ROC, AUC, and F1 Score"
    ],
    technologies: ["React", "Node.js", "Python", "NLP", "Blockchain", "MongoDB"],
    icon: Code
  },
  {
    title: "Data Science Intern",
    company: "ERNST & YOUNG",
    location: "Remote",
    period: "2022",
    image: "/ey.png",
    description: "Developed machine learning solutions for financial fraud detection.",
    achievements: [
      "Conducted a comprehensive analysis of 15+ machine learning techniques to target money laundering, refining the approach tailored to industry-specific challenges",
      "Preprocessed and executed dataset cleansing comprising over 17,000+ transactions, enhancing model training efficiency by 30%",
      "Leveraged Python with PyTorch, scikit-learn, Pandas, and NumPy to manipulate 3 large datasets with 40+ features, reducing data processing time"
    ],
    technologies: ["Python", "PyTorch", "scikit-learn", "Pandas", "NumPy", "Fraud Detection"],
    icon: Database
  }
]

export default function Work() {
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
          <h1 className="text-5xl font-bold mb-6 gradient-text">Work Experience</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My professional journey in data science, machine learning, and software engineering
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400 hidden lg:block" />
          
          <div className="space-y-12">
            {workData.map((work, index) => {
              const IconComponent = work.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-8 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full shadow-lg hidden lg:block" />
                  
                  <div className="lg:ml-16">
                    <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-slate-700/50 hover:shadow-3xl transition-all duration-300">
                      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* Image and Icon */}
                        <div className="flex flex-col items-center lg:items-start space-y-4">
                          <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-xl opacity-30" />
                            <Image
                              src={work.image}
                              alt={work.company}
                              width={120}
                              height={120}
                              className="relative rounded-2xl shadow-lg"
                            />
                          </div>
                          <div className="p-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-slate-700 dark:to-slate-600 rounded-full">
                            <IconComponent className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="lg:col-span-3 space-y-6">
                          <div>
                            <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-200">
                              {work.title}
                            </h2>
                            <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400 mb-4">
                              <div className="flex items-center space-x-2">
                                <Building2 className="w-4 h-4" />
                                <span className="font-semibold">{work.company}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <MapPin className="w-4 h-4" />
                                <span>{work.location}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Calendar className="w-4 h-4" />
                                <span>{work.period}</span>
                              </div>
                            </div>
                          </div>

                          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            {work.description}
                          </p>

                          {/* Achievements */}
                          <div>
                            <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
                              Key Achievements
                            </h3>
                            <ul className="space-y-2">
                              {work.achievements.map((achievement, achievementIndex) => (
                                <motion.li
                                  key={achievementIndex}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.5, delay: achievementIndex * 0.1 }}
                                  className="flex items-start space-x-3 text-gray-600 dark:text-gray-400"
                                >
                                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 flex-shrink-0" />
                                  <span>{achievement}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>

                          {/* Technologies */}
                          <div>
                            <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
                              Technologies Used
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              {work.technologies.map((tech, techIndex) => (
                                <motion.span
                                  key={techIndex}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ duration: 0.5, delay: techIndex * 0.1 }}
                                  className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-slate-700 dark:to-slate-600 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-blue-200 dark:border-slate-600"
                                >
                                  {tech}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-slate-700/50">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
              Career Highlights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
                <div className="text-gray-600 dark:text-gray-400">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
                <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">25%+</div>
                <div className="text-gray-600 dark:text-gray-400">Performance Gains</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 