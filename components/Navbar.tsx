"use client" // this is a client component
import React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"

interface NavItem {
  label: string
  page: string
  isScroll?: boolean
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "/",
  },
  // {
  //   label: "About",
  //   page: "/",
  //   isScroll: true,
  // },
  {
    label: "Education",
    page: "/education",
  },
  {
    label: "Work Experience",
    page: "/work",
  },
  {
    label: "Projects",
    page: "/projects",
  },
  
]

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  const pathname = usePathname()
  const router = useRouter()
  const [navbar, setNavbar] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      if (pathname === "/") {
        const homeSection = document.getElementById("home")
        const aboutSection = document.getElementById("about")
        
        if (homeSection && aboutSection) {
          const homeRect = homeSection.getBoundingClientRect()
          const aboutRect = aboutSection.getBoundingClientRect()
          
          // If about section is in view (top of about section is above viewport center)
          if (aboutRect.top <= window.innerHeight / 2) {
            setActiveSection("about")
          } else {
            setActiveSection("home")
          }
        }
      }
    }

    if (pathname === "/") {
      // Check if there's a hash in the URL
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
      handleScroll() // Check initial position
    } else {
      setActiveSection("")
    }

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [pathname])

  const handleNavigation = (item: NavItem) => {
    if (item.isScroll && pathname === "/") {
      // If we're already on the home page, just scroll to about
      const aboutSection = document.getElementById("about")
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" })
      }
    } else if (item.isScroll) {
      // If we're on a different page, navigate to home with hash and scroll immediately
      router.push("/#about")
      setTimeout(() => {
        const aboutSection = document.getElementById("about")
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: "smooth" })
          setActiveSection("about")
        }
      }, 50)
    } else {
      // Regular navigation
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
    <header className="w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 rounded-b-2xl shadow-lg bg-white/70 dark:bg-stone-900/70 backdrop-blur-md border-b border-neutral-200 dark:border-stone-700 transition-all duration-500">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/">
              <div className="container flex items-center space-x-2">
                <h2 className="text-2xl font-bold tracking-tight text-teal-700 dark:text-teal-400">Ansh Ankul</h2>
              </div>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-teal-400 focus:border bg-white/80 dark:bg-stone-800/80 shadow"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
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
                    className={`block lg:inline-block px-3 py-2 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-teal-400 ${
                      active 
                        ? "bg-teal-100 text-teal-700 dark:bg-stone-800 dark:text-teal-400" 
                        : "text-neutral-900 dark:text-neutral-100 hover:bg-teal-100 hover:text-teal-700 dark:hover:bg-stone-800 dark:hover:text-teal-400"
                    }`}
                  >
                    {item.label}
                  </button>
                )
              })}
              {currentTheme === "dark" ? (
                <button
                  onClick={() => setTheme("light")}
                  className="bg-slate-100 p-2 rounded-xl shadow hover:bg-teal-100 transition-colors"
                >
                  <RiSunLine size={25} color="black" />
                </button>
              ) : (
                <button
                  onClick={() => setTheme("dark")}
                  className="bg-slate-100 p-2 rounded-xl shadow hover:bg-teal-100 transition-colors"
                >
                  <RiMoonFill size={25} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
