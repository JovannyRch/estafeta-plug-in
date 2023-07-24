import React from "react"
const DropdownIcon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={40}
        height={40}
        fill="none"
        {...props}
    >
        <rect
            width={39}
            height={39}
            x={0.5}
            y={0.5}
            fill="#475968"
            stroke="#12263C"
            rx={6.5}
        />
        <path
            fill="#fff"
            d="M22.205 24.22c-.78 1.273-2.63 1.273-3.41 0l-3.788-6.174C14.19 16.713 15.15 15 16.712 15h7.576c1.563 0 2.522 1.713 1.705 3.046l-3.788 6.175Z"
        />
    </svg>
)
export default DropdownIcon
