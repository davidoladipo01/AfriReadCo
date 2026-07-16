// import React from 'react'

// function Logo() {
//   return (
//     <div>
//       <svg className="ar-adinkra-accent" viewBox="0 0 60 60" aria-hidden="true">
//         <circle cx="30" cy="30" r="28" fill="none" stroke="#5A3E2B" strokeWidth="1.5"/>
//         <circle cx="30" cy="30" r="18" fill="none" stroke="#5A3E2B" strokeWidth="1"/>
//         <circle cx="30" cy="30" r="8"  fill="none" stroke="#D9A441" strokeWidth="1.5"/>
//         <line x1="30" y1="2"  x2="30" y2="58" stroke="#5A3E2B" strokeWidth="0.8"/>
//         <line x1="2"  y1="30" x2="58" y2="30" stroke="#5A3E2B" strokeWidth="0.8"/>
//       </svg>
 
//       {/* Brand */}
//       <div className="ar-auth-brand">
//         <div className="ar-auth-brand-mark">
//           <svg viewBox="0 0 16 16" fill="none">
//             <rect x="1" y="2" width="9" height="12" rx="1" fill="white" opacity="0.9"/>
//             <rect x="4" y="2" width="9" height="12" rx="1" fill="white" opacity="0.55"/>
//           </svg>
//         </div>
//         <span className="ar-auth-brand-name">Afri<span>Read</span>Co</span>
//       </div>
//     </div>
//   )
// }

// export default Logo

import React from "react";

const Logo = ({
  width = 125,
  height = 60,
  className = "",
  bookColor = "#F8F4EC",
  accentColor = "#D9A441",
  textColor = "#F8F4EC",
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 180 60"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Book */}
      <g transform="translate(4 8)">
        <path
          d="M8 36V8c6-4 14-4 20 0v28c-6-4-14-4-20 0Z"
          fill={bookColor}
          stroke={bookColor}
          strokeWidth="1.5"
        />

        <path
          d="M28 36V8c6-4 14-4 20 0v28c-6-4-14-4-20 0Z"
          fill={bookColor}
          stroke={bookColor}
          strokeWidth="1.5"
        />

        <line
          x1="28"
          y1="8"
          x2="28"
          y2="36"
          stroke={accentColor}
          strokeWidth="2"
        />
      </g>

      {/* Wordmark */}
      <text
        x="60"
        y="36"
        fontFamily="Georgia, serif"
        fontSize="22"
        fontWeight="700"
        fill={textColor}
      >
        Afri
        <tspan fill={accentColor}>Read</tspan>
        Co
      </text>
    </svg>
  );
};

export default Logo;
