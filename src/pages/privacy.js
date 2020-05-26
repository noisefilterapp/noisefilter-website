import React from 'react'

import Layout from '../components/layout'
import Header from '../components/header'
import PrivacyPolicy from '../components/privacyPolicy'
import Footer from '../components/footer'

export default function Home () {
  return (
    <Layout>
      <Header/>
      <PrivacyPolicy/>
      <Footer/>
    </Layout>
  )
}
