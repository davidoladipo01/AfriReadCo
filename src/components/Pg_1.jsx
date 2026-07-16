import React from 'react'
import designImage from '../assets/design.jpg'
import Button from './Button'
import { Link } from 'react-router-dom'
import Logo from './Logo'

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
                    <div className='hero-contents2'>Africa's Home <span>for Readers</span></div>


                    <div className='hero-contents3'>Because every great African story deserves a reader who truly connects with it.</div>

                    <div className="hero-buttons">

                        <Button to="/register" className='mt-6 inline-block rounded-xl shadow-md bg-black button focus:outline-none focus:ring-2' text='Sign Up' />
                        <a className='underline mt-6 py-3 px-5 text-sm' href=""><Link to={"/login"}>Sign In</Link></a>

                    </div>

                </div>

            </div>

            <div className="hero-right">
                <div className="hero-overlay2"></div>
                <img
                    src={designImage}
                    alt="African books"
                />

            </div>

        </section>
    )
}

export default Pg_1
