import React from 'react'
import { Link } from 'gatsby'
import { FaHome } from 'react-icons/fa'
import { motion } from 'framer-motion'

const coverage = [
  '9to5mac',
  'AV Club',
  'ABC News',
  'The Athletic',
  'BBC',
  'Buzzfeed',
  'CBC Canada',
  'C|Net',
  'Cracked',
  'The Daily Express',
  'The Daily Mail',
  'The Daily Mirror',
  'Engadget',
  'Facebook',
  'Fox News',
  'Gamespot',
  'Gamasutra',
  'Global News Canada',
  'The Globe and Mail',
  'The Guardian',
  'Huffington Post',
  'The Independent',
  'Imgur',
  'Kotaku',
  'The Evening Standard',
  'Medium',
  'The National Post',
  'The New York Times',
  'News Australia',
  'Polygon',
  'Reddit',
  'SB Nation',
  'Slate',
  'Soundcloud',
  'The Sun',
  'Sydney Morning Herald',
  'The Daily Telegraph',
  'Toronto Sun',
  'Twitter',
  'Vancouver Sun',
  'The Verge',
  'Wales Online',
  'Wall Street Journal',
  'Washington Post',
  'Yahoo News',
  'Youtube'
]

function CoverageList (props) {
  const coverage = props.coverage
  const listItems = coverage.map((url, index) =>
    <p key={index} className="w-full md:w-1/3 font-content text-center text-gray-800 text-xl mb-4">{url}</p>
  )
  return listItems
}

function NoiseFilterCoverage () {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="py-12">
      <div className="flex justify-center mb-8">
        <h2 className="w-10/12 text-center font-headers self-center text-gray-800 text-2xl lg:text-3xl">Websites covered by Noise Filter</h2>
      </div>
      <div className="flex justify-center">
        <div className="w-10/12 lg:w-8/12 flex flex-wrap justify-between">
          <CoverageList coverage={coverage}/>
        </div>
      </div>
      <div className="flex justify-center my-12">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="flex">
          <button className="min-w-64 h-12 self-center bg-purple-700 border border-solid border-gray-200 rounded shadow transition duration-500 ease-in-out transform hover:scale-105">
            <Link to={'/'}>
              <div className="flex justify-center center-content">
                <FaHome color="white" className="self-center mr-3"/>
                <span className="font-content text-gray-200 text-lg">Return to Home</span>
              </div>
            </Link>
          </button>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default NoiseFilterCoverage
