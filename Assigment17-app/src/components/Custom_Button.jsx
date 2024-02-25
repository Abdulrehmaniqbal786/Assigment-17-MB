import React from 'react'

const Custom_Button = (props) => {
  return (
    <div>
      <button className='bg-blue-700 w-full py-3 p-5 text-white font-bold rounded-md' {...props}>
        {props.children}
      </button>
    </div>
  )
}

export { Custom_Button}