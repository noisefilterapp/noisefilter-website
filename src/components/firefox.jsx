import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

function Firefox () {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "browsers/Firefox/firefox.png" }) {
        childImageSharp {
          fluid (quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return (
    <Img fluid={data.file.childImageSharp.fluid} alt="Image of Noise Filter installed on the Firefox web browser" className="sm:hidden md:block md:w-10/12 lg:w-7/12 xl:w-6/12"/>
  )
}

export default Firefox
