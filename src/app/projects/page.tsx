'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, Brain, Database, Code, TrendingUp } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const projectsData = [
  {
    title: "AI-AgriBench",
    description: "A comprehensive ML benchmark suite for agricultural data analysis with support for 6+ datasets and 10+ models.",
    image: "/hero-image.png",
    technologies: ["Python", "Machine Learning", "Flask", "RAG", "LLMs"],
    github: "https://github.com/ansh-ankul",
    live: "https://github.com/ansh-ankul",
    category: "Machine Learning",
    icon: Brain,
    highlights: [
      "Streamlined training/evaluation pipelines reduced preprocessing time by 25%",
      "Interactive Flask dashboards for data visualization",
      "RAG-based assistant for agricultural insights",
      "Anomaly detection modules with 30% improved accuracy"
    ]
  },
  {
    title: "Seismic Fault Analysis",
    description: "Deep learning model for earthquake detection and CO2 plume direction prediction using geological data.",
    image: "/hero-image.png",
    technologies: ["Python", "Deep Learning", "Neural Networks", "Seismic Analysis"],
    github: "https://github.com/ansh-ankul",
    live: "https://github.com/ansh-ankul",
    category: "Deep Learning",
    icon: Brain,
    highlights: [
      "Enhanced CO2 plume direction prediction by 30%",
      "Improved earthquake detection accuracy by 25%",
      "Analyzed 10,000+ geological entries",
      "Processed 5,000+ seismic wave-forms"
    ]
  },
  {
    title: "Anomaly Detection System",
    description: "Advanced anomaly detection system using multiple ML algorithms for large-scale data monitoring.",
    image: "/hero-image.png",
    technologies: ["Python", "Machine Learning", "Anomaly Detection", "ETL"],
    github: "https://github.com/ansh-ankul",
    live: "https://github.com/ansh-ankul",
    category: "Data Science",
    icon: Database,
    highlights: [
      "25% increase in anomaly detection accuracy",
      "Reduced false-positive alerts by 30%",
      "Integrated Isolation Forest, DBSCAN, One-Class SVM",
      "Optimized ETL processing time by 20%"
    ]
  },
  {
    title: "NFT Marketplace",
    description: "Full-stack NFT marketplace with blockchain integration and NLP-powered sentiment analysis.",
    image: "/hero-image.png",
    technologies: ["React", "Node.js", "Blockchain", "NLP", "MongoDB"],
    github: "https://github.com/ansh-ankul",
    live: "https://github.com/ansh-ankul",
    category: "Full Stack",
    icon: Code,
    highlights: [
      "Catered to 1,000+ users",
      "NLP-based sentiment analysis with BERT/RoBERTa",
      "Blockchain integration with Ethereum",
      "Exceeded benchmarks in all ML metrics"
    ]
  },
  {
    title: "Financial Fraud Detection",
    description: "Machine learning system for detecting money laundering and financial fraud patterns.",
    image: "/hero-image.png",
    technologies: ["Python", "PyTorch", "scikit-learn", "Pandas", "NumPy"],
    github: "https://github.com/ansh-ankul",
    live: "https://github.com/ansh-ankul",
    category: "Machine Learning",
    icon: TrendingUp,
    highlights: [
      "Analyzed 15+ ML techniques for fraud detection",
      "Processed 17,000+ transactions",
      "Enhanced model training efficiency by 30%",
      "Manipulated datasets with 40+ features"
    ]
  },
  {
    title: "LLM Evaluation Framework",
    description: "Comprehensive evaluation framework for large language models across multiple tasks and metrics.",
    image: "/hero-image.png",
    technologies: ["Python", "LLMs", "GPT-4", "LLaMA", "Gemini"],
    github: "https://github.com/ansh-ankul",
    live: "https://github.com/ansh-ankul",
    category: "AI Research",
    icon: Brain,
    highlights: [
      "Evaluated GPT-4.1, LLaMA, Gemini-Pro",
      "500+ retrieval/summarization tasks",
      "90% faithfulness in top configurations",
      "Precision, recall, and grounding metrics"
    ]
  }
]

const categories = ["All", "Machine Learning", "Deep Learning", "Data Science", "Full Stack", "AI Research"]

export default function Projects() {
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
          <h1 className="text-5xl font-bold mb-6 gradient-text">Projects</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of my data science, machine learning, and software engineering projects
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="px-6 py-3 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-full border border-white/20 dark:border-slate-700/50 hover:bg-white/80 dark:hover:bg-slate-800/80 transition-all duration-300 font-medium text-gray-700 dark:text-gray-300"
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => {
            const IconComponent = project.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-300" />
                
                <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-white/20 dark:border-slate-700/50 hover:shadow-3xl transition-all duration-300 h-full">
                  {/* Project Image */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-xl opacity-30" />
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={250}
                      className="relative rounded-2xl shadow-lg w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4 p-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full">
                      <IconComponent className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-slate-700 dark:to-slate-600 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium border border-blue-200 dark:border-slate-600"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-400 rounded-full text-xs">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Highlights */}
                    <div className="space-y-2">
                      {project.highlights.slice(0, 2).map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 flex-shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex space-x-4 pt-4">
                      <Link
                        href={project.github}
                        className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-slate-700 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-600 transition-all duration-300 text-gray-700 dark:text-gray-300"
                      >
                        <Github className="w-4 h-4" />
                        <span className="text-sm font-medium">Code</span>
                      </Link>
                      <Link
                        href={project.live}
                        className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm font-medium">Live</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
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
              Project Statistics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">6+</div>
                <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
                <div className="text-gray-600 dark:text-gray-400">Technologies Used</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">25%+</div>
                <div className="text-gray-600 dark:text-gray-400">Performance Gains</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">1000+</div>
                <div className="text-gray-600 dark:text-gray-400">Users Impacted</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 