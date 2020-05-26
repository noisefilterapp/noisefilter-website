import React from 'react'
import { Link } from 'gatsby'
function Contribute () {
  return (
    <div className="bg-gray-600 py-12">
      <div className="flex justify-center">
        <p className="w-10/12 lg:w-1/4 font-content text-center self-center text-white text-md">Noise Filter by <a className="font-bold" href="https://www.linkedin.com/in/rhys-edwards-74a1101aa" target="_blank" rel="noreferrer">Rhys Edwards</a>.</p>
      </div>
      <div className="flex justify-center">
        <p className="w-10/12 lg:w-1/4 font-content text-center self-center text-white text-md">The source code is licensed <a className="font-bold" href="https://github.com/noisefilterapp/noisefilter/blob/master/LICENSE" target="_blank" rel="noreferrer">MIT</a>.</p>
      </div>
      <div className="flex justify-center my-4">
        <p className="w-8/12 lg:w-1/3 font-content text-center self-center text-white text-sm"><Link to="/privacy">Privacy Policy</Link></p>
      </div>
    </div>
  )
}

export default Contribute
