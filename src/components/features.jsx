import React from 'react'
import { Link } from 'gatsby'

function Features () {
  return (
    <div className="bg-white py-16">
      <div className="flex justify-center my-4">
        <h2 className="w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12 text-center font-headers self-center text-gray-800 text-2xl lg:text-3xl">Looking to filter out the noise from your internet browsing experience?</h2>
      </div>
      <div className="flex justify-center my-4">
        <p className="w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12 text-center font-content self-center text-gray-800 text-lg lg:text-xl">Let&#39;s face it, visiting your average comment section is not just an unwanted distraction, it&#39;s an addictive distraction. That&#39;s why I developed Noise Filter, an extension for your web browser that hides the comment sections from popular news and social media <Link className="text-purple-600" to="/coverage">websites</Link>, including Facebook, Twitter, and Youtube.</p>
      </div>
      <div className="flex justify-center py-8">
        <div className="w-10/12 md:w-7/12 lg:w-10/12 xl:w-8/12 flex flex-wrap lg:flex-no-wrap justify-between">
          <div className="w-full rounded-lg overflow-hidden shadow-xl lg:mx-2 mb-16 lg:mb-0">
            <img className="w-full" src={'/features/automatic.gif'} alt="GIF demonstrating the automatic nature of Noise Filter"/>
            <div className="px-6 py-10">
              <h3 className="font-headers font-bold text-xl mb-2">Automatic</h3>
              <p className="font-content text-md text-gray-800">No setup required! Every time you visit a <Link className="text-purple-600" to="/coverage">website</Link> covered by Noise Filter the comment section will be blocked automatically.</p>
            </div>
          </div>
          <div className="w-full rounded-lg overflow-hidden shadow-xl lg:mx-2 mb-16 lg:mb-0">
            <img className="w-full" src={'/features/pause.gif'} alt="GIF demonstrating the pause feature of Noise Filter"/>
            <div className="px-6 py-10">
              <h3 className="font-headers font-bold text-xl mb-2">Pause</h3>
              <p className="font-content text-md text-gray-800">Want to see what all the fuss is about? With the extension paused you will be able to view comment sections on all websites as normal.</p>
            </div>
          </div>
          <div className="w-full rounded-lg overflow-hidden shadow-xl lg:mx-2 lg:mb-0">
            <img className="w-full" src={'/features/whitelist.gif'} alt="GIF demonstrating the whitelisting feature of Noise Filter"/>
            <div className="px-6 py-10">
              <h3 className="font-headers font-bold text-xl mb-2">Whitelist</h3>
              <p className="font-content text-md text-gray-800">Want to view the comment sections on certain websites, but not others? Whitelist your favourite websites with the click of a button.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
