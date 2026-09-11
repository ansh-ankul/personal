"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react"
import { profile } from "@/lib/portfolio"

const links = [
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/work" },
  { label: "About", href: "/#about" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const menuButton = useRef<HTMLButtonElement>(null)

  useEffect(() => setMounted(true), [])
  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    let frame = 0
    let nextFrame = 0
    const scrollToFragment = () => {
      cancelAnimationFrame(frame)
      cancelAnimationFrame(nextFrame)
      frame = requestAnimationFrame(() => {
        nextFrame = requestAnimationFrame(() => {
          const id = window.location.hash.slice(1)
          if (id) document.getElementById(id)?.scrollIntoView({ block: "start" })
        })
      })
    }
    scrollToFragment()
    window.addEventListener("hashchange", scrollToFragment)
    return () => {
      cancelAnimationFrame(frame)
      cancelAnimationFrame(nextFrame)
      window.removeEventListener("hashchange", scrollToFragment)
    }
  }, [pathname])
  useEffect(() => {
    if (!open) return
    const dismiss = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false)
        menuButton.current?.focus()
      }
    }
    window.addEventListener("keydown", dismiss)
    return () => window.removeEventListener("keydown", dismiss)
  }, [open])

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Ansh Ankul, home" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">a<span>.</span></span>
          <span>Ansh Ankul<span className="brand-dot">.</span></span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(link => <Link key={link.label} href={link.href} className={pathname === link.href ? "active" : ""} aria-current={pathname === link.href ? "page" : undefined} onClick={() => { if (pathname === "/" && link.href === "/#about") document.getElementById("about")?.scrollIntoView({ block: "start" }) }}>{link.label}</Link>)}
        </nav>
        <div className="header-actions">
          <button className="icon-button theme-button" aria-label={mounted && resolvedTheme === "dark" ? "Switch to light theme" : "Switch to dark theme"} onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
            {mounted && resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a className="resume-link" href={profile.resume} target="_blank" rel="noopener noreferrer">Résumé <ArrowUpRight size={16} /></a>
          <button ref={menuButton} className="icon-button menu-button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
        </div>
      </div>
      <nav id="mobile-navigation" className={`mobile-nav ${open ? "is-open" : ""}`} aria-label="Mobile navigation" hidden={!open}>
        {links.map(link => <Link key={link.label} href={link.href} onClick={() => { setOpen(false); if (pathname === "/" && link.href === "/#about") document.getElementById("about")?.scrollIntoView({ block: "start" }) }}>{link.label}<ArrowUpRight size={20} /></Link>)}
        <Link href="/education" onClick={() => setOpen(false)}>Education<ArrowUpRight size={20} /></Link>
        <a href={`mailto:${profile.email}`} onClick={() => setOpen(false)}>Let’s talk<ArrowUpRight size={20} /></a>
      </nav>
    </header>
  )
}
