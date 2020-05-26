/* eslint-disable react/prop-types */
import React from 'react'

function Layout (props) {
  return (
    <div className="min-w-full min-h-screen">
      {props.children}
    </div>
  )
}

export default Layout
