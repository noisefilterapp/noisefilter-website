import React from 'react'
import { FaGithub } from 'react-icons/fa'

function Contribute () {
  return (
    <div className="py-16">
      <div className="flex justify-center my-4">
        <h2 className="w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12 text-center font-headers self-center text-gray-800 text-2xl lg:text-3xl">Want to contribute?</h2>
      </div>
      <div className="flex justify-center my-4">
        <p className="w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12 text-center font-content self-center text-gray-800 text-lg lg:text-xl">Have a suggestion for improving the extension, found an issue, or would like to use the application as the basis for a new project?</p>
      </div>
      <div className="flex justify-center my-8">
        <button className="min-w-72 h-12 self-center bg-purple-600 border border-solid border-gray-200 rounded shadow transition duration-500 ease-in-out transform hover:scale-105">
          <a href="https://github.com/noisefilterapp/noisefilter" target="_blank" rel="noreferrer">
            <div className="flex justify-center center-content">
              <FaGithub color="white" className="self-center mr-3"/>
              <span className="font-content text-white text-lg">GitHub</span>
            </div>
          </a>
        </button>
      </div>
    </div>
  )
}

export default Contribute
