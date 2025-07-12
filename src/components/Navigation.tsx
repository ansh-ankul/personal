'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, X, Home, GraduationCap, Briefcase, FolderOpen, User } from 'lucide-react'

const navItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About', href: '/about', icon: User },
  { name: 'Education', href: '/education', icon: GraduationCap },
  { name: 'Work', href: '/work', icon: Briefcase },
  { name: 'Projects', href: '/projects', icon: FolderOpen },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-white/20 dark:border-slate-700/50' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold gradient-text"
              >
                Ansh Ankul
              </motion.div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => {
                const IconComponent = item.icon
                const isActive = pathname === item.href
                return (
                  <Link 
                    key={item.name} 
                    href={item.href}
                                          onClick={(e) => {
                        if (item.name === 'Home' && pathname === '/about') {
                          e.preventDefault()
                          router.push('/')
                          setTimeout(() => {
                            const homeSection = document.getElementById('home')
                            if (homeSection) {
                              homeSection.scrollIntoView({ behavior: 'smooth' })
                            }
                          }, 100)
                        }
                      }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                        isActive
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-white/60 dark:hover:bg-slate-800/60'
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                      <span className="font-medium">{item.name}</span>
                    </motion.div>
                  </Link>
                )
              })}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-white/20 dark:border-slate-700/50"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden"
          >
            <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-white/20 dark:border-slate-700/50">
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => {
                  const IconComponent = item.icon
                  const isActive = pathname === item.href
                  return (
                    <Link 
                      key={item.name} 
                      href={item.href} 
                      onClick={(e) => {
                        setIsOpen(false)
                        if (item.name === 'Home' && pathname === '/about') {
                          e.preventDefault()
                          router.push('/')
                          setTimeout(() => {
                            const homeSection = document.getElementById('home')
                            if (homeSection) {
                              homeSection.scrollIntoView({ behavior: 'smooth' })
                            }
                          }, 100)
                        }
                      }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                          isActive
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-white/60 dark:hover:bg-slate-800/60'
                        }`}
                      >
                        <IconComponent className="w-5 h-5" />
                        <span className="font-medium">{item.name}</span>
                      </motion.div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
} 