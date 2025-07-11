import React from "react"
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from "react-icons/ai"
import {FaKaggle} from "react-icons/fa"


const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl mt-12">
      <hr className="w-full h-1 mx-auto mt-8 bg-gradient-to-r from-teal-400 via-teal-200 to-white border-0 rounded-full shadow"></hr>
      <div className="mx-auto p-6 flex flex-col text-center text-neutral-900 dark:text-neutral-100 md:flex-row md:justify-between items-center gap-2">
        <div className="flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100">
          © 2024 Ansh Ankul<a href="/" className="hover:underline"></a>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <a href="https://github.com/ansh-ankul" rel="noreferrer" target="_blank">
            <AiOutlineGithub
              className="hover:-translate-y-2 hover:scale-110 transition-all duration-300 cursor-pointer text-neutral-500 dark:text-neutral-100 drop-shadow"
              size={30}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/ansh-ankul/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-2 hover:scale-110 transition-all duration-300 cursor-pointer text-neutral-500 dark:text-neutral-100 drop-shadow"
              size={30}
            />
          </a>
          <a
            href="https://www.kaggle.com/anshankul"
            rel="noreferrer"
            target="_blank"
          >
            <FaKaggle
              className="hover:-translate-y-2 hover:scale-110 transition-all duration-300 cursor-pointer text-neutral-500 dark:text-neutral-100 drop-shadow"
              size={30}
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
