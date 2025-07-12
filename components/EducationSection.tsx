import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import ScrollIndicator from "./ScrollIndicator"

const education = [
  {
    name: "University of Illinois Urbana-Champaign",
    description: 
    "Master of Science in Statistics\n"+
    "August 2023 - May 2025\n Key Coursework:\n"+
    "- STAT432: Basics of Statistical Learning (Machine Learning)\n"+
    "- STAT425 - Statistical Modeling\n"+
    "- CS444 - Deep Learning for Computer Vision\n"+
    "- STAT447 - Data Science Programming Methods\n"+
    "- STAT542 - Statistical Learning (Machine Learning)\n"+
    "- STAT410 - Probability and Statistics\n"+
    "- CS546 - Advanced Natural Language Processing\n"+
    "- STAT429 - Time Series Analysis\n"+
    "- STAT510 - Mathematical Statistics\n",
    image: "/uiuc.png",
    github: "https://illinois.edu/",
    link: "https://illinois.edu/",
  },
  {
    name: "Manipal University Jaipur",
    description:
    "Bachelor's Degree in Computer Science and CommunicationEngineering\n"+
    "July 2018 - November 2022 \n Key Coursework:\n"+
    "- Data Structures and Algorithms\n"+
    "- Linear Algebra\n"+
    "- Machine Learning\n"+
    "- Deep Learning\n"+
    "- Relational Database Management System\n"+
    "- Operating System",
    
    image: "/manipal.jpeg",
    github: "https://www.onlinemanipal.com/international/online-degree-courses?utm_source=Google_INTL&utm_medium=CPC&utm_campaign=GGL_SRCH_Brand_Core_Generic_US-CA&utm_content=Core_Generic_Brand_Exact&utm_keyword=manipal%20university%20jaipur&matchtype=e&utm_adset=g&utm_placement=&gad_source=1&gclid=Cj0KCQjwhtWvBhD9ARIsAOP0GognSBjCJPgL_DTkJPycU1jgp4QT3Yn5iRQ0-HxBNgLcOCqp3XVyVCMaAhJ7EALw_wcB",
    link: "https://www.onlinemanipal.com/international/online-degree-courses?utm_source=Google_INTL&utm_medium=CPC&utm_campaign=GGL_SRCH_Brand_Core_Generic_US-CA&utm_content=Core_Generic_Brand_Exact&utm_keyword=manipal%20university%20jaipur&matchtype=e&utm_adset=g&utm_placement=&gad_source=1&gclid=Cj0KCQjwhtWvBhD9ARIsAOP0GognSBjCJPgL_DTkJPycU1jgp4QT3Yn5iRQ0-HxBNgLcOCqp3XVyVCMaAhJ7EALw_wcB",
  },
]

const EducationSection = () => {
  return (
    <section id="education">
      <h1 className="mt-10 mb-2 text-center font-bold text-6xl">
        Education
      </h1>
      <ScrollIndicator className="mb-0" />
      <hr className="w-6 h-1 mx-auto mt-0 mb-24 bg-teal-500 border-0 rounded"></hr>

      <div className="flex flex-col space-y-28">
        {education.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                    <div style={{ backgroundColor: 'white', display: 'inline-block' }}>
                        <Image
                          src={project.image}
                          alt=""
                          width={1000}
                          height={1000}
                          className="rounded-xl shadow-xl hover:opacity-70"
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-2xl font-bold mb-6">{project.name}</h1>
                    <p className="text--1xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                    {project.description.split('\n').map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        <br />
                      </React.Fragment>
                     ))}
                    </p>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default EducationSection
