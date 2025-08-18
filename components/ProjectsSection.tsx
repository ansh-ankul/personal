import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import ScrollIndicator from "./ScrollIndicator"

const projects = [
  {
    name: "Accident Hotspot Identification for California",
    description:
      "Analyzed 1.74 million traffic accidents (2016-2023) for pattern identification and risk zone analysis in California. " +
      "Implemented feature engineering and machine/deep learning models (Logistic Regression, Random Forest, XGBoost, LightGBM, CNNs) to reduce prediction complexity by 90%. " +
      "Improved predictive accuracy by 25% by applying NLP techniques, including sentiment analysis and word embeddings (Word2Vec, GloVe), on 1 million+ accident descriptions.",
    image: "/accident.png",
    link: "https://github.com/ansh-ankul/STAT432-Project",
  },
  {
    name: "Pneumonia Detection",
    description: "Devised a Covid-19 pandemic-era for doctors to aid in Pneumonia Detection. " +
      "Tackled imbalanced dataset issues through SMOTE and random oversampling, improving model performance. " +
      "Expanded the dataset by 150% using data augmentation, mitigating model overfitting and obtained validation accuracy of 95%. " +
      "Coordinated a team of 5 to obtain an accuracy of 91.185% using transfer learning (Inception_v3, VGG-16).",
    image: "/pneumonia.png",
    github: "https://github.com/ansh-ankul",
    link: "https://github.com/ansh-ankul/Pneumonia-detection",
  },
  {
    name: "Indian Liver Patient Dataset Analysis & Prediction",
    description:
      "Built a machine learning pipeline using the UCI Indian Liver Patient Dataset to predict liver disease risk. " +
      "Implemented Logistic Regression, Random Forest, and SVM models with SMOTE for class imbalance handling. " +
      "Developed an interactive R Shiny dashboard for real-time liver disease risk predictions, achieving high accuracy with cross-validation. " +
      "The solution provides clinicians with accessible tools for early disease detection and risk assessment.",
    image: "/liver.png",
    link: "https://github.com/ansh-ankul/liver-disease-prediction",
  },
  {
    name: "Python Cheatsheets & Tutorials Collection",
    description:
      "A comprehensive collection of concise Python cheatsheets and tutorials covering essential topics for data science and programming. " +
      "Includes Python Basics for beginners, Object-Oriented Programming principles, Database integration, Pandas for data manipulation, and NumPy for numerical computing. " +
      "Each cheatsheet provides quick reference guides with practical examples and best practices, making Python learning accessible and efficient for developers at all skill levels.",
    image: "/python.png",
    link: "https://github.com/ansh-ankul/pythonBasicsCheatsheet",
    hasMultipleLinks: true,
    additionalLinks: [
      { name: "Python OOPs", url: "https://github.com/ansh-ankul/PythonOOPS" },
      { name: "Python Databases", url: "https://github.com/ansh-ankul/PythonDatabases" },
      { name: "Python Pandas", url: "https://github.com/ansh-ankul/Python-pandas" },
      { name: "NumPy Tutorial", url: "https://github.com/ansh-ankul/Numpy-Tutorial" }
    ]
  },
  {
    name: "Warehouse Apparel Detector Web App",
    description:
      "Employed YOLOv5 object detection in PyTorch to identify apparel items within a warehouse environment. " +
      "Designed and innovated a real-time web application to showcase the apparel detection capabilities, enhancing operational efficiency by 20%. " +
      "Triumphed an impressive detection accuracy rate of 85%, optimizing inventory management and reducing manual workload.",
    image: "/warehouse.png",
    github: "https://github.com/ansh-ankul",
    link: "https://github.com/ansh-ankul",
  },
  {
    name: "Machine Translation",
    description:
      "Built a machine translation model that converts Irish songs to poetry using unsupervised learning. " +
      "Developed the project with a Sequential Bidirectional LSTM model trained over 100 epochs. " +
      "Procured an accuracy of 80.42%, enabling data-driven decision-making and maximizing operational effectiveness.",
    image: "/irish.png",
    github: "https://github.com/ansh-ankul",
    link: "https://github.com/ansh-ankul",
  },
  {
    name: "Churn Classification Using Deep Learning",
    description:
      "A multi-class classification model was built using supervised learning techniques. " +
      "Achieved an accuracy of 86%, using the ANN naive approach-based model.",
    image: "/churn.png",
    github: "https://github.com/ansh-ankul",
    link: "https://github.com/ansh-ankul",
  },
  {
    name: "Fashion Clothes - Image Classification",
    description:
      "Developed an Artificial Neural Network architecture using the Fashion MNIST dataset to classify the image into 10 classes of clothing. " +
      "Obtained an accuracy of 88% in classification.",
    image: "/clothes.png",
    github: "https://github.com/ansh-ankul",
    link: "https://github.com/ansh-ankul",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="mt-10 mb-2 text-center font-bold text-6xl">
        Projects
      </h1>
      <ScrollIndicator className="mb-0" />
      <hr className="w-6 h-1 mx-auto mt-0 mb-24 bg-teal-500 border-0 rounded"></hr>

      <div className="grid grid-cols-1 gap-8">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700">
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-2/5 p-6 flex items-center justify-center bg-gradient-to-br from-teal-50 to-blue-50 dark:from-gray-700 dark:to-gray-600">
                      <Link href={project.link}>
                        <div className="relative group">
                          <div className="w-64 h-64 rounded-xl shadow-lg overflow-hidden bg-white dark:bg-gray-800">
                            <Image
                              src={project.image}
                              alt=""
                              width={256}
                              height={256}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
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
                          {project.description}
                        </p>
                        <div className="flex flex-row space-x-4 pt-4">
                          {project.hasMultipleLinks ? (
                            <>
                              <Link href={project.link} target="_blank">
                                <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-teal-100 dark:hover:bg-teal-900 transition-colors duration-300">
                                  <BsArrowUpRightSquare
                                    size={24}
                                    className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                                  />
                                </div>
                              </Link>
                              <div className="flex flex-wrap gap-2">
                                {project.additionalLinks.map((link, index) => (
                                  <Link key={index} href={link.url} target="_blank">
                                    <div className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 rounded-full text-sm hover:bg-teal-200 dark:hover:bg-teal-800 transition-colors duration-300">
                                      {link.name}
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </>
                          ) : (
                            <Link href={project.link} target="_blank">
                              <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-teal-100 dark:hover:bg-teal-900 transition-colors duration-300">
                                <BsArrowUpRightSquare
                                  size={24}
                                  className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                                />
                              </div>
                            </Link>
                          )}
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

export default ProjectsSection
