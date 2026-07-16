import React from 'react'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'
import * as yup from 'yup'
import Logo from '../components/Logo'

const Register = () => {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: (values) => {
      console.log(values)
    },
    validationSchema: yup.object({
      fullName: yup
        .string()
        .required('Full Name is required')
        .min(3, 'Full Name must be at least 3 characters'),

      email: yup.string().required('Email is required').email('Invalid email format'),

      password: yup
        .string()
        .required('Password is required')
        .matches(
          /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          'Password must be at least 8 characters long and contain at least one uppercase letter, one number, and one special character'
        ),
      confirmPassword: yup
        .string()
        .required('Confirm Password is required')
        .oneOf([yup.ref('password'), null], 'Passwords must match'),
    }),
  })

  console.log(formik.values)

  return (
    <div className="register-page">
      <div className="register-card">
        <div><Logo bookColor="#5A3E2B"
          textColor="#2B2B2B"
          accentColor="#C65D3B" /></div>


        <h1>Join AfriReadco</h1>
        <p className="subtitle">
          Create your account and start your reading journey
        </p>

        <form onSubmit={formik.handleSubmit} noValidate>
          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Full Name"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <small className="text-danger">
            {formik.touched.fullName && formik.errors.fullName ? formik.errors.fullName : ''}
          </small>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email Address"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <small className="text-danger">
            {formik.touched.email && formik.errors.email ? formik.errors.email : ''}
          </small>

          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <small className="text-danger">
            {formik.touched.password && formik.errors.password ? formik.errors.password : ''}
          </small>

          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}

          />
          <small className="text-danger">
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? formik.errors.confirmPassword : ''}
          </small>

          <button type="submit" className="create-btn">
            <Link style={{ textDecoration: "none", color: "inherit" }} to={"/Dashboard"}>Create Account</Link>
          </button>
        </form>

        <div className="divider">
          <span>or continue with</span>
        </div>

        <button className="google-btn" type="button">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
          />
          Sign up with Google
        </button>

        <p className="signin-text">
          Already have an account?<Link to={"/Login"}>Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register
