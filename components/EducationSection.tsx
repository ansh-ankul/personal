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
    "Bachelor's Degree in Computer Science and Communication Engineering\n"+
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

      <div className="grid grid-cols-1 gap-8">
        {education.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700">
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-2/5 p-6 flex items-center justify-center bg-gradient-to-br from-teal-50 to-blue-50 dark:from-gray-700 dark:to-gray-600">
                      <Link href={project.link}>
                        <div className="relative group">
                          <Image
                            src={project.image}
                            alt=""
                            width={400}
                            height={400}
                            className="rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300 object-contain max-h-64 bg-white p-4"
                          />
                          <div className="absolute inset-0 bg-teal-500 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-xl"></div>
                        </div>
                      </Link>
                    </div>
                    <div className="lg:w-3/5 p-8">
                      <div className="mb-4">
                        <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white border-b-2 border-teal-500 pb-2">
                          {project.name}
                        </h1>
                      </div>
                      <div className="space-y-4">
                        <div className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {project.description.split('\n').map((line, index) => {
                            if (line.includes('Key Coursework:')) {
                              return (
                                <React.Fragment key={index}>
                                  <div className="font-semibold text-gray-700 dark:text-gray-200 mt-4 mb-2">
                                    {line}
                                  </div>
                                </React.Fragment>
                              )
                            } else if (line.startsWith('- ')) {
                              return (
                                <React.Fragment key={index}>
                                  <div className="ml-4 text-gray-600 dark:text-gray-300">
                                    {line}
                                  </div>
                                </React.Fragment>
                              )
                            } else {
                              return (
                                <React.Fragment key={index}>
                                  <div className="mb-2">{line}</div>
                                </React.Fragment>
                              )
                            }
                          })}
                        </div>
                      </div>
                    </div>
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
