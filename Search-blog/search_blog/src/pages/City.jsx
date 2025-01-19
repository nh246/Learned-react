import React from 'react'
import { useParams } from 'react-router'

const City = () => {
    const {city} = useParams()
  return (
    <div className='p-5'>My Current Location is: {city}</div>
  )
}

export default City