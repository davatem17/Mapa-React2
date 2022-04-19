import * as React from "react"

const SvgComponent = (props) => (
  <svg
    transform="rotate(270)"
    xmlns="http://www.w3.org/2000/svg"
    height={40}
    cx={20}
    cy={20}
    width={40}
    {...props}
  >
    <path
      d="m20.002 3.682-1.131 3.39a12.374 12.374 0 0 1 1.131-.062 12.374 12.374 0 0 1 1.129.056l-1.129-3.384zM20 7.625A12.374 12.374 0 0 0 7.625 20 12.374 12.374 0 0 0 20 32.375 12.374 12.374 0 0 0 32.375 20 12.374 12.374 0 0 0 20 7.625z"
      stroke="#333"
      strokeWidth={1.9}
      fill="green"
    />
    <circle cx={20} cy={20} r={5.825} />
  </svg>
)

export default SvgComponent
