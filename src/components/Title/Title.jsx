import React from 'react'
import './Title.css'

// eslint-disable-next-line react/prop-types
const Title = ({title, subtitle}) => {
  return (
    <div className="title">
        <p>{title}</p>
        <h1>{subtitle}</h1>
    </div>
  )
}

export default Title