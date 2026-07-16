import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
import Logo from './Logo'

const Pg1 = () => {
  return (
    <div>
      <section className='sec1_small'>
        <div className="home-container">
        <div className="hero-overlay"></div>
          <div className="home-hero-content">
            {/* <span className='hero-content1'>AfriReadCo</span> */}
            <div className='hero-content2'>Africa's Home <span>for Readers</span></div>
            <div className='hero-content3'>Because every great African story deserves a reader who truly connects with it.</div>
            <Button to="/register" className='mt-6 inline-block rounded-xl shadow-md bg-black button focus:outline-none focus:ring-2' text='Sign Up' />
            <a className='underline mt-6  py-3 px-5 text-sm' href=""><Link to={"/login"}>Sign In</Link></a>
          </div>

          <div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Pg1
