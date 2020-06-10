/* eslint-disable react/prop-types */
import React from 'react'
import Firefox from '../components/firefox'
import Chrome from '../components/chrome'
import Edge from '../components/edge'
import { FaFirefox, FaChrome, FaEdge, FaDownload } from 'react-icons/fa'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

function DownloadButton (props) {
  return (
    <div className="flex justify-center center-content">
      <FaDownload className="self-center mr-3"/>
      <span className="text-serif font-content text-gray-800 text-lg ">Download for {props.browser}</span>
    </div>
  )
}

function DownloadImage (props) {
  if (props.browser === 'Edge') {
    return <Edge/>
  } else if (props.browser === 'Chrome') {
    return <Chrome/>
  } else {
    return <Firefox/>
  }
}

class DownloadOptions extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentBrowser: 'Firefox'
    }
  }

  switchBrowser (browser) {
    this.setState(() => ({
      currentBrowser: browser
    }))
  }

  render () {
    return (
      <div>
        <div className="flex justify-center mt-4">
          <h2 className="w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12 text-center font-headers self-center text-gray-800 text-2xl lg:text-3xl">Download Noise Filter for your favourite browser</h2>
        </div>
        <div className="flex justify-center mt-8 mb-4">
          <div className="w-4/12 md:w-2/12 xl:w-1/12 flex justify-between my-4">
            <Tippy content="Firefox">
              <button onClick={() => this.switchBrowser('Firefox')} className="transition duration-500 ease-in-out transform hover:scale-110">
                {this.state.currentBrowser === 'Firefox'
                  ? <FaFirefox size={24} className="text-purple-600"/>
                  : <FaFirefox size={24}/>
                }
              </button>
            </Tippy>
            <Tippy content="Chrome">
              <button onClick={() => this.switchBrowser('Chrome')} className="transition duration-500 ease-in-out transform hover:scale-110">
                {this.state.currentBrowser === 'Chrome'
                  ? <FaChrome size={24} className="text-purple-600"/>
                  : <FaChrome size={24}/>
                }
              </button>
            </Tippy>
            <Tippy content="Edge">
              <button onClick={() => this.switchBrowser('Edge')} className="transition duration-500 ease-in-out transform hover:scale-110">
                {this.state.currentBrowser === 'Edge'
                  ? <FaEdge size={24} className="text-purple-600"/>
                  : <FaEdge size={24}/>
                }
              </button>
            </Tippy>
          </div>
        </div>
        <div className="flex justify-center mb-8">
          <button className="min-w-72 h-12 bg-white self-center border border-solid border-gray-200 rounded shadow transition duration-500 ease-in-out transform hover:scale-105">
            {this.state.currentBrowser === 'Firefox' && (
              <a href="https://addons.mozilla.org/en-GB/firefox/addon/noise-filter/" target="_blank" rel="noreferrer">
                <DownloadButton browser={this.state.currentBrowser}/>
              </a>
            )}
            {this.state.currentBrowser === 'Chrome' && (
              <a href="https://chrome.google.com/webstore/detail/noise-filter/amdamikbiepicglbfbgfmjjhemodckim/" target="_blank" rel="noreferrer">
                <DownloadButton browser={this.state.currentBrowser}/>
              </a>
            )}
            {this.state.currentBrowser === 'Edge' && (
              <a href="https://microsoftedge.microsoft.com/addons/detail/lmepanbjainklihelienhhbgmggmpgoi" target="_blank" rel="noreferrer">
                <DownloadButton browser={this.state.currentBrowser}/>
              </a>
            )}
          </button>
        </div>
        <div className="flex justify-center">
          <DownloadImage browser={this.state.currentBrowser}/>
        </div>
      </div>
    )
  }
}

function Download () {
  return (
    <div className="bg-blue-200 py-16">
      <DownloadOptions/>
    </div>
  )
}

export default Download
