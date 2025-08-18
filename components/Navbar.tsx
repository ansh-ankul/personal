"use client" // this is a client component
import React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"
import { FaHome, FaGraduationCap, FaBriefcase, FaCode } from "react-icons/fa"

interface NavItem {
  label: string
  page: string
  icon: React.ReactNode
  isScroll?: boolean
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "/",
    icon: <FaHome className="w-4 h-4" />,
  },
  {
    label: "Education",
    page: "/education",
    icon: <FaGraduationCap className="w-4 h-4" />,
  },
  {
    label: "Experience",
    page: "/work",
    icon: <FaBriefcase className="w-4 h-4" />,
  },
  {
    label: "Projects",
    page: "/projects",
    icon: <FaCode className="w-4 h-4" />,
  },
]

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  const pathname = usePathname()
  const router = useRouter()
  const [navbar, setNavbar] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      setScrolled(isScrolled)

      if (pathname === "/") {
        const homeSection = document.getElementById("home")
        const aboutSection = document.getElementById("about")
        
        if (homeSection && aboutSection) {
          const homeRect = homeSection.getBoundingClientRect()
          const aboutRect = aboutSection.getBoundingClientRect()
          
          if (aboutRect.top <= window.innerHeight / 2) {
            setActiveSection("about")
          } else {
            setActiveSection("home")
          }
        }
      }
    }

    if (pathname === "/") {
      if (window.location.hash === "#about") {
        setTimeout(() => {
          const aboutSection = document.getElementById("about")
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" })
            setActiveSection("about")
          }
        }, 100)
      }
      
      window.addEventListener("scroll", handleScroll)
      handleScroll()
    } else {
      setActiveSection("")
    }

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [pathname])

  const handleNavigation = (item: NavItem) => {
    if (item.isScroll && pathname === "/") {
      const aboutSection = document.getElementById("about")
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" })
      }
    } else if (item.isScroll) {
      router.push("/#about")
      setTimeout(() => {
        const aboutSection = document.getElementById("about")
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: "smooth" })
          setActiveSection("about")
        }
      }, 50)
    } else {
      router.push(item.page)
    }
    setNavbar(false)
  }

  const isActive = (item: NavItem) => {
    if (item.page === "/" && !item.isScroll) {
      return pathname === "/" && activeSection === "home"
    }
    if (item.isScroll) {
      return pathname === "/" && activeSection === "about"
    }
    return pathname === item.page
  }

  return (
    <header className={`w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 transition-all duration-500 ${
      scrolled 
        ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-xl border-b border-gray-200/60 dark:border-gray-700/60" 
        : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg"
    }`}>
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-4 md:py-6 md:block">
            <Link href="/">
              <div className="container flex items-center space-x-2 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <h2 className="relative text-2xl font-bold tracking-tight bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent group-hover:from-teal-700 group-hover:to-blue-700 transition-all duration-300 hover:scale-105">
                    Ansh Ankul
                  </h2>
                </div>
              </div>
            </Link>
            <div className="md:hidden">
              <button
                className="p-3 text-gray-700 dark:text-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-teal-400 bg-white/80 dark:bg-gray-800/80 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 transition-all duration-300 ${
              navbar ? "block opacity-100" : "hidden md:block"
            }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-2 md:space-y-0">
              {NAV_ITEMS.map((item, idx) => {
                const active = isActive(item)
                return (
                  <button
                    key={idx}
                    onClick={async (e) => {
                      if (item.label === "Home") {
                        e.preventDefault();
                        if (pathname === "/") {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        } else {
                          await router.push("/");
                          setTimeout(() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }, 100);
                        }
                      } else {
                        handleNavigation(item);
                      }
                    }}
                    className={`group relative flex items-center space-x-2 px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-400 hover:scale-105 ${
                      active 
                        ? "bg-gradient-to-r from-teal-500 to-blue-500 text-white shadow-lg transform scale-105" 
                        : "text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-teal-50 hover:to-blue-50 dark:hover:from-teal-900/20 dark:hover:to-blue-900/20"
                    }`}
                  >
                                         <span className={`transition-all duration-300 ${
                       active ? "text-white scale-110" : "text-teal-600 dark:text-teal-400 group-hover:text-teal-700 group-hover:scale-110"
                     }`}>
                       {item.icon}
                     </span>
                    <span className="font-medium">{item.label}</span>
                    {active && (
                      <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                    )}
                  </button>
                )
              })}
                             <div className="flex items-center space-x-2">
                 {currentTheme === "dark" ? (
                   <button
                     onClick={() => setTheme("light")}
                     className="p-3 bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-yellow-200 hover:to-orange-200 dark:hover:from-yellow-800/40 dark:hover:to-orange-800/40"
                   >
                     <RiSunLine size={20} className="text-yellow-600 dark:text-yellow-400" />
                   </button>
                 ) : (
                   <button
                     onClick={() => setTheme("dark")}
                     className="p-3 bg-gradient-to-r from-gray-100 to-slate-100 dark:from-gray-800 dark:to-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-gray-200 hover:to-slate-200 dark:hover:from-gray-700 dark:hover:to-slate-700"
                   >
                     <RiMoonFill size={20} className="text-gray-700 dark:text-gray-300" />
                   </button>
                 )}
               </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
