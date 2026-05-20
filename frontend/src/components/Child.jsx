import React from 'react'

const Child = ({name, department, mobile}) => {
  return (
    <div>
        <p>{`My name is ${name}`}</p>
        <p> Department: {department}</p>
        <p> Mobile: {mobile}</p>
    </div>
  )
}

export default Child