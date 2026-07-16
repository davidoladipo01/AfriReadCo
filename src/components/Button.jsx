import React from 'react'
import { Link } from 'react-router-dom';

function Button({ to, text = "Sign In", className="btn btn-dark inline-block mt-6 rounded-xl shadow-md button" }) {

    if (to) {
    return (
      <Link to={to} className={className}>
        {text}
      </Link>
    );
  }
  return (
      <button className={className}>
        {text}
      </button>
  )
}

export default Button
