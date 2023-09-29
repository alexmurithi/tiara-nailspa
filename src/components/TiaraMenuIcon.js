/* eslint-disable react/no-unknown-property */
import React from 'react'
import { SvgIcon } from '@mui/material'

const TiaraMenuIcon = props => {
  return (
    <SvgIcon {...props}>
      <svg
        width="42"
        height="42"
        viewBox="0 0 42 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="42" height="42" rx="4" fill="#DB2777" />
        <path
          d="M5.25 21H36.75"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.25 10.5H36.75"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.25 31.5H36.75"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  )
}

export default TiaraMenuIcon
