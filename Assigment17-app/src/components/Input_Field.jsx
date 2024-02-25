import React from 'react'
import { TextField } from '@mui/material'

const Input_Field = (props) => {
  return (
    < input {...props} className='w-full px-2 py-4 border-gray-200 border rounded-md focus:outline-primary_color'  />
  )
}

export default Input_Field