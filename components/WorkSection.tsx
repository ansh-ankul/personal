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
    "Worked under Prof. Vikram Adve to build AI-AgriBench, an ML benchmark suite integrating 6+ datasets and 10+ models, with streamlined training and evaluation pipelines that reduced preprocessing time by 25%. Curated 80,000+ high-quality question-answer pairs from 45,000+ crop-related PDFs in the CropWizard project using state-of-the-art LLMs (e.g., GPT-4.1, LLaMA, Gemini-Pro), developing scalable retrieval and semantic filtering workflows to ensure domain relevance. Designed and deployed full-stack expert-facing platforms—including interactive dashboards (Next.js, React, Flask), RAG-based assistants, and anomaly detection tools—improving outlier detection accuracy by 30% and enabling efficient expert review, annotation, and model benchmarking. Led systematic LLM evaluations across 500+ retrieval and summarization tasks, achieving ~90% faithfulness in top configurations using precision, recall, and grounding-based metrics.",
    hasCropWizardLink: true,
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

      <div className="grid grid-cols-1 gap-8">
        {workex.map((project, idx) => {
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
                            className="rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300 object-contain max-h-64"
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
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {project.name === "UIUC - Graduate Research Assistant - Geotechnical Machine Learning"
                            ? <>
                                {project.description.replace(/Published research:.*/, "").trim()}
                                <br />
                                Research on machine learning for prediction of moduli, seismic fault analysis, and CO₂ plume direction.
                                <br />
                                <span className="font-bold">Published research:</span> <a href="https://onepetro.org/ARMAUSRMS/proceedings-abstract/ARMA24/ARMA24/D041S051R004/549201" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">View publication</a>
                              </>
                            : project.hasCropWizardLink
                            ? <>
                                {project.description.split('CropWizard').map((part, index, array) => (
                                  index === array.length - 1 
                                    ? part 
                                    : <>
                                        {part}
                                        <a 
                                          href="https://uiuc.chat/cropwizard-1.5/chat" 
                                          target="_blank" 
                                          rel="noopener noreferrer" 
                                          className="text-blue-600 underline hover:text-blue-800 font-semibold text-lg hover:scale-105 transition-transform cursor-pointer inline-block"
                                        >
                                          CropWizard
                                        </a>
                                      </>
                                ))}
                              </>
                            : project.description}
                        </p>
                        {project.name2 && (
                          <>
                            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mt-6 mb-3">
                              {project.name2}
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                              {project.desc2}
                            </p>
                          </>
                        )}
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

export default WorkSection
