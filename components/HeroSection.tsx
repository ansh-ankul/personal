"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const HeroSection = () => {
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
            Based in Chicago, IL. As a data scientist with 2+ years of experience, my goal is to develop and implement data-driven solutions that simplify and enrich everyday life. <br/> My updated Resume: <a href="https://drive.google.com/file/d/1SeuBXdl_QBDBsFtKft6V_gQhVDc22HUy/view?usp=sharing" color="blue" >Read here</a>.

          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <Link
              to="education"
              className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded-full shadow-lg hover:bg-teal-700 transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-teal-400"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Education
            </Link>
            <Link
              to="projects"
              className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded-full shadow-lg hover:bg-teal-700 transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-teal-400"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Projects
            </Link>
            <Link
              to="work"
              className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded-full shadow-lg hover:bg-teal-700 transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-teal-400"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Work Experience
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce text-teal-600" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
