import React from 'react'
import designImage from '../assets/design_result_result.webp'
import Button from './Button'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import { motion } from 'framer-motion'

const Pg_1 = () => {

    return (
        <section className="hero">

            <div className="hero-left">

                {/* Replace with your logo */}

                    {/* <Logo /> */}

                {/* <img
                    src="/logo.svg"
                    alt="AfriReadCo"
                    className="hero-logo"
                /> */}

                <div className="hero-content">

                    {/* <p className="hero-content title">
                        AfriReadCo
                    </p> */}
                    <motion.div className='hero-contents2' initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut', delay: 0.12 }}>Africa's Home <span>for Readers</span></motion.div>


                    <motion.div className='hero-contents3' initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut', delay: 0.24 }}>Because every great African story deserves a reader who truly connects with it.</motion.div>

                    <motion.div className="hero-buttons" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut', delay: 0.36 }}>

                        <Button to="/register" className='mt-6 inline-block rounded-xl shadow-md bg-black button focus:outline-none focus:ring-2' text='Sign Up' />
                        <a className='underline mt-6 py-3 px-5 text-sm' href=""><Link to={"/login"}>Sign In</Link></a>

                    </motion.div>

                </div>

            </div>

            <motion.div className="hero-right" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut', delay: 0.48 }}>
                <div className="hero-overlay2"></div>
                <img
                    src={designImage}
                    alt="African books"
                />

            </motion.div>

        </section>
    )
}

export default Pg_1
