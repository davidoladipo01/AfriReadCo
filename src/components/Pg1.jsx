import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import { motion } from 'framer-motion'

const Pg1 = () => {
  return (
    <div>
      <section className='sec1_small'>
        <div className="home-container">
        <div className="hero-overlay"></div>
          <div className="home-hero-content">
            {/* <span className='hero-content1'>AfriReadCo</span> */}
            <motion.div className='hero-content2' initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut', delay: 0.12 }}>Africa's Home <span>for Readers</span></motion.div>
            <motion.div className='hero-content3' initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut', delay: 0.24 }}>Because every great African story deserves a reader who truly connects with it.</motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut', delay: 0.36 }}>
              <Button to="/register" className='mt-6 inline-block rounded-xl shadow-md bg-black button focus:outline-none focus:ring-2' text='Sign Up' />
              <a className='underline mt-6  py-3 px-5 text-sm' href=""><Link to={"/login"}>Sign In</Link></a>
            </motion.div>
          </div>

          <div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Pg1
