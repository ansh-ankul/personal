import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import Arrow from "./Arrow"

const workex = [
  {
    name: "UIUC - Graduate Research Assistant - Geotechnical Machine Learning",
    description: 
    "- Enhanced CO2 plume direction prediction and seismic fault analysis by 30%, collaborating with Prof. Roman Makhnenko, using data with over 10,000 geological entries. \n"+
    "- Improved earthquake detection accuracy by 25% through deep neural networks, analyzing 5,000+ seismic wave-forms from lab published data. \n",
    name2:"UIUC - Graduate Course Assistant - CS222",
    desc2:"- Assisted a professor in grading assignments, focusing on accurate evaluation and constructive feedback. \n"
    +"- Mentored students in project development, offering technical guidance and encouraging creative problem-solving.",
    image: "/uiuc.jpeg",
    github: "https://www.linkedin.com/in/ansh-ankul/",
    link: "https://www.linkedin.com/in/ansh-ankul/",
  },
  {
    name: "BIGSTEP TECHNOLOGIES - Software Development Engineer",
    description:
      "- Administered the NFT Marketplace development catering to 1,000+ users using a full-stack environment including Javascript,"+
      "Python, React.js, Node.js, Solidity, Ethereum, Next.js, MongoDB and Flask.\n"+
      "- Leveraged NLP libraries (SpaCy and NLTK) and pre-trained models (BERT and RoBERTa) to classify 1,000+ user comments and"+
      "reviews into precise positive, negative, or neutral categories.\n"+
      "- Achieved exceptional results, exceeding benchmarks with metrics like Accuracy, Precision, Recall, ROC, AUC, and F1 Score.",
    image: "/bigstep.png",
    github: "https://www.linkedin.com/in/ansh-ankul/",
    link: "https://www.linkedin.com/in/ansh-ankul/",
  },
  {
    name: "ERNST & YOUNG - Data Science Intern",
    description: 
    "- Conducted a comprehensive analysis of 15+ machine learning techniques to target money laundering, refining the approach"+
    "tailored to industry-specific challenges.\n"+
    "- Preprocessed and executed dataset cleansing comprising over 17,000+ transactions, enhancing model training efficiency by"+
    "30%.\n"+
    "- Leveraged Python with PyTorch, scikit-learn, Pandas, and NumPy to manipulate 3 large datasets with 40+ features, reducing"+
    "data processing time.",
    image: "/ey.png",
    github: "https://www.linkedin.com/in/ansh-ankul/",
    link: "https://www.linkedin.com/in/ansh-ankul/",
  },

]

const WorkSection = () => {
  return (
    <section id="work">
      <h1 className="my-10 text-center font-bold text-4xl">
        Work Experience
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {workex.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
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
                    <h1 className="text-2xl font-bold mb-6">{project.name2&& project.name2}</h1>
                    <p className="text--1xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                    {project.desc2 && project.desc2.split('\n').map((line, index) => (
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

        <Arrow/>
        
      </div>
    </section>
  )
}

export default WorkSection
