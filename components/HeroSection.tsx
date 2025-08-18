"use client" // this is a client component
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { HiArrowDown } from "react-icons/hi"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 py-16 sm:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Profile Image Section */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-600 to-blue-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative">
                <Image
                  src="/ansh.jpeg"
                  alt="Ansh Ankul"
                  width={400}
                  height={400}
                  className="rounded-full shadow-2xl border-4 border-white dark:border-gray-800 object-cover"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="space-y-6">
              {/* Greeting */}
              <div className="space-y-2">
                <p className="text-teal-600 font-medium">Hello, I'm</p>
                <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white">
                  Ansh Ankul
                </h1>
              </div>

              {/* Title */}
              <div className="space-y-4">
                <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300">
                  I'm a{" "}
                  <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent font-bold">
                    Data Scientist & Software Engineer
                  </span>
                </h2>
                <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                  Based in Chicago, IL, with 2+ years of experience building data-driven applications 
                  and scalable software solutions that make everyday life easier.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start space-x-4">
                <a href="https://github.com/ansh-ankul" target="_blank" rel="noopener noreferrer" 
                   className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-teal-100 dark:hover:bg-teal-900 transition-all duration-300 hover:scale-110">
                  <FaGithub className="w-6 h-6 text-gray-700 dark:text-gray-300 hover:text-teal-600" />
                </a>
                <a href="https://www.linkedin.com/in/ansh-ankul/" target="_blank" rel="noopener noreferrer"
                   className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-teal-100 dark:hover:bg-teal-900 transition-all duration-300 hover:scale-110">
                  <FaLinkedin className="w-6 h-6 text-gray-700 dark:text-gray-300 hover:text-teal-600" />
                </a>
                <a href="mailto:ansh.ankul@gmail.com"
                   className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-teal-100 dark:hover:bg-teal-900 transition-all duration-300 hover:scale-110">
                  <FaEnvelope className="w-6 h-6 text-gray-700 dark:text-gray-300 hover:text-teal-600" />
                </a>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="https://drive.google.com/file/d/16Ug-FKF8A9_2JmUy8khpwgmuv77xtS1l/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-8 py-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-teal-400 overflow-hidden"
                >
                  <span className="relative z-10">Download Resume</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link
                  href="/projects"
                  className="group relative px-8 py-4 border-2 border-teal-600 text-teal-600 dark:text-teal-400 font-semibold rounded-full hover:bg-teal-600 hover:text-white transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-teal-400"
                >
                  View Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToAbout}
          className="group p-4 text-teal-600 hover:text-teal-700 transition-all duration-300 hover:scale-110"
        >
          <div className="relative">
            <HiArrowDown size={40} className="animate-bounce" />
            <div className="absolute inset-0 bg-teal-100 dark:bg-teal-900 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </div>
        </button>
      </div>
    </section>
  )
}

export default HeroSection
