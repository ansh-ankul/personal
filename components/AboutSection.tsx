import React from "react"
import Image from "next/image"

const skills = [
  { skill: "Python" },
  { skill: "R" },
  { skill: "JavaScript" },
  { skill: "C++/C" },
  { skill: "Sklearn" },
  { skill: "Numpy" },
  { skill: "Pandas" },
  { skill: "Matplotlib" },
  { skill: "PyTorch" },
  { skill: "NLTK" },
  { skill: "Jupyter Notebooks/Colab" },
  { skill: "SQL" },
  { skill: "NoSQL" },
  { skill: "Tableau" },
  { skill: "Linux" },
  { skill: "Mac" },
  { skill: "Windows" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Ansh and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> Data Scientist
              based in Champaign, IL.
            </p>
            <br />
            <p>
            Currently, I am pursuing a Master's in <span className="font-bold">{"Statistics - Analytics Track"}</span> at 
            the University of Illinois at Urbana-Champaign, with a 
            focus on Data science methodologies and applications.
            </p>
            <br />
            <p>
            My hobbies span a wide range, from photography to watching
             movies, listening to music, dancing, and participating in 
             theater. I also enjoy sports like snooker and table tennis. 
             Each of these activities keeps me engaged and continuously 
             learning, adding unique dimensions to my life.
            </p>
            <br />
            <p>
              I am driven by the philosophy that personal growth is a never-ending journey. With a deep-seated passion for technology and an innate desire to explore the bounds of the possible, I am constantly seeking to expand my horizons. My career is a path of discovery and I eagerly anticipate each new chapter, always remaining open to fresh opportunities and novel experiences.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
