// import React from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from "formik"
import * as yup from "yup"
import Logo from '../components/Logo'


const Login = () => {

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    },

    onSubmit: (values) => {
      console.log(values);

    },

    validationSchema: yup.object({
      firstName: yup.string().required("First Name is required").min(3, "First Name must be at least 3 characters"),
      lastName: yup.string().required("Last Name is required").min(3, "Last Name must be at least 3 characters"),
      email: yup.string().required("Email is required").email("Invalid email format"),
      password: yup.string().required("Password is required").matches(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "Password must be at least 8 characters long and contain at least one uppercase letter, one number, and one special character")
    })
  })
  console.log(formik.values);
  
  return (
<div className="ar-right">
    <div className="ar-card-auth">
 
      {/* Adinkra decorative corner */}
      <svg className="ar-adinkra-accent" viewBox="0 0 60 60" aria-hidden="true">
        <circle cx="30" cy="30" r="28" fill="none" stroke="#5A3E2B" strokeWidth="1.5"/>
        <circle cx="30" cy="30" r="18" fill="none" stroke="#5A3E2B" strokeWidth="1"/>
        <circle cx="30" cy="30" r="8"  fill="none" stroke="#D9A441" strokeWidth="1.5"/>
        <line x1="30" y1="2"  x2="30" y2="58" stroke="#5A3E2B" strokeWidth="0.8"/>
        <line x1="2"  y1="30" x2="58" y2="30" stroke="#5A3E2B" strokeWidth="0.8"/>
      </svg>
 
      {/* Brand */}
      <div className="/ar-auth-brand">
        <div className="/ar-auth-brand-mark">
<Logo bookColor="#5A3E2B"
          textColor="#2B2B2B"
          accentColor="#C65D3B" />
        </div>
        {/* <span className="ar-auth-brand-name">Afri<span>Read</span>Co</span> */}
      </div>
 
      <h2 className="ar-auth-title">Welcome Back</h2>
      <p className="ar-auth-sub">Continue your reading journey with Africa's most engaging reading community.</p>
 
      <form className="ar-form" onSubmit={formik.handleSubmit}>
 
        {/* Email */}
        <div className="ar-field">
          <label className="ar-label" htmlFor="email">Email Address</label>
          <div className="ar-input-wrap">
            <input className="ar-input" type="email" name="email" placeholder="you@example.com" autoComplete="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
            <small className="text-danger">{formik.touched.email && formik.errors.email ? formik.errors.email : ""} </small> <br />
            <span className="ar-input-icon" aria-hidden="true"><i className="ti ti-mail"></i></span>
          </div>
        </div>
 
        {/* Password */}
        <div className="ar-field">
          <label className="ar-label" htmlFor="password">Password</label>
          <div className="ar-input-wrap">
            <input className="ar-input" type="password" name="password" placeholder="Your password" autoComplete="current-password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
            <small className="text-danger">{formik.touched.password && formik.errors.password ? formik.errors.password : ""} </small> <br />
          </div>
        </div>

 
        {/* Sign In */}
        <button className="ar-btn-primary" type="button">
          <Link style={{ textDecoration: 'none', color: 'inherit' }} to={"/Dashboard"}>Sign In</Link>
        </button>
 
        {/* Divider */}
        <div className="ar-divider">
          <div className="ar-divider-line"></div>
          <span className="ar-divider-text">OR</span>
          <div className="ar-divider-line"></div>
        </div>
 
        {/* Social login */}
        <button className="google-btn" type="button">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
          />
          Continue with Google
        </button>
      </form>
 
      <p className="ar-footer-text">
        
        Don't have an account? <a href="#"><Link to={"/register"}>Create an Account</Link></a>
      </p>
 
    </div>
  </div>
 
  )
}

export default Login
