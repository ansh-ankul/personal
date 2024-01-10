import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Accident Hotspot Identification for California",
    description:
      "- Analyzed 1.74 million traffic accidents (2016-2023) for pattern identification and risk zone analysis in California. \n"+
      "- Implemented feature engineering and machine/deep learning models (Logistic Regression, Random Forest, XGBoost, "+
      " LightGBM, CNNs) to reduce prediction complexity by 90%. \n"+
      "- Improved predictive accuracy by 25% by applying NLP techniques, including sentiment analysis and word embeddings"+
      "(Word2Vec, GloVe), on 1 million+ accident descriptions.",
    image: "/thankfulthoughts.png",
    github: "https://www.linkedin.com/in/ansh-ankul/",
    link: "https://www.linkedin.com/in/ansh-ankul/",
  },
  {
    name: "Pneumonia Detection",
    description: "- Devised a Covid-19 pandemic-era for doctors to aid in Pneumonia Detection.\n"+
    "- Tackled imbalanced dataset issues through SMOTE and random oversampling, improving model performance.\n"+
    "- Expanded the dataset by 150% using data augmentation, mitigating model overfitting and obtained validation accuracy of 95%.\n"+
    "- Coordinated a team of 5 to obtain an accuracy of 91.185% using transfer learning (Inception_v3, VGG-16).",
    image: "/platoio.png",
    github: "https://www.linkedin.com/in/ansh-ankul/",
    link: "https://www.linkedin.com/in/ansh-ankul/",
  },
  {
    name: "Warehouse Apparel Detector Web App",
    description:
      "- Employed YOLOv5 object detection in PyTorch to identify apparel items within a warehouse environment.\n"+
      "- Designed and innovated a real-time web application to showcase the apparel detection capabilities, enhancing operational "+
      "efficiency by 20%.\n"+
      "- Triumphed an impressive detection accuracy rate of 85%, optimizing inventory management and reducing manual workload. ",
    image: "/familyphotos.png",
    github: "https://www.linkedin.com/in/ansh-ankul/",
    link: "https://www.linkedin.com/in/ansh-ankul/",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
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
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
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

export default ProjectsSection
