import React from 'react'
import Logo from '../components/Logo'
import Features from '../components/Features'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import Pg1 from '../components/Pg1'
import Infinitslider from './Infinitslider'
import Pg_1 from '../components/Pg_1'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Communites from '../components/Communites'
import ReadingDashboard from '../components/ReadingDashboard'
import CTA from '../components/CTA'

function Home() {
  return (
    <>
      <Navbar />
      {/* <Logo /> */}
      <Pg_1 />
      <Pg1 />

      <Infinitslider />
      <Features />
      <Communites />
      <ReadingDashboard />
      <CTA />
      <Footer />
    </>
  )
}

export default Home
