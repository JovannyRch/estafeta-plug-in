import React from "react"
const InfoIcon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        {...props}
    >
        <circle cx={8} cy={8} r={8} fill="#12263C" />
        <path
            fill="#fff"
            d="M7.996 5.87c-.58 0-.97-.38-.97-.87s.39-.87.97-.87.97.36.97.84c0 .52-.39.9-.97.9ZM7.216 12V6.62h1.56V12h-1.56Z"
        />
    </svg>
)
export default InfoIcon
