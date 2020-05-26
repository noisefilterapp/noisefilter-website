import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { motion } from 'framer-motion'

function Hero () {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "hero/hero.png" }) {
        childImageSharp {
          fluid (quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return (
    <div className="bg-purple-600 pb-32">
      <div className="flex justify-center py-8">
        <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="w-10/12 md:w-full font-headers text-center self-center text-white text-2xl lg:text-4xl">Ditch the Comments Section with Noise Filter</motion.h2>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 1 }} className="flex justify-center">
        <Img fluid={data.file.childImageSharp.fluid} alt="Graphic of a desktop monitor displaying a news website with the Noise Filter extension active" className="w-11/12 md:w-8/12 lg:w-7/12 xl:w-6/12"/>
      </motion.div>
    </div>
  )
}

export default Hero
