import React from 'react'

import Layout from '../components/layout'
import Header from '../components/header'
import NoiseFilterCoverage from '../components/noiseFilterCoverage'
import Footer from '../components/footer'

export default function Home () {
  return (
    <Layout>
      <Header/>
      <NoiseFilterCoverage/>
      <Footer/>
    </Layout>
  )
}
