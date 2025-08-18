import React from "react"
import Image from "next/image"

const skills = [
  { skill: "Python" , icon:"/python.png"},
  { skill: "R Programming" ,icon:"/R.png"},
  { skill: "Computer Vision",icon:"/cv.png"},
  { skill: "NLP" ,icon:"/nlp.png"},
  { skill: "Statistics" ,icon:"/stat.png"},
  { skill: "Spark" ,icon:"/spark.png"},
  { skill: "Pandas" ,icon:"/pd.png"},
  { skill: "JavaScript" ,icon:"/js.png"},
  { skill: "C++/C Programming",icon:"/c.png" },
  { icon:"/sk.png"},{ skill: "OS" },
  { skill: "Numpy" ,icon:"/np.png"},
  { skill: "Matplotlib" ,icon:"/plt.png"},
  { skill: "PyTorch" ,icon:"/torch.png"},
  { skill: "NLTK" ,icon:"/nltk.png"},
  { skill: "Jupyter Notebooks/Colab" ,icon:"/jup.png"},
  { skill: "SQL",icon:"/sql.png" },
  { skill: "MongoDB" ,icon:"/mongo.png"},
  { skill: "Tableau",icon:"/tab.png" },
  { skill: "Linux",icon:"/linux.png" },
  { icon:"/hadoop.png" },
  { skill: "RDBMS" ,icon:"/rdbms.png"},
  
]

const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

                <div className="max-w-4xl mx-auto space-y-16">
          {/* About Content */}
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
              <span className="bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent">
                Get to know me!
              </span>
            </h2>
            
            <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed text-lg max-w-3xl mx-auto">
              <p>
                Hi, my name is <span className="font-bold text-teal-600">Ansh</span> and I am a{" "}
                <span className="font-bold text-blue-600">highly ambitious</span>,{" "}
                <span className="font-bold text-purple-600">self-motivated</span>, and{" "}
                <span className="font-bold text-teal-600">driven</span> Data Scientist and Software Engineer
                based in Illinois.
              </p>
              
              <p>
                I hold a Master's in{" "}
                <span className="font-bold text-blue-600">Statistics</span> from the University of Illinois at Urbana-Champaign, 
                with a focus on data science methodologies and software applications.
              </p>
              
              <p>
                I'm passionate about <span className="font-semibold text-teal-600">coding</span> and{" "}
                <span className="font-semibold text-blue-600">building innovative solutions</span> that leverage the power of{" "}
                <span className="font-semibold text-purple-600">data and artificial intelligence</span>. I love diving deep into{" "}
                <span className="font-semibold text-teal-600">machine learning algorithms</span>,{" "}
                <span className="font-semibold text-blue-600">data analysis</span>, and{" "}
                <span className="font-semibold text-purple-600">software development</span> to create impactful applications.
              </p>
              
              <p>
                My enthusiasm for <span className="font-semibold text-teal-600">technology and AI</span> drives me to continuously learn and explore new{" "}
                <span className="font-semibold text-blue-600">programming languages</span>,{" "}
                <span className="font-semibold text-purple-600">frameworks</span>, and{" "}
                <span className="font-semibold text-teal-600">data science methodologies</span>. I believe in the transformative power of{" "}
                <span className="font-semibold text-blue-600">data-driven solutions</span> and am always excited to tackle new challenges in this rapidly evolving field.
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
              <span className="bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent">
                My Skills
              </span>
            </h2>
            
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {skills.map((item, idx) => (
                <div key={idx} className="flex items-center bg-white dark:bg-gray-800 px-4 py-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
                  {item.skill ? (
                    <div className="flex items-center">
                      {item.icon && <img src={item.icon} alt={`${item.skill} icon`} className="w-5 h-5 mr-2" />}
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{item.skill}</span>
                    </div>
                  ) : (
                    <img src={item.icon} alt="skill icon" className="w-16 h-6" />
                  )}
                </div>
              ))}
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}

export default AboutSection
