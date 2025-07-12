"use client" // this is a client component
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { HiArrowDown } from "react-icons/hi"

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left relative">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-tr from-teal-200 via-teal-100 to-white rounded-full blur-3xl opacity-60 -z-10"></div>
        <div className="md:mt-2 md:w-1/2 flex justify-center">
          <Image
            src="/headshot.jpeg"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl border-4 border-teal-200 dark:border-teal-700 animate-fadeInUp"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl animate-fadeInUp">Hi, I&#39;m Ansh!</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-teal-600">
              Data Scientist{" "}
            </span>
            Based in Chicago, IL. As a data scientist with 2+ years of experience, my goal is to develop and implement data-driven solutions that simplify and enrich everyday life.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <Link
              href="https://drive.google.com/file/d/1ovNsMaESmqjAFy5RNU_uVIgHnXRb7KZ7/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded-full shadow-lg hover:bg-teal-700 transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-teal-400"
            >
              Resume
            </Link>
            <Link
              href="/education"
              className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded-full shadow-lg hover:bg-teal-700 transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-teal-400"
            >
              Education
            </Link>
            <Link
              href="/projects"
              className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded-full shadow-lg hover:bg-teal-700 transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-teal-400"
            >
              Projects
            </Link>
            <Link
              href="/work"
              className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded-full shadow-lg hover:bg-teal-700 transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-teal-400"
            >
              Experience
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <button
          onClick={scrollToAbout}
          className="animate-bounce text-teal-600 hover:text-teal-700 transition-colors cursor-pointer"
        >
          <HiArrowDown size={35} />
        </button>
      </div>
    </section>
  )
}

export default HeroSection
