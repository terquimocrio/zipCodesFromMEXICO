import React from 'react'

export default function Title(props) {

  const {text} = props;

  return (
    <div > 
      <h1 className='text-center'>{text}</h1>
    </div>
  )
}



