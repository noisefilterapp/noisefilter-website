import React from 'react'

import Layout from '../components/layout'
import Header from '../components/header'
import Hero from '../components/hero'
import Features from '../components/features'
import Download from '../components/download'
import Contribute from '../components/contribute'
import Footer from '../components/footer'

export default function Home () {
  return (
    <Layout>
      <Header/>
      <Hero/>
      <Features/>
      <Download/>
      <Contribute/>
      <Footer/>
    </Layout>
  )
}
