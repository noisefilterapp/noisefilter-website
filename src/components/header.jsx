import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { FaGithub } from 'react-icons/fa'
import { motion } from 'framer-motion'

function Header () {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo/icon48.png" }) {
        childImageSharp {
          fixed (height: 24, quality: 100) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
  `)

  return (
    <header className="py-8 bg-purple-600">
      <div className="md:w-8/12 px-8 mx-auto flex content-center justify-between">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex content-center h-12">
          <Img fixed={data.file.childImageSharp.fixed} alt="Speech bubble with cross running through the middle" className="self-center mr-2"/>
          <h1 className="font-headers self-center text-white text-2xl cursor-pointer pt-1 pb-2 pr-2"><Link to="/">NoiseFilter</Link></h1>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex hidden md:block">
          <button className="min-w-32 h-12 self-center border border-solid border-gray-200 rounded shadow transition duration-500 ease-in-out transform hover:scale-105">
            <a href="https://github.com/noisefilterapp/noisefilter" target="_blank" rel="noreferrer">
              <div className="flex justify-center center-content">
                <FaGithub color="white" className="self-center mr-3"/>
                <span className="font-content text-gray-200 text-lg">GitHub</span>
              </div>
            </a>
          </button>
        </motion.div>
      </div>
    </header>
  )
}

export default Header
