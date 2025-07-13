import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import ScrollIndicator from "./ScrollIndicator"

const workex = [
  {
    name: "National Center for Supercomputing Applications - Applied Data Scientist",
    description: 
    "Worked under Prof. Vikram Adve to build AI-AgriBench, an ML benchmark suite supporting 6+ datasets and 10+ models; streamlined training/evaluation pipelines reduced preprocessing time by 25%. " +
    "Deployed interactive Flask dashboards, a RAG-based assistant, and anomaly detection modules-boosted insight discovery and outlier flagging accuracy by 30%. " +
    "Led LLM evaluation (GPT-4.1, LLaMA, Gemini-Pro) across 500+ retrieval/summarization tasks using precision, recall, and grounding-based metrics-achieved around 90% faithfulness in top-performing configurations.",
    image: "/NCSA.png",
    github: "https://www.linkedin.com/in/ansh-ankul/",
    link: "https://www.linkedin.com/in/ansh-ankul/",
  },
  {
    name: "YAHOO! - Software Engineering Intern - II (Data Science)",
    description: 
    "Integrated machine learning algorithms such as Isolation Forest, DBSCAN, One-Class SVM, and Z-Score for anomaly detection, achieving a 25% increase in anomaly detection accuracy. " +
    "Designed a smart alerting mechanism that reduced false-positive alerts by 30%, ensuring more reliable and actionable notifications. " +
    "Collaborated with cross-functional teams to optimize data pipelines, reducing ETL processing time by 20%.",
    image: "/yahoo.png",
    github: "https://www.linkedin.com/in/ansh-ankul/",
    link: "https://www.linkedin.com/in/ansh-ankul/",
  },
  {
    name: "UIUC - Graduate Research Assistant - Geotechnical Machine Learning",
    description: 
    "Enhanced CO2 plume direction prediction and seismic fault analysis by 30%, using data with over 10,000 geological entries. " +
    "Improved earthquake detection accuracy by 25% through deep neural networks, analyzing 5,000+ seismic wave-forms from lab published data. " +
    "Published research: https://onepetro.org/ARMAUSRMS/proceedings-abstract/ARMA24/ARMA24/D041S051R004/549201",
    name2:"UIUC - Graduate Course Assistant - CS222",
    desc2:"Assisted in grading and mentoring students in project development and problem-solving for CS222 at UIUC.",
    image: "/uiuc.jpeg",
    github: "https://www.linkedin.com/in/ansh-ankul/",
    link: "https://www.linkedin.com/in/ansh-ankul/",
  },
  {
    name: "BIGSTEP TECHNOLOGIES - Software Development Engineer",
    description:
      "Administered the NFT Marketplace development catering to 1,000+ users using a full-stack environment including Javascript, " +
      "Python, React.js, Node.js, Solidity, Ethereum, Next.js, MongoDB and Flask. " +
      "Leveraged NLP libraries (SpaCy and NLTK) and pre-trained models (BERT and RoBERTa) to classify 1,000+ user comments and " +
      "reviews into precise positive, negative, or neutral categories. " +
      "Achieved exceptional results, exceeding benchmarks with metrics like Accuracy, Precision, Recall, ROC, AUC, and F1 Score.",
    image: "/bigstep.png",
    github: "https://www.linkedin.com/in/ansh-ankul/",
    link: "https://www.linkedin.com/in/ansh-ankul/",
  },
  {
    name: "ERNST & YOUNG - Data Science Intern",
    description: 
    "Conducted a comprehensive analysis of 15+ machine learning techniques to target money laundering, refining the approach " +
    "tailored to industry-specific challenges. " +
    "Preprocessed and executed dataset cleansing comprising over 17,000+ transactions, enhancing model training efficiency by 30%. " +
    "Leveraged Python with PyTorch, scikit-learn, Pandas, and NumPy to manipulate 3 large datasets with 40+ features, reducing data processing time.",
    image: "/ey.png",
    github: "https://www.linkedin.com/in/ansh-ankul/",
    link: "https://www.linkedin.com/in/ansh-ankul/",
  },
]

const WorkSection = () => {
  return (
    <section id="work">
      <h1 className="mt-10 mb-2 text-center font-bold text-6xl">
        Work Experience
      </h1>
      <ScrollIndicator className="mb-0" />
      <hr className="w-6 h-1 mx-auto mt-0 mb-24 bg-teal-500 border-0 rounded"></hr>

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
                      {project.name === "UIUC - Graduate Research Assistant - Geotechnical Machine Learning"
                        ? <>
                            {project.description.replace(/Published research:.*/, "").trim()}
                            <br />
                            Research on machine learning for prediction of moduli, seismic fault analysis, and CO₂ plume direction.
                            <br />
                            <span className="font-bold">Published research:</span> <a href="https://onepetro.org/ARMAUSRMS/proceedings-abstract/ARMA24/ARMA24/D041S051R004/549201" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">View publication</a>
                          </>
                        : project.description}
                    </p>
                    <h1 className="text-2xl font-bold mb-6">{project.name2&& project.name2}</h1>
                    <p className="text--1xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.desc2 && project.desc2}
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

export default WorkSection
