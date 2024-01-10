"use client" // this is a client component
import React from "react"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const Arrow = () => {
  return (
    <div className="flex flex-row items-center text-center justify-center ">
    <Link
      to="projects"
      activeClass="active"
      spy={true}
      smooth={true}
      offset={-100}
      duration={500}
    >
      <HiArrowDown size={35} className="animate-bounce" />
    </Link>
  </div>
  )
}

export default Arrow